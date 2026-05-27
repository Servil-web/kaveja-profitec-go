# Coffee Manual App

A small, static web app that presents a step-by-step coffee-making manual with images.

Built with: plain HTML, CSS and JavaScript — no build tools or external dependencies required.

Project structure

- `index.html` — main page and UI skeleton
- `style.css` — styles and layout
- `app.js` — app-level JavaScript (initialization, UI hooks)
- `steps.js` — step data and logic for navigating steps
- `resources/` — images used by the manual (e.g. `step1.jpg`, `step2.jpg`, ...)

Features

- Step-by-step instructions with images
- Simple responsive layout
- Keyboard and UI navigation between steps (implemented in `steps.js`)

How to use

- Open `index.html` in your browser to run the app locally.
- For a better development experience, use any static server or the "Live Server" extension in VS Code to serve the folder and enable auto-reload.

Development notes

- Edit content for each step inside `steps.js` (the data structure contains the step titles, descriptions, and image paths).
- Layout and styling live in `style.css`.
- App logic and event handling live in `app.js`.

Extending the project

- Add more steps or reorder them by editing `steps.js`.
- Replace or add images in `resources/` and update the paths in `steps.js`.
- Add accessibility improvements (ARIA attributes, better keyboard support, focus management).

License

This repository currently has no license. Add a `LICENSE` file if you want to make usage terms explicit.

Acknowledgements

- Made for quick documentation of a manual-style workflow. Images included in `resources/`.
