# Radhika's portfolio: how it works

## Edit your content (no coding needed)
Open `js/content.js`. Everything on the site is in there: interests on the papers,
project cards, the About text, skills, and contact links. It is all placeholder text,
so replace it, save, and refresh the page.

## Drawer behaviour (you can test both)
- `drawerMode: "stack"` (default): all drawers start open; an open drawer hides the ones below it, and closing it reveals them.
- `drawerMode: "scroll"`: drawers start closed and open one by one as you scroll.
- Try either without editing: add `?drawers=stack` or `?drawers=scroll` to the page address.

## Replace these files with your own
- `assets/resume.pdf`  -> your real resume (keep the same file name)
- `assets/projects/`   -> project thumbnails (then set `thumb: "assets/projects/name.jpg"` in content.js)

## Preview on your computer
Double-click `index.html`, or run `python -m http.server 8000` in this folder and open http://localhost:8000

## Go back to the simple minimal version
The previous minimal site is saved in the `minimal/` folder.
To switch back: copy `minimal/index.html` and `minimal/style.css` into the main folder
(replace `index.html` and `style.css`). You can then delete `css/`, `js/` and `assets/`.
