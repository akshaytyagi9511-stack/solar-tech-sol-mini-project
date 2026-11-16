# Solar Tech Solutions — Multi-Page Web Application

## 1. Project Overview
A clean, responsive multi-page frontend web project built to showcase solar energy solutions, residential and commercial solar packages, an interactive annual savings estimator, and a customer inquiry system. This project demonstrates core client-side web development, dynamic DOM manipulation, and browser storage techniques.

## 2. Short Description / Purpose
**Solar Tech Solutions** is a structured 5-page web application designed to educate homeowners on solar power benefits and help them choose the right solar package. It focuses on providing clear cost estimates, dynamic package filtering, and seamless cross-page data transfer. This project is intended for homeowners evaluating renewable energy transitions and serves as a practical demonstration of foundational HTML, CSS, and Vanilla JavaScript concepts.

## 3. Tech Stack
The project was built using the following tools and technologies:
- **HTML5:** Used for semantic page structuring across five linked views (`index.html`, `about.html`, `products.html`, `calculator.html`, `contact.html`) and responsive viewport configuration.
- **CSS3 (`style2.css`):** Implemented a unified design theme, responsive layout rules, active navigation link highlighting, and custom styling classes.
- **Vanilla JavaScript (`script.js`):** Built interactive features using DOM manipulation (`getElementById`, `querySelectorAll`, `createElement`), event listeners (`click`, `input`, `mouseover`, `mouseout`, `submit`), array methods (`forEach`, `find`, `map`, `reduce`, `filter`), and browser `localStorage`.

## 4. Project Structure
More info on how the project files and assets are organized:
- **Source Files:** Consists of 5 HTML pages, 1 external stylesheet (`style2.css`), 1 external script file (`script.js`), and 1 hero image asset (`rooftop.jpg`).
- **Package Data Model:** Stores solar package details (3 kW, 5 kW, and 10 kW systems) as an array of JavaScript objects containing system capacity, ideal home size, formatted pricing, and numeric cost values for live searching and statistical calculations.

## 5. Features / Highlights
The project follows a structured frontend development approach:
- **Business Problem:** Homeowners considering rooftop solar often struggle to understand how solar power works, compare package costs for their home size, and estimate potential yearly electricity bill savings.
- **Goal of the Application:** To build an intuitive, multi-page website using pure HTML, CSS, and JavaScript that educates users, calculates annual savings with automatic system recommendations, and streamlines quote inquiries.
- **Walkthrough of Key Functionality:**
  - **Active Navigation Highlighting:** Automatically detects the current page URL and highlights the active menu link across all pages.
  - **Dynamic Product Table & Search (`products.html`):** Renders solar packages dynamically from a JavaScript object array and allows real-time keyword searching using `.find()`.
  - **Cross-Page Quote Selection (`localStorage`):** Clicking **Select** on any package saves the chosen system in `localStorage` and auto-fills the message box upon redirecting to `contact.html`.
  - **Quick Savings Estimator & Statistics (`calculator.html`):** Calculates
