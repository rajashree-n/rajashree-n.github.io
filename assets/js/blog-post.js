document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector(".blog-post-topbar")) {
    var topbar = document.createElement("header");
    topbar.className = "blog-post-topbar";
    topbar.innerHTML =
      '<div class="blog-post-topbar__inner">' +
      '<a class="blog-post-brand" href="index.html">Rajashree <span>Naik</span></a>' +
      '<nav class="blog-post-nav" aria-label="Primary">' +
      '<a href="index.html">About</a>' +
      '<a href="blogs/index.html" class="is-active">Blogs</a>' +
      '<a href="project.html">Projects</a>' +
      '<a href="https://www.linkedin.com/in/rajashree-naik/">LinkedIn</a>' +
      "</nav>" +
      "</div>";
    document.body.insertBefore(topbar, document.body.firstChild);
  }

  var titleHeading = document.querySelector(".mdl-card__media h3, .mdl-card__media h5");
  if (titleHeading) {
    var rawTitle = titleHeading.textContent.replace(/\s+/g, " ").trim();
    if (rawTitle) {
      document.title = rawTitle + " | Rajashree Naik";
    }
  }

  document.querySelectorAll(".mdl-card__media h3 a, .mdl-card__media h5 a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href === "" || href === "newbg3.html" || href === "#") {
      var span = document.createElement("span");
      span.innerHTML = link.innerHTML;
      link.replaceWith(span);
    }
  });

  var media = document.querySelector(".mdl-card__media");
  if (media && !media.querySelector(".blog-back-link")) {
    var backLink = document.createElement("a");
    backLink.className = "blog-back-link";
    backLink.href = "blogs/index.html";
    backLink.innerHTML = '<span aria-hidden="true">&#8592;</span> Back to Blogs';
    media.insertBefore(backLink, media.firstChild);
  }

  document.querySelectorAll(".gallery a").forEach(function (item) {
    item.setAttribute("href", item.querySelector("img") ? item.querySelector("img").getAttribute("src") : "#");
    item.setAttribute("target", "_blank");
    item.setAttribute("rel", "noopener noreferrer");
  });
});
