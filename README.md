# AI Daily Hub

AI Daily Hub is an automatically updated website that curates the latest news, jokes and short-form video ideas about artificial intelligence. The site is designed to run entirely on GitHub Pages with no backend server.

## Features

- **Automated content**: A GitHub Actions workflow runs every morning at 08:00 UTC, executing `generator.py` to fetch and summarise AI news via the OpenAI API and update `assets/content.json`.
- **Dynamic front ‑end**: The single-page web app loads news, jokes, shorts and video suggestions from `content.json` and renders them with JavaScript.
- **Ready to customise**: Edit the HTML, CSS, JS or content file to change the look and feel, add your own videos or modify the update schedule.
- **No server required**: Hosted via GitHub Pages. Just add your OpenAI API key as a repository secret to enable automatic updates.

## Getting Started

1. **Clone the repository** or [download a zip](https://github.com/your-username/ai-run-site/archive/refs/heads/main.zip).
2. **Enable GitHub Pages**: On the repository Settings → Pages, choose the `main` branch and root folder.
3. **Add your OpenAI API key**: Under Settings → Secrets and variables → Actions, create a secret named `OPENAI_API_KEY` and paste your key.
4. (Optional) **Run the generator locally**:
   ```bash
   python3 generator.py
   ```
   This writes a fresh `assets/content.json` using your API key.

Once GitHub Pages is enabled and the secret is added, the daily workflow will run automatically and the site will refresh with new content.

## Repository Structure

```
.
├── index.html               # Main website HTML
├── assets/
│   ├── style.css            # Stylesheet
│   ├── app.js               # Front ‑end script to load content.json
│   ├── content.json         # Data for news, jokes, shorts and videos
│   └── logo.svg             # Placeholder logo
├── generator.py             # Script to generate/refresh content.json
├── .github/workflows/daily.yml  # GitHub Actions workflow to update content daily
└── README.md                # This file
```

## Customising the Site

- **Change the theme**: Edit `assets/style.css` for colours and typography.
- **Add/modify content**: Manually edit `assets/content.json` or extend `generator.py` to pull different sources.
- **Embed your own videos**: Insert video URLs and titles in the `videos` array in `content.json`.
- **Adjust update schedule**: Modify the `schedule` block in `.github/workflows/daily.yml` to run at different times.

## License

This project is provided for educational purposes. Feel free to fork and adapt it for your own AI news or entertainment website.
