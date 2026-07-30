# Arnold Stanley Portfolio — Version 32

Version 32 converts the former monolithic one-page portfolio into a lightweight static multi-page site.

Routes:
- `/` — homepage, About, research interests, and route overview
- `/education/` — education, summer schools, skills, and additional training
- `/experience/` — fellowships, editorial work, internships, and social impact
- `/publications/` — selected highlights and full publication record
- `/recognition/` — awards, competitions, ADR activities, and credentials
- `/research/` — presentations, conferences, memberships, lectures, and organisational work

Performance architecture:
- substantially smaller homepage DOM and HTML;
- no external fonts;
- signature remains inline SVG;
- no content virtualization or delayed rendering on the homepage;
- no active service worker or cache-first HTML layer;
- Netlify CDN stale-while-revalidate caching through `netlify.toml`;
- browser HTML revalidation to avoid stale pages;
- complete sitemap and robots file for all routes.
