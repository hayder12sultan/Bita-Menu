# Bita Coffee & Burger Menu

A lightweight digital menu for Bita Coffee & Burger. The app displays menu categories, item names, descriptions, prices, and allows users to search the menu quickly.

## Features

- Search menu items by name or keyword
- Filter by menu category
- Clean, responsive cafe-style layout
- Menu data stored separately for easy updates

## Project Structure

- `menu-data.js` — menu categories and item data
- `index.html` — page structure
- `style.css` — styling and layout
- `script.js` — renders the menu and handles interactions

## How to Run

Open `index.html` directly in a browser, or serve the project locally:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

This project is designed to make menu updates simple: you can edit the menu data in `menu-data.js` and the page will reflect the changes automatically through the JavaScript rendering logic.
