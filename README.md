# Arnold Stanley Portfolio — Version 28

Version 28 is a stability-focused revision of Version 27.

Changes:
- removes `content-visibility: auto` and intrinsic-size containment so the full page renders normally;
- keeps the grain overlay, mix-blend mode, and blur filter removed;
- hides the decorative architectural hero background on phones and tablets;
- adds page-show and tab-visibility safeguards that restore all content to a visible state;
- cache-busts CSS and JavaScript with Version 28 query strings;
- adds a Netlify `_headers` file requiring revalidation of HTML, CSS, and JavaScript;
- retains all Version 27 content, links, favicon files, sitemap, and desktop design.
