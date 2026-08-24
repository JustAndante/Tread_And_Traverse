(function () {
  "use strict";

  var article = document.querySelector("[data-doc-article]");
  var outline = document.querySelector("[data-doc-outline]");
  var outlinePanel = document.querySelector("[data-doc-sidebar]");
  var productPanel = document.querySelector("[data-product-sidebar]");
  if (!article) return;

  var productLinks = Array.prototype.slice.call(document.querySelectorAll(".product-nav a"));

  function normalizedPath(pathname) {
    return pathname.replace(/\/index\.html$/, "/").replace(/\/$/, "");
  }

  function updateProductActiveLink() {
    var currentPath = normalizedPath(window.location.pathname);
    var candidates = productLinks.filter(function (link) {
      return normalizedPath(new URL(link.href, window.location.href).pathname) === currentPath;
    });

    productLinks.forEach(function (link) {
      link.classList.remove("is-active");
    });
    if (!candidates.length) return;

    var active = candidates[0];
    candidates.forEach(function (link) {
      var url = new URL(link.href, window.location.href);
      var targetId = decodeURIComponent(url.hash.slice(1));
      var target = targetId ? document.getElementById(targetId) : null;
      if (target && target.getBoundingClientRect().top <= 170) active = link;
    });
    active.classList.add("is-active");
  }

  var sectionHeadings = Array.prototype.slice.call(article.querySelectorAll("h2"));
  sectionHeadings.forEach(function (heading, index) {
    if (!heading.id) heading.id = "section-" + (index + 1);
  });

  function splitLabel(label) {
    var separators = [" — ", ": "];
    for (var index = 0; index < separators.length; index += 1) {
      var separator = separators[index];
      var position = label.indexOf(separator);
      if (position > 0 && position < label.length - separator.length) {
        return {
          prefix: label.slice(0, position).trim(),
          suffix: label.slice(position + separator.length).trim()
        };
      }
    }
    return null;
  }

  var splitCounts = {};
  sectionHeadings.forEach(function (heading) {
    var parts = splitLabel(heading.textContent.trim());
    if (parts) splitCounts[parts.prefix] = (splitCounts[parts.prefix] || 0) + 1;
  });

  var linkById = {};
  var familyByPrefix = {};
  if (outline && outlinePanel) {
    sectionHeadings.forEach(function (heading, index) {
      var label = heading.textContent.trim();
      var parts = splitLabel(label);
      var grouped = parts && splitCounts[parts.prefix] > 1;
      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = grouped ? parts.suffix : label;
      link.dataset.headingId = heading.id;
      linkById[heading.id] = link;

      if (grouped) {
        var family = familyByPrefix[parts.prefix];
        if (!family) {
          var details = document.createElement("details");
          details.className = "doc-nav-group";
          if (Object.keys(familyByPrefix).length === 0 && index < 3) details.open = true;

          var summary = document.createElement("summary");
          var title = document.createElement("span");
          title.textContent = parts.prefix;
          summary.appendChild(title);
          details.appendChild(summary);

          var children = document.createElement("div");
          children.className = "doc-nav-group__children";
          details.appendChild(children);
          outline.appendChild(details);

          family = { details: details, children: children };
          familyByPrefix[parts.prefix] = family;
        }
        family.children.appendChild(link);
      } else {
        link.className = "doc-nav-link";
        outline.appendChild(link);
      }
    });

    if (sectionHeadings.length < 2) outlinePanel.parentNode.hidden = true;
  }

  var compact = window.matchMedia("(max-width: 58rem)");
  function applySidebarMode() {
    [outlinePanel, productPanel].forEach(function (panel) {
      if (!panel) return;
      if (compact.matches) panel.removeAttribute("open");
      else panel.setAttribute("open", "");
    });
  }
  applySidebarMode();
  if (compact.addEventListener) compact.addEventListener("change", applySidebarMode);

  var ticking = false;
  function updateActiveLink() {
    ticking = false;
    updateProductActiveLink();
    if (!sectionHeadings.length) return;
    var active = sectionHeadings[0];
    for (var index = 0; index < sectionHeadings.length; index += 1) {
      if (sectionHeadings[index].getBoundingClientRect().top <= 150) active = sectionHeadings[index];
      else break;
    }
    Object.keys(linkById).forEach(function (id) {
      linkById[id].classList.toggle("is-active", id === active.id);
    });
    var activeLink = linkById[active.id];
    if (activeLink) {
      var family = activeLink.closest(".doc-nav-group");
      if (family) family.open = true;
    }
  }
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateActiveLink);
    }
  }, { passive: true });
  document.addEventListener("tt:content-visibility-changed", updateActiveLink);
  window.addEventListener("hashchange", updateActiveLink);
  updateActiveLink();

  var searchInput = document.querySelector("[data-doc-search]");
  var searchResults = document.querySelector("[data-doc-search-results]");
  if (!searchInput || !searchResults) return;

  function cleanText(value) {
    return value.replace(/\s+/g, " ").trim();
  }
  function normalized(value) {
    return cleanText(value).toLocaleLowerCase();
  }

  function indexArticle(root, pageUrl) {
    var pageTitleNode = root.querySelector("h1");
    var pageTitle = pageTitleNode ? cleanText(pageTitleNode.textContent) : "";
    return Array.prototype.slice.call(root.querySelectorAll("h2")).map(function (heading, index) {
      var parts = [heading.textContent];
      var cursor = heading.nextElementSibling;
      while (cursor && cursor.tagName !== "H2") {
        parts.push(cursor.textContent || "");
        cursor = cursor.nextElementSibling;
      }
      var text = cleanText(parts.join(" "));
      return {
        id: heading.id || "section-" + (index + 1),
        pageTitle: pageTitle,
        title: cleanText(heading.textContent),
        text: text,
        normalized: normalized(pageTitle + " " + text),
        order: index,
        url: pageUrl
      };
    });
  }

  var currentUrl = new URL(window.location.href);
  currentUrl.hash = "";
  var searchIndex = indexArticle(article, currentUrl.href);
  var searchablePages = Array.prototype.slice.call(document.querySelectorAll("[data-search-page]"))
    .map(function (link) {
      var url = new URL(link.href, window.location.href);
      url.hash = "";
      return url.href;
    })
    .filter(function (url, index, all) {
      return normalizedPath(new URL(url).pathname) !== normalizedPath(currentUrl.pathname) &&
        all.indexOf(url) === index;
    });
  var searchPagesRequested = false;
  var searchPagesLoading = false;

  function loadSearchablePages() {
    if (searchPagesRequested) return;
    searchPagesRequested = true;
    searchPagesLoading = true;

    Promise.all(searchablePages.map(function (url) {
      return fetch(url, { credentials: "same-origin" })
        .then(function (response) {
          if (!response.ok) throw new Error("HTTP " + response.status);
          return response.text();
        })
        .then(function (html) {
          var documentCopy = new DOMParser().parseFromString(html, "text/html");
          var remoteArticle = documentCopy.querySelector("[data-doc-article]");
          return remoteArticle ? indexArticle(remoteArticle, url) : [];
        })
        .catch(function () {
          return [];
        });
    })).then(function (pageIndexes) {
      pageIndexes.forEach(function (items) {
        searchIndex = searchIndex.concat(items);
      });
      searchPagesLoading = false;
      renderSearch();
    });
  }

  function renderSearch() {
    var query = normalized(searchInput.value);
    searchResults.textContent = "";
    if (query.length < 2) {
      searchResults.hidden = true;
      return;
    }
    loadSearchablePages();

    var matches = searchIndex.filter(function (item) {
      return item.normalized.indexOf(query) !== -1;
    }).slice(0, 10);

    if (!matches.length) {
      var empty = document.createElement("span");
      empty.className = "doc-search-results__empty";
      if (searchPagesLoading) {
        empty.textContent = document.documentElement.lang.indexOf("ru") === 0 ? "Ищем по разделу…" : "Searching this plugin…";
      } else {
        empty.textContent = document.documentElement.lang.indexOf("ru") === 0 ? "Ничего не найдено" : "No results";
      }
      searchResults.appendChild(empty);
      searchResults.hidden = false;
      return;
    }

    matches.forEach(function (item) {
      var link = document.createElement("a");
      link.href = item.url + "#" + item.id;

      var title = document.createElement("strong");
      title.textContent = item.pageTitle ? item.pageTitle + " · " + item.title : item.title;
      link.appendChild(title);

      var rawPosition = item.normalized.indexOf(query);
      var start = Math.max(0, rawPosition - 45);
      var snippetText = item.text.slice(start, start + 145);
      if (start > 0) snippetText = "…" + snippetText;
      if (start + 145 < item.text.length) snippetText += "…";

      var snippet = document.createElement("span");
      snippet.textContent = snippetText;
      link.appendChild(snippet);
      link.addEventListener("click", function () {
        searchInput.value = "";
        searchResults.hidden = true;
        if (compact.matches && productPanel) productPanel.removeAttribute("open");
      });
      searchResults.appendChild(link);
    });
    searchResults.hidden = false;
  }

  searchInput.addEventListener("input", renderSearch);
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchResults.hidden = true;
      searchInput.blur();
    }
  });
}());
