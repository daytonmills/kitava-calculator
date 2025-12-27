// Kitava Nutrition Calculator - Application Logic

// State management
const state = {
    mode: 'byo', // 'byo', 'signature', 'sides'
    selections: {
        base: null,
        protein: null,
        veggies: [],
        sauce: null,
        extras: [],
        signatureBowl: null,
        smallPlates: []
    }
};

// Constants
const FREE_VEGGIES = 2;
const EXTRA_VEGGIE_PRICE = 4;
const BASE_BYO_PRICE = 10;

// DOM elements
const elements = {
    basesGrid: document.getElementById('bases-grid'),
    proteinsGrid: document.getElementById('proteins-grid'),
    veggiesGrid: document.getElementById('veggies-grid'),
    saucesGrid: document.getElementById('sauces-grid'),
    extrasGrid: document.getElementById('extras-grid'),
    signatureGrid: document.getElementById('signature-grid'),
    smallPlatesGrid: document.getElementById('small-plates-grid'),
    selectedList: document.getElementById('selected-list'),
    resetBtn: document.getElementById('reset-btn'),
    modeButtons: document.querySelectorAll('.mode-btn'),
    builderContents: document.querySelectorAll('.builder-content'),
    nutritionPanel: document.querySelector('.nutrition-panel'),
    // Values
    caloriesValue: document.getElementById('calories-value'),
    proteinValue: document.getElementById('protein-value'),
    fatValue: document.getElementById('fat-value'),
    carbsValue: document.getElementById('carbs-value'),
    fiberValue: document.getElementById('fiber-value'),
    sugarValue: document.getElementById('sugar-value'),
    sodiumValue: document.getElementById('sodium-value'),
    netCarbsValue: document.getElementById('net-carbs-value'),
    priceValue: document.getElementById('price-value')
};

// Initialize the app
function init() {
    renderOptions();
    setupEventListeners();
    updateNutrition();
    setupMobilePanel();
}

// Render all option cards
function renderOptions() {
    // Bases
    elements.basesGrid.innerHTML = nutritionData.bases.map(item =>
        createOptionCard(item, 'base', item.price > 0 ? `+$${item.price}` : 'Included')
    ).join('');

    // Proteins
    elements.proteinsGrid.innerHTML = nutritionData.proteins.map(item =>
        createOptionCard(item, 'protein', `+$${item.price}`)
    ).join('');

    // Veggies
    elements.veggiesGrid.innerHTML = nutritionData.veggies.map(item =>
        createOptionCard(item, 'veggie', item.price > 0 ? `+$${item.price}` : '')
    ).join('');

    // Sauces
    elements.saucesGrid.innerHTML = nutritionData.sauces.map(item =>
        createOptionCard(item, 'sauce', '')
    ).join('');

    // Extras
    elements.extrasGrid.innerHTML = nutritionData.extras.map(item =>
        createOptionCard(item, 'extra', `+$${item.price}`)
    ).join('');

    // Signature Bowls
    elements.signatureGrid.innerHTML = nutritionData.signatureBowls.map(item =>
        createSignatureCard(item)
    ).join('');

    // Small Plates
    elements.smallPlatesGrid.innerHTML = nutritionData.smallPlates.map(item =>
        createOptionCard(item, 'smallPlate', `$${item.price}`)
    ).join('');
}

// Create an option card
function createOptionCard(item, type, priceText) {
    const isIncluded = type === 'base' && item.price === 0;
    return `
    <div class="option-card" data-id="${item.id}" data-type="${type}">
      <div class="option-name">${item.name}</div>
      <div class="option-meta">
        <span class="option-calories">${Math.round(item.calories)} cal</span>
        <span class="option-price ${isIncluded ? 'included' : ''}">${priceText || (isIncluded ? 'Included' : '')}</span>
      </div>
    </div>
  `;
}

// Create a signature bowl card
function createSignatureCard(item) {
    return `
    <div class="signature-card" data-id="${item.id}" data-type="signature">
      <div class="option-name">${item.name}</div>
      <div class="option-description">${item.description}</div>
      <div class="signature-macros">
        <div class="signature-macro protein">
          <span class="signature-macro-value">${item.protein}g</span>
          <span class="signature-macro-label">Protein</span>
        </div>
        <div class="signature-macro fat">
          <span class="signature-macro-value">${item.fat}g</span>
          <span class="signature-macro-label">Fat</span>
        </div>
        <div class="signature-macro carbs">
          <span class="signature-macro-value">${Math.round(item.carbs)}g</span>
          <span class="signature-macro-label">Carbs</span>
        </div>
      </div>
      <div class="option-meta">
        <span class="option-calories">${item.calories} cal</span>
        <span class="option-price">$${item.price}</span>
      </div>
    </div>
  `;
}

// Setup event listeners
function setupEventListeners() {
    // Mode toggle
    elements.modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            switchMode(mode);
        });
    });

    // Option selection
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.option-card, .signature-card');
        if (card) {
            handleSelection(card);
        }
    });

    // Reset button
    elements.resetBtn.addEventListener('click', resetAll);
}

// Switch between modes
function switchMode(mode) {
    state.mode = mode;

    // Update button states
    elements.modeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Show/hide content
    elements.builderContents.forEach(content => {
        content.classList.remove('active');
    });

    const targetContent = document.getElementById(`${mode}-builder`);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    updateNutrition();
}

// Handle item selection
function handleSelection(card) {
    const id = card.dataset.id;
    const type = card.dataset.type;

    switch (type) {
        case 'base':
            toggleSingleSelection(card, 'base', nutritionData.bases);
            break;
        case 'protein':
            toggleSingleSelection(card, 'protein', nutritionData.proteins);
            break;
        case 'veggie':
            toggleMultiSelection(card, 'veggies', nutritionData.veggies);
            break;
        case 'sauce':
            toggleSingleSelection(card, 'sauce', nutritionData.sauces);
            break;
        case 'extra':
            toggleMultiSelection(card, 'extras', nutritionData.extras);
            break;
        case 'signature':
            toggleSingleSelection(card, 'signatureBowl', nutritionData.signatureBowls);
            break;
        case 'smallPlate':
            toggleMultiSelection(card, 'smallPlates', nutritionData.smallPlates);
            break;
    }

    updateNutrition();
}

// Toggle single selection (radio behavior)
function toggleSingleSelection(card, key, dataArray) {
    const id = card.dataset.id;
    const type = card.dataset.type;
    const grid = card.parentElement;

    // Find item in data
    const item = dataArray.find(i => i.id === id);

    // Check if already selected
    if (state.selections[key] && state.selections[key].id === id) {
        // Deselect
        state.selections[key] = null;
        card.classList.remove('selected');
    } else {
        // Deselect previous
        grid.querySelectorAll('.option-card.selected, .signature-card.selected').forEach(c => {
            c.classList.remove('selected');
        });

        // Select new
        state.selections[key] = item;
        card.classList.add('selected');
    }
}

// Toggle multi selection (checkbox behavior)
function toggleMultiSelection(card, key, dataArray) {
    const id = card.dataset.id;
    const item = dataArray.find(i => i.id === id);

    const index = state.selections[key].findIndex(i => i.id === id);

    if (index > -1) {
        // Deselect
        state.selections[key].splice(index, 1);
        card.classList.remove('selected');
    } else {
        // Select
        state.selections[key].push(item);
        card.classList.add('selected');
    }
}

// Calculate and update nutrition display
function updateNutrition() {
    let totals = {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        fiber: 0,
        sugar: 0,
        sodium: 0
    };

    let price = 0;
    const selectedItems = [];

    if (state.mode === 'byo') {
        price = BASE_BYO_PRICE;

        // Base
        if (state.selections.base) {
            addToTotals(totals, state.selections.base);
            price += state.selections.base.price;
            selectedItems.push({
                name: state.selections.base.name,
                calories: state.selections.base.calories
            });
        }

        // Protein
        if (state.selections.protein) {
            addToTotals(totals, state.selections.protein);
            price += state.selections.protein.price;
            selectedItems.push({
                name: state.selections.protein.name,
                calories: state.selections.protein.calories
            });
        }

        // Veggies
        state.selections.veggies.forEach((veggie, index) => {
            addToTotals(totals, veggie);
            // Extra veggies beyond free ones cost extra
            if (index >= FREE_VEGGIES) {
                price += EXTRA_VEGGIE_PRICE;
            }
            if (veggie.price) {
                price += veggie.price;
            }
            selectedItems.push({
                name: veggie.name,
                calories: veggie.calories
            });
        });

        // Sauce
        if (state.selections.sauce) {
            addToTotals(totals, state.selections.sauce);
            selectedItems.push({
                name: state.selections.sauce.name,
                calories: state.selections.sauce.calories
            });
        }

        // Extras
        state.selections.extras.forEach(extra => {
            addToTotals(totals, extra);
            price += extra.price;
            selectedItems.push({
                name: extra.name,
                calories: extra.calories
            });
        });
    } else if (state.mode === 'signature') {
        // Signature bowl
        if (state.selections.signatureBowl) {
            const bowl = state.selections.signatureBowl;
            totals.calories = bowl.calories;
            totals.protein = bowl.protein;
            totals.fat = bowl.fat;
            totals.carbs = bowl.carbs;
            totals.fiber = bowl.fiber || 0;
            totals.sodium = bowl.sodium || 0;
            price = bowl.price;
            selectedItems.push({
                name: bowl.name,
                calories: bowl.calories
            });
        }
    } else if (state.mode === 'sides') {
        // Small plates
        state.selections.smallPlates.forEach(plate => {
            addToTotals(totals, plate);
            price += plate.price;
            selectedItems.push({
                name: plate.name,
                calories: plate.calories
            });
        });
    }

    // Update display
    elements.caloriesValue.textContent = Math.round(totals.calories);
    elements.proteinValue.textContent = Math.round(totals.protein);
    elements.fatValue.textContent = Math.round(totals.fat);
    elements.carbsValue.textContent = Math.round(totals.carbs);
    elements.fiberValue.textContent = totals.fiber.toFixed(1);
    elements.sugarValue.textContent = totals.sugar.toFixed(1);
    elements.sodiumValue.textContent = Math.round(totals.sodium);
    elements.netCarbsValue.textContent = Math.round(totals.carbs - totals.fiber);
    elements.priceValue.textContent = price.toFixed(2);

    // Update macro rings
    updateMacroRings(totals);

    // Update selected items list
    updateSelectedList(selectedItems);
}

// Add item nutrition to totals
function addToTotals(totals, item) {
    totals.calories += item.calories || 0;
    totals.protein += item.protein || 0;
    totals.fat += item.fat || 0;
    totals.carbs += item.carbs || 0;
    totals.fiber += item.fiber || 0;
    totals.sugar += item.sugar || 0;
    totals.sodium += item.sodium || 0;
}

// Update the circular macro rings
function updateMacroRings(totals) {
    // Max values for the rings (adjust as needed)
    const maxProtein = 100;
    const maxFat = 100;
    const maxCarbs = 200;

    const circumference = 2 * Math.PI * 45; // 283

    // Calculate offsets
    const proteinOffset = circumference - (totals.protein / maxProtein) * circumference;
    const fatOffset = circumference - (totals.fat / maxFat) * circumference;
    const carbsOffset = circumference - (totals.carbs / maxCarbs) * circumference;

    // Update the rings
    document.querySelector('.protein-ring').style.strokeDashoffset = Math.max(0, proteinOffset);
    document.querySelector('.fat-ring').style.strokeDashoffset = Math.max(0, fatOffset);
    document.querySelector('.carbs-ring').style.strokeDashoffset = Math.max(0, carbsOffset);
}

// Update selected items list
function updateSelectedList(items) {
    if (items.length === 0) {
        elements.selectedList.innerHTML = '<li class="empty-state">Start building your bowl!</li>';
        return;
    }

    elements.selectedList.innerHTML = items.map(item => `
    <li>
      <span class="item-name">${item.name}</span>
      <span class="item-calories">${Math.round(item.calories)} cal</span>
    </li>
  `).join('');
}

// Reset all selections
function resetAll() {
    state.selections = {
        base: null,
        protein: null,
        veggies: [],
        sauce: null,
        extras: [],
        signatureBowl: null,
        smallPlates: []
    };

    // Remove all selected classes
    document.querySelectorAll('.option-card.selected, .signature-card.selected').forEach(card => {
        card.classList.remove('selected');
    });

    updateNutrition();
}

// Mobile panel toggle
function setupMobilePanel() {
    const panel = elements.nutritionPanel;

    panel.addEventListener('click', (e) => {
        // Check if clicking the drag handle area (top of panel)
        if (e.target === panel || e.offsetY < 30) {
            panel.classList.toggle('expanded');
        }
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
