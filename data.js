// Kitava Nutrition Data - Extracted from October Menu Nutrition PDF
// All values per serving as listed in the PDF

const nutritionData = {
    bases: [
        { id: 'jasmine-rice', name: 'Jasmine Rice', serving: 172, calories: 184, protein: 4, fat: 0.2, satFat: 0.11, carbs: 40, fiber: 0.48, sugar: 0, sodium: 1.42, price: 0 },
        { id: 'wild-rice', name: 'Wild Rice Blend', serving: 142, calories: 398, protein: 10, fat: 2, satFat: 0, carbs: 84, fiber: 7.56, sugar: 0, sodium: 87, price: 2 },
        { id: 'cauliflower-rice', name: 'Cauliflower Rice', serving: 151.3, calories: 153.9, protein: 3, fat: 12.8, satFat: 1.8, carbs: 9.1, fiber: 3.1, sugar: 2.8, sodium: 784.1, price: 2 },
        { id: 'farmers-greens', name: "Farmer's Greens", serving: 52.8, calories: 7.3, protein: 0.7, fat: 0.1, satFat: 0, carbs: 1.2, fiber: 0.5, sugar: 0.3, sodium: 12.9, price: 2 },
        { id: 'rice-noodles', name: 'Rice Noodles', serving: 89.9, calories: 316.3, protein: 4.3, fat: 6, satFat: 0.9, carbs: 58.4, fiber: 1.2, sugar: 0.1, sodium: 925.3, price: 0 }
    ],

    proteins: [
        { id: 'plant-patty', name: 'Plant Protein Patty', serving: 113.4, calories: 243, protein: 11, fat: 10, satFat: 1.14, carbs: 30, fiber: 10.98, sugar: 1.47, sodium: 915.01, price: 5, tags: ['vegan', 'vegetarian'] },
        { id: 'salmon', name: 'Grilled Salmon', serving: 127.6, calories: 177, protein: 30, fat: 5, satFat: 1.3, carbs: 0, fiber: 0, sugar: 0, sodium: 74, price: 9, tags: [] },
        { id: 'picadillo-beef', name: 'Picadillo Beef', serving: 113.4, calories: 236, protein: 24, fat: 13, satFat: 4.9, carbs: 4.8, fiber: 1.2, sugar: 1.5, sodium: 535, price: 7, tags: [] },
        { id: 'crispy-chicken', name: 'Crispy Chicken', serving: 140.8, calories: 286, protein: 29.7, fat: 8.2, satFat: 3.1, carbs: 21.6, fiber: 1.3, sugar: 0.8, sodium: 933, price: 7, tags: [] },
        { id: 'paprika-chicken', name: 'Paprika Chicken', serving: 113.4, calories: 215, protein: 30, fat: 9, satFat: 2.32, carbs: 2, fiber: 0.6, sugar: 0.21, sodium: 177.25, price: 6, tags: [] },
        { id: 'grilled-chicken', name: 'Grilled Chicken Breast (Cold)', serving: 113.4, calories: 220, protein: 32, fat: 9, satFat: 1.93, carbs: 0, fiber: 0, sugar: 0, sodium: 774.75, price: 6, tags: [] }
    ],

    veggies: [
        { id: 'brussels-sprouts', name: 'Brussels Sprouts', serving: 174.8, calories: 112.9, protein: 5.7, fat: 5, satFat: 2.3, carbs: 15.2, fiber: 6.5, sugar: 3.7, sodium: 139.4, price: 0 },
        { id: 'charred-broccoli', name: 'Charred Broccoli', serving: 158.2, calories: 67.6, protein: 4.4, fat: 2.2, satFat: 0.3, carbs: 10.4, fiber: 4.1, sugar: 2.7, sodium: 56.8, price: 0 },
        { id: 'cumin-beans', name: 'Cumin Beans', serving: 119.8, calories: 63.7, protein: 4.5, fat: 1.1, satFat: 0.1, carbs: 12, fiber: 3.4, sugar: 1.2, sodium: 329.2, price: 0 },
        { id: 'chimichurri-mushrooms', name: 'Chimichurri Mushrooms & Spinach', serving: 114, calories: 162, protein: 5, fat: 13, satFat: 1.69, carbs: 9, fiber: 3.67, sugar: 2.76, sodium: 171.07, price: 0 },
        { id: 'plantains', name: 'Plantains', serving: 231, calories: 316, protein: 3, fat: 5, satFat: 2.22, carbs: 72.33, fiber: 3.86, sugar: 39.71, sodium: 9.07, price: 0 },
        { id: 'hummus', name: 'Hummus', serving: 208.1, calories: 449.2, protein: 10.5, fat: 30.6, satFat: 4, carbs: 36, fiber: 9.6, sugar: 7.5, sodium: 947.5, price: 2 },
        { id: 'kale-slaw', name: 'Kale Slaw', serving: 160.5, calories: 182.3, protein: 4.8, fat: 14.9, satFat: 2, carbs: 11.5, fiber: 3.9, sugar: 4.5, sodium: 450.5, price: 0 },
        { id: 'sweet-potatoes', name: 'Sweet Potatoes', serving: 221.2, calories: 251.4, protein: 3.4, fat: 7.8, satFat: 2.7, carbs: 42.9, fiber: 6.4, sugar: 8.9, sodium: 149.4, price: 0 },
        { id: 'zaatar-cauliflower', name: "Za'atar Cauliflower", serving: 155.8, calories: 109.5, protein: 3.8, fat: 7.4, satFat: 2.8, carbs: 10.3, fiber: 4.7, sugar: 2.8, sodium: 404.7, price: 0 },
        { id: 'black-bean-corn', name: 'Black Bean & Corn Salad', serving: 140, calories: 134, protein: 5, fat: 3, satFat: 0.4, carbs: 23, fiber: 6.6, sugar: 3.5, sodium: 181, price: 0 },
        { id: 'miso-eggplant', name: 'Miso Eggplant', serving: 170, calories: 88, protein: 1.8, fat: 0.4, satFat: 0.1, carbs: 22, fiber: 4.2, sugar: 9.5, sodium: 763, price: 0 },
        { id: 'rainbow-carrots', name: 'Roasted Rainbow Carrots', serving: 114, calories: 88, protein: 0.8, fat: 4, satFat: 0.8, carbs: 12, fiber: 3.2, sugar: 7.2, sodium: 263, price: 0 },
        { id: 'fingerling-potatoes', name: 'Roasted Fingerling Potatoes', serving: 170, calories: 177, protein: 3, fat: 6.7, satFat: 0.7, carbs: 28, fiber: 4.4, sugar: 1.5, sodium: 66, price: 0 },
        { id: 'diced-cucumber', name: 'Diced Cucumber', serving: 100, calories: 15, protein: 0.6, fat: 0.1, satFat: 0, carbs: 3.6, fiber: 0.5, sugar: 1.7, sodium: 2, price: 2 }
    ],

    sauces: [
        { id: 'chipotle-aioli', name: 'Chipotle Aioli', serving: 56.5, calories: 355, protein: 2, fat: 39, satFat: 6.13, carbs: 1, fiber: 0.03, sugar: 0.43, sodium: 126.02, price: 0 },
        { id: 'avo-goddess', name: 'Avocado Goddess', serving: 56.7, calories: 111, protein: 4, fat: 8, satFat: 1.21, carbs: 5, fiber: 1.52, sugar: 1.78, sodium: 653.4, price: 0 },
        { id: 'house-ketchup', name: 'House Ketchup', serving: 57, calories: 60, protein: 1, fat: 0.2, satFat: 0.03, carbs: 15, fiber: 0.84, sugar: 13.28, sodium: 587.34, price: 0 },
        { id: 'ginger-ponzu', name: 'Ginger Ponzu', serving: 57, calories: 139, protein: 0, fat: 0, satFat: 0, carbs: 35, fiber: 0.12, sugar: 30.3, sodium: 2155.63, price: 0 },
        { id: 'romesco', name: 'Romesco', serving: 56.2, calories: 132.7, protein: 2.8, fat: 11.3, satFat: 1.2, carbs: 7.1, fiber: 1.4, sugar: 4, sodium: 387.8, price: 0 },
        { id: 'jalapeno-lime', name: 'Jalapeño Lime', serving: 57, calories: 209, protein: 3, fat: 21, satFat: 2.99, carbs: 4, fiber: 1.5, sugar: 1.04, sodium: 457.93, price: 0 },
        { id: 'herb-ranch', name: 'Herb Ranch', serving: 61, calories: 231, protein: 1, fat: 26, satFat: 0.92, carbs: 2, fiber: 0.25, sugar: 0.56, sodium: 170.53, price: 0 },
        { id: 'lemon-vinaigrette', name: 'Lemon Vinaigrette', serving: 56.7, calories: 300, protein: 0, fat: 34, satFat: 4.66, carbs: 1, fiber: 0.06, sugar: 0.49, sodium: 195.05, price: 0 },
        { id: 'no-sauce', name: 'No Sauce', serving: 0, calories: 0, protein: 0, fat: 0, satFat: 0, carbs: 0, fiber: 0, sugar: 0, sodium: 0, price: 0 }
    ],

    extras: [
        { id: 'guacamole', name: 'Guacamole', serving: 80, calories: 120, protein: 1.5, fat: 11, satFat: 1.5, carbs: 6, fiber: 4, sugar: 0.5, sodium: 150, price: 3 },
        { id: 'pastured-egg', name: 'Pastured Egg', serving: 50, calories: 78, protein: 6, fat: 5, satFat: 1.6, carbs: 0.6, fiber: 0, sugar: 0.6, sodium: 62, price: 3 },
        { id: 'avocado', name: 'Avocado', serving: 75, calories: 120, protein: 1.5, fat: 11, satFat: 1.5, carbs: 6, fiber: 5, sugar: 0.5, sodium: 5, price: 2 },
        { id: 'pickled-onions', name: 'Pickled Onions', serving: 30, calories: 15, protein: 0.3, fat: 0, satFat: 0, carbs: 3.5, fiber: 0.5, sugar: 2, sodium: 150, price: 1 },
        { id: 'sliced-almonds', name: 'Sliced Almonds', serving: 14, calories: 82, protein: 3, fat: 7, satFat: 0.5, carbs: 3, fiber: 1.7, sugar: 0.6, sodium: 0, price: 1 },
        { id: 'gf-croutons', name: 'GF Croutons', serving: 20, calories: 80, protein: 1, fat: 3, satFat: 0.3, carbs: 12, fiber: 1, sugar: 1, sodium: 120, price: 2 },
        { id: 'sesame-togarashi', name: 'Sesame Togarashi', serving: 10, calories: 52, protein: 1.6, fat: 4.5, satFat: 0.6, carbs: 2.1, fiber: 1.2, sugar: 0.1, sodium: 1, price: 2 },
        { id: 'cashew-crumble', name: 'Cashew Crumble', serving: 14, calories: 78, protein: 2.5, fat: 6.3, satFat: 1.1, carbs: 4.4, fiber: 0.5, sugar: 0.8, sodium: 3, price: 1 },
        { id: 'cassava-strips', name: 'Cassava Tortilla Strips', serving: 20, calories: 90, protein: 0.5, fat: 4, satFat: 0.5, carbs: 13, fiber: 1, sugar: 0, sodium: 80, price: 2 },
        { id: 'cilantro', name: 'Cilantro', serving: 5, calories: 1, protein: 0.1, fat: 0, satFat: 0, carbs: 0.2, fiber: 0.1, sugar: 0, sodium: 1, price: 0.5 },
        { id: 'green-onion', name: 'Green Onion', serving: 10, calories: 3, protein: 0.2, fat: 0, satFat: 0, carbs: 0.7, fiber: 0.3, sugar: 0.2, sodium: 2, price: 0.5 }
    ],

    signatureBowls: [
        { id: 'power-bowl', name: 'Power Bowl', description: 'Wild rice, hummus, sweet potatoes, avocado, pickled onions, almonds, avo goddess', calories: 1077, protein: 30, fat: 70, carbs: 86, fiber: 20.31, sodium: 3405.37, price: 13 },
        { id: 'sesame-chicken', name: 'Sesame Chicken Bowl', description: 'Jasmine rice, crispy chicken, charred broccoli, sesame togarashi, green onion, ginger ponzu', calories: 764, protein: 43, fat: 23, carbs: 98.93, fiber: 8.52, sodium: 2635.94, price: 16 },
        { id: 'sweet-plantain', name: 'Sweet Plantain Bowl', description: 'Jasmine rice, plantains, cumin beans, kale slaw, avocado, cilantro, romesco', calories: 838, protein: 19, fat: 38, carbs: 118.13, fiber: 13.97, sodium: 1182.98, price: 13 },
        { id: 'guac-greens', name: 'Guac & Greens Salad', description: "Farmer's greens, black bean & corn, red cabbage, pickled onions, guac, cassava strips, jalapeño lime", calories: 353, protein: 9, fat: 26, carbs: 25, fiber: 9.96, sodium: 535.66, price: 14 },
        { id: 'evolved-caesar', name: 'Evolved Caesar Salad', description: "Farmer's greens, radish, pastured egg, avocado, GF croutons, cashew parmesan, herb ranch", calories: 373.7, protein: 11.4, fat: 28.2, carbs: 22.2, fiber: 7.8, sodium: 1442.2, price: 10 },
        { id: 'grilled-chicken-salad', name: 'Grilled Chicken Salad', description: "Farmer's greens, grilled chicken (cold), cucumber, pickled onions, avo goddess", calories: 795, protein: 49, fat: 49, carbs: 43, fiber: 13.13, sodium: 1457.29, price: 15 },
        { id: 'citrus-salad', name: 'Citrus Salad', description: "Farmer's greens, citrus fruit, cucumber, pickled onions, avocado, almonds, lemon vinaigrette", calories: 554, protein: 7, fat: 50, carbs: 23, fiber: 7.81, sodium: 263.84, price: 12 }
    ],

    smallPlates: [
        { id: 'chicken-nuggets', name: 'Chicken Nuggets', serving: 283.2, calories: 324.7, protein: 30.3, fat: 8.4, satFat: 3.2, carbs: 31, fiber: 1.9, sugar: 9.3, sodium: 1312.8, price: 8 },
        { id: 'crispy-brussels', name: 'Crispy Brussels Sprouts', serving: 228.8, calories: 455, protein: 7.8, fat: 42.3, satFat: 8.7, carbs: 16, fiber: 6.5, sugar: 4.1, sodium: 256.1, price: 9 },
        { id: 'fried-plantains', name: 'Fried Plantains', serving: 283.8, calories: 645.4, protein: 5, fat: 41.1, satFat: 7.9, carbs: 73.1, fiber: 3.9, sugar: 40.1, sodium: 125.8, price: 6 },
        { id: 'zaatar-hummus', name: "Za'atar Cauliflower & Hummus", serving: 297.2, calories: 405.2, protein: 11.4, fat: 28, satFat: 5.5, carbs: 31.6, fiber: 10.5, sugar: 7.7, sodium: 1297.1, price: 7 },
        { id: 'cauliflower-bites', name: 'Cauliflower Bites with Ranch', serving: 213.4, calories: 419, protein: 3, fat: 39, satFat: 7.33, carbs: 17, fiber: 3.74, sugar: 3.63, sodium: 288.2, price: 7 },
        { id: 'kitava-fries', name: 'Kitava Fries', serving: 211, calories: 237, protein: 3, fat: 14, satFat: 6.7, carbs: 27, fiber: 4.08, sugar: 1.96, sodium: 923.4, price: 6 }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = nutritionData;
}
