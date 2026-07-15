# NMTC Prep

A free, static website that helps school students prepare for the **NMTC (National Mathematics
Talent Contest)** conducted by the AMTI (Association of Mathematics Teachers of India).

> ⚠️ Independent community project — not affiliated with the AMTI. Always verify dates, fees and
> exam pattern on the official site: [amtionline.com](https://www.amtionline.com).

## What's inside

| Page | What it does |
| --- | --- |
| `index.html` | Home — overview and links to every tool |
| `about.html` | What NMTC is: contest levels (Gauss → Aryabhata), the two stages, eligibility |
| `syllabus.html` | Level-wise topic map compiled from the style of past papers |
| `practice.html` | Interactive practice: 48 olympiad-style questions with instant feedback and full solutions |
| `mock-test.html` | Timed mock test — 10 random questions, 30-minute countdown, score card and answer review |
| `formulas.html` | Quick-revision sheets: number theory, algebra, geometry, combinatorics, contest tactics |
| `planner.html` | 8-week study plan with a progress tracker (saved in `localStorage`) |
| `resources.html` | Recommended books, official AMTI links and free online material |

No build step, no frameworks, no backend — plain HTML/CSS/JS. Everything works offline once loaded,
and planner/practice state stays in the visitor's browser.

## Hosting on GitHub Pages

1. Merge this branch into `main`.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set *Source* to **Deploy from a branch**, pick `main` and `/ (root)`, then save.
4. The site goes live at `https://<username>.github.io/<repo-name>/` within a minute or two.

All internal links are relative, so the site works under any repository name or custom domain.

## Development

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

Practice/mock-test questions live in [`js/questions.js`](js/questions.js) — add a question by
appending an object with `level`, `topic`, `q`, `options`, `answer` (index of the correct option)
and `solution`. Both the Practice page and the Mock Test pick it up automatically.

## License

Free to use and adapt for educational purposes.
