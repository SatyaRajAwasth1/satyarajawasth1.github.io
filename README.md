# Satya Raj Awasthi — academic website

Source for <https://satyarajawasth1.github.io>, built with [Astro](https://astro.build) and deployed to
GitHub Pages by `.github/workflows/astro.yml` on every push to `main`.

## Commands

| Command        | What it does                                                        |
| :------------- | :------------------------------------------------------------------ |
| `yarn install` | Install dependencies (Yarn 4, Node ≥ 22.23.4)                       |
| `yarn dev`     | Start the dev server at `localhost:4321`                            |
| `yarn build`   | Build the site into `dist/`                                         |
| `yarn preview` | Preview the built site                                              |
| `yarn cv`      | Compile `cv/SatyaRajAwasthi_CV.tex` and copy the PDF into `public/` |

`yarn cv` needs a LaTeX installation with `latexmk` (for example MacTeX or TeX Live).

## Where to edit content

| What                                 | File                                     |
| :----------------------------------- | :--------------------------------------- |
| Name, email, profile links, location | `src/config/site.yml`                    |
| Bio (top of the home page)           | `src/components/home/About.astro`        |
| Research interests                   | `src/components/home/ResearchInterests.astro` |
| Experience                           | `src/data/experience.yml`                |
| Education                            | `src/data/education.yml`                 |
| Service and community                | `src/data/service.yml`                   |
| News                                 | `src/data/news.yml`                      |
| Publications                         | `src/data/publications.yml`              |
| CV                                   | `cv/SatyaRajAwasthi_CV.tex`, then `yarn cv` |

Sections backed by a data file are hidden while that file is an empty list (`[]`), so News and
Publications appear automatically once they have their first entry. Each data file has an example at
the top. Profile links in `site.yml` with an empty value (such as `google_scholar`) are hidden too.

## Layout

- `src/layouts/Layout.astro`: page shell, metadata, and the theme script (auto / light / dark).
- `src/styles/global.css`: colors, typography, and the text-plus-margin grid.
- `src/components/`: header, footer, profile masthead, and section/list components.
