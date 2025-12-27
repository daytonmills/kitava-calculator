# Kitava Nutrition Calculator

A beautiful, Chipotle-style nutrition calculator for [Kitava Kitchen](https://kitava.com) - helping you build your custom bowl and track macros in real-time.

Use it here: https://daytonmills.github.io/kitava-calculator/

## Features

🥗 **Build Your Own Bowl** - Step-by-step builder with base, protein, veggies, sauce, and extras

📊 **Real-time Macro Tracking** - Animated ring visualizations for protein, fat, and carbs

🍽️ **Signature Bowls** - Quick-select pre-made combinations like Power Bowl and Sesame Chicken

🌮 **Small Plates** - Add sides like Chicken Nuggets, Crispy Brussels, and Kitava Fries

💰 **Price Calculator** - Tracks your total based on selections ($10 base + add-ons)

📱 **Mobile Responsive** - Collapsible nutrition panel for mobile devices

## Quick Start

Just open `index.html` in your browser - no build step or server required!

```bash
git clone https://github.com/yourusername/kitava-calculator.git
cd kitava-calculator
open index.html
```

## Tech Stack

- **HTML5** - Semantic markup
- **Vanilla CSS** - Premium dark theme with CSS custom properties
- **Vanilla JavaScript** - No frameworks, no dependencies
- **Google Fonts** - Inter typeface

## Project Structure

```
kitava-calculator/
├── index.html      # Main application
├── styles.css      # Premium dark theme
├── app.js          # Calculator logic
├── data.js         # Nutrition data from Kitava PDFs
└── README.md
```

## Nutrition Data

All nutrition information is extracted from Kitava's official October 2024 menu nutrition PDF. Includes:

- **5 Bases** - Jasmine Rice, Wild Rice, Cauliflower Rice, Farmer's Greens, Rice Noodles
- **6 Proteins** - Plant Patty, Salmon, Picadillo Beef, Crispy Chicken, Paprika Chicken, Grilled Chicken
- **14 Veggies** - Brussels, Broccoli, Cumin Beans, Mushrooms, Plantains, Hummus, and more
- **9 Sauces** - Chipotle Aioli, Avocado Goddess, Romesco, Herb Ranch, etc.
- **11 Extra Toppings** - Guacamole, Avocado, Pastured Egg, Almonds, etc.

## About Kitava

[Kitava Kitchen](https://kitava.com) serves real food that's **100% free of gluten, dairy, corn, soy, peanuts, refined sugar, and seed oils**. This calculator is an unofficial fan project to help customers track their nutrition.

## License

MIT License - feel free to fork and customize!

---

*Not affiliated with Kitava Kitchen. Nutrition data sourced from publicly available menu information.*
