# Bita Coffee & Burger Menu

A clean and responsive digital menu for Bita Coffee & Burger. This project displays menu categories, item details, and prices in a simple, modern layout that is easy to update.

## Overview

The menu is designed for quick browsing and easy maintenance. Menu items are stored in a separate JavaScript file, so updates can be made without editing the page structure or styling.

## Features

- Search menu items by keyword
- Filter by category
- Responsive layout for desktop and mobile
- Easy-to-update menu data structure
- Clean cafe-inspired design

## Project Structure

```text
Bita-Menu/
├── index.html
├── style.css
├── script.js
├── menu-data.js
└── README.md
```

### File Descriptions

- `index.html` — page structure and content containers
- `style.css` — colors, layout, typography, and responsive design
- `script.js` — renders the menu and handles search/filter behavior
- `menu-data.js` — stores all menu categories, products, and pricing data
- `README.md` — project overview and usage instructions

## How to Run

You can open `index.html` directly in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to Update the Menu

Edit the menu entries in `menu-data.js` to add or change:

- category names
- item names
- descriptions
- prices
- tags or labels

The page will automatically reflect the new data when the script renders.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Notes

This project is built to be lightweight and easy to maintain, making it suitable for small cafés, restaurants, or quick digital menu setups.