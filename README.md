<div align="center">

# Clothing Store Inventory Manager

**A focused inventory workspace for recording clothing items, discounts and final prices.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_App-14b8a6?style=for-the-badge&logo=githubpages&logoColor=white)](https://itaygoldenberg.github.io/Clothing-Store-Inventory-Manager/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)](https://developer.mozilla.org/docs/Web/JavaScript)

</div>

## Overview

Clothing Store Inventory Manager is a multi-page frontend application for managing a small clothing catalog. It combines validated form input, automatic discount calculations, dynamic inventory rendering and browser persistence in a clean, practical workflow.

## Features

- Add shirts, pants, dresses, skirts, hats, jackets, shoes and socks.
- Record a description, color, price, discount and product image URL.
- Validate prices, discount percentages and image URLs before saving.
- Calculate and display the final price after discount automatically.
- Color-code pricing information for easier scanning.
- Delete individual inventory items.
- Track the item count and average inventory price.
- Preserve inventory data with `localStorage`.
- Navigate between dedicated Home and About pages.

## Workflow

```text
Product form -> validation -> discount calculation -> localStorage -> inventory table
```

The application is fully client-side. Saved inventory belongs to the current browser and does not leave the device.

## Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Multi-page structure, form and inventory table |
| CSS3 | Responsive store interface and visual states |
| JavaScript | CRUD behavior, validation and calculations |
| Web Storage API | Persistent inventory state |

## Project Structure

```text
Clothing-Store-Inventory-Manager/
|-- index.html     Inventory workspace
|-- about.html     Project information
|-- style.css      Shared visual design
|-- main.js        Inventory and persistence logic
`-- README.md      Project documentation
```

## Run Locally

```bash
git clone https://github.com/itaygoldenberg/Clothing-Store-Inventory-Manager.git
cd Clothing-Store-Inventory-Manager
```

Open `index.html` directly, or use VS Code Live Server for local navigation between pages.

## Author

Built by **Itay Goldenberg**.

[GitHub](https://github.com/itaygoldenberg) | [LinkedIn](https://www.linkedin.com/in/itay-goldenberg/)
