const menuCategories = {
  burritos: {
    name: "Signature  Burritos",
    items: [
      { name: "Barrio Chicken", price: "$15.90", vegan: false },
      { name: "NZ Beef", price: "$16.90", vegan: false },
      { name: "Pulled Pork", price: "$17.50", vegan: false },
      { name: "Crispy Baja Fish", price: "$17.50", vegan: false },
      { name: "BBQ Jackfruit", price: "$15.90", vegan: true },
      { name: "Barrio Black Beans", price: "$15.90", vegan: true },
      { name: "Veg Fajita", price: "$15.90", vegan: true },
      { name: "Grilled Paneer", price: "$16.50", vegan: false },
    ],
    customizable: true,
    removeOptions: [
      "Cilantro Lime Rice",
      "Black Beans",
      "Cabbage",
      "Pico de Gallo",
      "Guacamole",
      "Cheese",
      "Sour Cream",
      "House Sauce",
    ],
    extras: [
      {
        category: "Extra Protein",
        items: [
          { name: "Extra Chicken", price: "+$3.00" },
          { name: "Extra Beef", price: "+$3.00" },
          { name: "Extra Pulled Pork", price: "+$3.50" },
          { name: "Extra Crispy Fish", price: "+$3.50" },
          { name: "Extra Jackfruit", price: "+$3.00" },
          { name: "Extra Veg Fajita", price: "+$2.50" },
          { name: "Extra Paneer", price: "+$3.00" },
        ],
      },
      {
        category: "Fresh Ingredients",
        items: [
          { name: "Extra Guacamole", price: "+$2.50" },
          { name: "Extra Pico de Gallo", price: "+$1.00" },
          { name: "Extra Corn Salsa", price: "+$1.00" },
          { name: "Extra Black Beans", price: "+$2.50" },
          { name: "Extra Cilantro Lime Rice", price: "+$2.00" },
          { name: "Extra Jalapenos", price: "+$1.00" },
        ],
      },
      {
        category: "Extras",
        items: [
          { name: "Extra Cheese", price: "+$1.50" },
          { name: "Extra Sour Cream", price: "+$1.50" },
          { name: "Extra House Sauce", price: "+$1.00" },
        ],
      },
    ],
  },
  tacos: {
    name: "Street Tacos",
    items: [
      {
        name: "1 Taco",
        price: "$8.90",
        proteins: [
          "Barrio Chicken",
          "NZ Beef",
          "Pulled Pork",
          "Crispy Baja Fish",
          "BBQ Jackfruit",
          "Barrio Black Beans",
          "Grilled Paneer",
        ],
      },
      { name: "2 Tacos", price: "$16.90", proteins: ["Your Choice"] },
      { name: "3 Tacos", price: "$23.90", proteins: ["Your Choice"] },
    ],
    customizable: true,
    removeOptions: [
      "Cheese",
      "Coriander",
      "Onions",
      "House Sauce",
      "Guacamole",
      "Sour Cream",
      "Pico de Gallo",
    ],
    extras: [
      {
        category: "Extra Protein",
        items: [
          { name: "Extra Chicken", price: "+$3.00" },
          { name: "Extra Beef", price: "+$3.00" },
          { name: "Extra Pulled Pork", price: "+$3.50" },
          { name: "Extra Fish", price: "+$3.50" },
          { name: "Extra Jackfruit", price: "+$3.00" },
          { name: "Extra Black Beans", price: "+$2.50" },
          { name: "Extra Paneer", price: "+$2.50" },
        ],
      },
      {
        category: "Fresh Ingredients",
        items: [
          { name: "Extra Guacamole", price: "+$3.00" },
          { name: "Extra Pico de Gallo", price: "+$1.00" },
          { name: "Extra Jalapenos", price: "+$1.00" },
        ],
      },
      {
        category: "Extras",
        items: [
          { name: "Extra Cheese", price: "+$1.50" },
          { name: "Extra Sour Cream", price: "+$1.50" },
          { name: "Extra House Sauce", price: "+$1.00" },
        ],
      },
    ],
  },
  quesadillas: {
    name: "Grilled Quesadillas",
    items: [
      { name: "Barrio Chicken", price: "$17.90", vegan: false },
      { name: "NZ Beef", price: "$18.90", vegan: false },
      { name: "Pulled Pork", price: "$19.50", vegan: false },
      { name: "Barrio Black Beans", price: "$17.90", vegan: true },
      { name: "Veg Fajita", price: "$17.90", vegan: true },
      { name: "Grilled Paneer", price: "$17.50", vegan: false },
    ],
    customizable: true,
    removeOptions: [
      "Cheese",
      "Onions",
      "Coriander",
      "Guacamole",
      "Sour Cream",
      "House Sauce",
    ],
    extras: [
      {
        category: "Extra Protein",
        items: [
          { name: "Extra Chicken", price: "+$4.00" },
          { name: "Extra Beef", price: "+$4.50" },
          { name: "Extra Pulled Pork", price: "+$5.50" },
          { name: "Extra Veg Fajita", price: "+$3.50" },
          { name: "Extra Paneer", price: "+$3.50" },
        ],
      },
      {
        category: "Fresh Ingredients",
        items: [
          { name: "Extra Guacamole", price: "+$3.00" },
          { name: "Extra Pico de Gallo", price: "+$1.00" },
          { name: "Extra Jalapenos", price: "+$1.00" },
        ],
      },
      {
        category: "Extras",
        items: [
          { name: "Extra Cheese", price: "+$2.50" },
          { name: "Extra Sour Cream", price: "+$2.50" },
          { name: "Extra House Sauce", price: "+$1.50" },
        ],
      },
    ],
  },
  nachos: {
    name: "Loaded Nachos",
    items: [
      { name: "Barrio Chicken", price: "$16.90", vegan: false },
      { name: "NZ Beef", price: "$17.90", vegan: false },
      { name: "Pulled Pork", price: "$18.50", vegan: false },
      { name: "BBQ Jackfruit", price: "$17.50", vegan: true },
      { name: "Barrio Black Beans", price: "$16.90", vegan: true },
      { name: "Grilled Paneer", price: "$17.50", vegan: false },
    ],
    customizable: true,
    removeOptions: [
      "Cheese",
      "Pico de Gallo",
      "Guacamole",
      "Sour Cream",
      "House Salsa Roja",
    ],
    extras: [
      {
        category: "Extra Protein",
        items: [
          { name: "Extra Chicken", price: "+$3.00" },
          { name: "Extra Beef", price: "+$3.00" },
          { name: "Extra Pulled Pork", price: "+$3.50" },
          { name: "Extra Jackfruit", price: "+$3.00" },
          { name: "Extra Black Beans", price: "+$2.50" },
          { name: "Extra Paneer", price: "+$2.50" },
        ],
      },
      {
        category: "Fresh Ingredients",
        items: [
          { name: "Extra Guacamole", price: "+$3.00" },
          { name: "Extra Pico de Gallo", price: "+$1.00" },
          { name: "Extra House Salsa Roja", price: "+$1.00" },
          { name: "Extra Jalapenos", price: "+$1.00" },
        ],
      },
      {
        category: "Extras",
        items: [
          { name: "Extra Cheese", price: "+$1.50" },
          { name: "Extra Sour Cream", price: "+$1.50" },
        ],
      },
    ],
  },
  bowls: {
    name: "Naked Burritos",
    items: [
      { name: "Barrio Chicken", price: "$15.90", vegan: false },
      { name: "NZ Beef", price: "$16.90", vegan: false },
      { name: "Pulled Pork", price: "$17.50", vegan: false },
      { name: "Crispy Baja Fish", price: "$17.50", vegan: false },
      { name: "BBQ Jackfruit", price: "$16.50", vegan: true },
      { name: "Barrio Black Beans", price: "$15.90", vegan: true },
      { name: "Veg Fajita", price: "$15.90", vegan: true },
      { name: "Grilled Paneer", price: "$16.50", vegan: false },
    ],
    customizable: true,
    removeOptions: [
      "Cilantro Lime Rice",
      "Black Beans",
      "Cabbage",
      "Pico de Gallo",
      "Guacamole",
      "Cheese",
      "Sour Cream",
      "House Sauce",
    ],
    extras: [
      {
        category: "Extra Protein",
        items: [
          { name: "Extra Chicken", price: "+$3.00" },
          { name: "Extra Beef", price: "+$3.00" },
          { name: "Extra Pulled Pork", price: "+$3.50" },
          { name: "Extra Crispy Fish", price: "+$3.50" },
          { name: "Extra BBQ Jackfruit", price: "+$3.00" },
          { name: "Extra Barrio Black Beans", price: "+$2.50" },
          { name: "Extra Veg Fajita", price: "+$2.50" },
          { name: "Extra Grilled Paneer", price: "+$2.50" },
        ],
      },
      {
        category: "Fresh Ingredients",
        items: [
          { name: "Extra Guacamole", price: "+$3.00" },
          { name: "Extra Pico de Gallo", price: "+$1.00" },
          { name: "Extra Corn Salsa", price: "+$1.00" },
          { name: "Extra Black Beans", price: "+$2.50" },
          { name: "Extra Cilantro Lime Rice", price: "+$2.00" },
          { name: "Extra Jalapenos", price: "+$1.00" },
        ],
      },
      {
        category: "Extras",
        items: [
          { name: "Extra Cheese", price: "+$1.50" },
          { name: "Extra Sour Cream", price: "+$1.50" },
          { name: "Extra House Sauce", price: "+$1.00" },
        ],
      },
    ],
  },
  fries: {
    name: "Loaded Fries",
    items: [
      { name: "Barrio Chicken", price: "$15.90", vegan: false },
      { name: "NZ Beef", price: "$16.90", vegan: false },
      { name: "Pulled Pork", price: "$17.50", vegan: false },
      { name: "BBQ Jackfruit", price: "$16.50", vegan: true },
      { name: "Barrio Black Beans", price: "$15.90", vegan: true },
      { name: "Grilled Paneer", price: "$16.50", vegan: false },
    ],
    customizable: true,
    removeOptions: [
      "Cheese",
      "Pico de Gallo",
      "Guacamole",
      "Sour Cream",
      "House Salsa Roja",
      "House Sauce",
      "Coriander",
    ],
    extras: [
      {
        category: "Extra Protein",
        items: [
          { name: "Extra Chicken", price: "+$3.00" },
          { name: "Extra Beef", price: "+$3.00" },
          { name: "Extra Pulled Pork", price: "+$3.50" },
          { name: "Extra Jackfruit", price: "+$3.00" },
          { name: "Extra Black Beans", price: "+$2.50" },
          { name: "Extra Paneer", price: "+$2.50" },
        ],
      },
      {
        category: "Fresh Ingredients",
        items: [
          { name: "Extra Guacamole", price: "+$3.00" },
          { name: "Extra Pico de Gallo", price: "+$1.00" },
          { name: "Extra House Salsa Roja", price: "+$1.00" },
          { name: "Extra Jalapenos", price: "+$1.00" },
        ],
      },
      {
        category: "Extras",
        items: [
          { name: "Extra Cheese", price: "+$1.50" },
          { name: "Extra Sour Cream", price: "+$1.50" },
          { name: "Extra House Sauce", price: "+$1.00" },
        ],
      },
    ],
  },
  sides: {
    name: "Sides",
    items: [
      { name: "Fries", price: "$6.20", vegan: true },
      { name: "Loaded Cheese Fries", price: "$10.40", vegan: false },
      { name: "Spicy Loaded Fries 🌶️", price: "$13.55", vegan: false },
      { name: "Street-Style Loaded Corn Chips", price: "$12.50", vegan: false },
      { name: "Jalapeño Cheese Bites (6)", price: "$10.40", vegan: false },
      { name: "Broccoli Cheese Bites (6)", price: "$11.45", vegan: false },
      { name: "Corn & Cheese Quesadilla", price: "$9.35", vegan: false },
      { name: "Corn Chips & Guacamole", price: "$9.35", vegan: true },
      { name: "Corn Chips & Salsa Roja", price: "$7.25", vegan: true },
      { name: "Corn Chips", price: "$5.15", vegan: true },
      { name: "Side of Guacamole", price: "$3.15", vegan: true },
      { name: "Side of Salsa Roja", price: "$2.10", vegan: true },
      { name: "Side of Sour Cream", price: "$2.63", vegan: false },
      { name: "Side of Rice", price: "$3.68", vegan: true },
    ],
    customizable: false,
  },
  drinks: {
    name: "Drinks & Meals",
    items: [
      { name: "Make it a Meal with Cold Drinks", price: "+$6.00" },
      { name: "Make it a Meal with Jarritos", price: "+$9.00" },
      { name: "COKE CLASSIC 330ML", price: "$3.68" },
      { name: "COKE NO SUGAR 330ML", price: "$3.68" },
      { name: "SPRITE 330ML", price: "$3.68" },
      { name: "SPRITE ZERO SUGAR 330ML", price: "$3.68" },
      { name: "FANTA ORANGE 330ML", price: "$3.68" },
      { name: "L & P 330ML", price: "$3.68" },
      { name: "PEPSI 330ML", price: "$3.50" },
      { name: "JARRITOS MEXICAN COLA 370ML", price: "$7.35" },
      { name: "JARRITOS MANGO 370ML", price: "$7.35" },
      { name: "JARRITOS GUAVA 370ML", price: "$7.35" },
      { name: "JARRITOS PINEAPPLE 370ML", price: "$7.35" },
      { name: "JARRITOS MANDARIN 370ML", price: "$7.35" },
      { name: "BUNDABERG GINGER BEER 375ML", price: "$5.78" },
      { name: "BUNDABERG LEMON, LIME & BITTERS 375ML", price: "$5.78" },
      { name: "BUNDABERG GUAVA 375ML", price: "$5.50" },
      { name: "GREEN V GUARANA ENERGY DRINK 250ML", price: "$4.73" },
      { name: "BLUE V GUARANA ENERGY DRINK 250ML", price: "$4.73" },
      { name: "WATER BOTTLE - PURE NZ SPRING", price: "$2.63" }
    ],
  },
};

let expandedCategory = "burritos";

// Modal elements
const menuModalOverlay = document.getElementById("menuModalOverlay");
const menuModal = document.getElementById("menuModal");
const menuModalClose = document.getElementById("menuModalClose");
const menuModalHeader = document.getElementById("menuModalHeader");
const menuModalBody = document.getElementById("menuModalBody");

function openItemModal(categoryKey, itemIdx) {
  const category = menuCategories[categoryKey];
  const item = category.items[itemIdx];

  // Build header
  menuModalHeader.innerHTML = `
      <div class="menu-modal-header-text">
        <h3>${item.name} ${item.vegan ? '<span class="vegan-badge">V</span>' : ""}</h3>
        <div class="modal-price">${item.price}</div>
      </div>
    `;

  // Build body
  let bodyHtml = "";

  // Intro
  bodyHtml += `
      <div class="menu-details-intro">
        <h4>Customize your order</h4>
        <p>Remove or add ingredients at no extra cost.</p>
        <p>Add extras like guacamole, extra protein, jalapenos and more to make it your way.</p>
      </div>
    `;

  // Proteins (for tacos)
  if (item.proteins) {
    bodyHtml += `
        <div class="detail-section">
          <div class="detail-title">Choose Your Protein:</div>
          <div class="tag-list">
            ${item.proteins.map((p) => `<span class="tag">${p}</span>`).join("")}
          </div>
        </div>
      `;
  }

  // Remove options
  if (category.removeOptions) {
    bodyHtml += `
        <div class="detail-section">
          <div class="detail-title">Make It Your Way (Remove at no extra cost):</div>
          <div class="tag-list">
            ${category.removeOptions.map((opt) => `<span class="tag tag-alt">No ${opt}</span>`).join("")}
          </div>
        </div>
      `;
  }

  // Extras
  if (category.extras) {
    bodyHtml += `
        <div class="detail-section">
          <div class="detail-title">Add Extras:</div>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
            ${category.extras
              .map(
                (group) => `
              <div>
                <div class="extra-group-title">${group.category}</div>
                <div class="tag-list">
                  ${group.items.map((extra) => `<span class="tag tag-outline">${extra.name} <span class="tag-price">${extra.price}</span></span>`).join("")}
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
  }

  menuModalBody.innerHTML = bodyHtml;

  // Show modal
  menuModalOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeItemModal() {
  menuModalOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

if (menuModalClose) {
  menuModalClose.addEventListener("click", closeItemModal);
  menuModalOverlay.addEventListener("click", (e) => {
    if (e.target === menuModalOverlay) closeItemModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuModalOverlay.classList.contains("is-open")) {
      closeItemModal();
    }
  });
}

function renderTabs() {
  const tabsContainer = document.getElementById("categoryTabs");
  if (!tabsContainer) return;
  
  tabsContainer.innerHTML = Object.entries(menuCategories)
    .map(([key, category]) => {
      const label = category.name.split(" ")[0];
      return `<button class="category-tab ${key === expandedCategory ? "active" : ""}" data-key="${key}">${label}</button>`;
    })
    .join("");

  tabsContainer.querySelectorAll(".category-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      expandedCategory = tab.dataset.key;
      renderTabs();
      renderMenu();
    });
  });
}

function renderMenu() {
  const contentContainer = document.getElementById("menuContent");
  if (!contentContainer) return;

  contentContainer.innerHTML = Object.entries(menuCategories)
    .map(([key, category]) => {
      const isActive = key === expandedCategory;

      let itemsHtml = "";
      if (key === "drinks") {
        itemsHtml = `<div class="menu-grid">${category.items
          .map(
            (item, idx) => `
          <div class="menu-card menu-card-static">
            <div class="menu-card-header">
              <div class="menu-card-title">${item.name}</div>
              <div class="menu-card-price">${item.price}</div>
            </div>
          </div>
        `,
          )
          .join("")}</div>`;
      } else if (key === "sides") {
        itemsHtml = `<div class="menu-grid">${category.items
          .map((item, idx) => {
            const veganBadge = item.vegan
              ? '<span class="vegan-badge">V</span>'
              : "";

            return `
            <div class="menu-item">
              <div class="menu-card menu-card-static">
                <div class="menu-card-header">
                  <div class="menu-card-title">${item.name} ${veganBadge}</div>
                  <div class="menu-card-price">${item.price}</div>
                </div>
              </div>
            </div>
          `;
          })
          .join("")}</div>`;
      } else {
        itemsHtml = `<div class="menu-grid">${category.items
          .map((item, idx) => {
            const veganBadge = item.vegan
              ? '<span class="vegan-badge">V</span>'
              : "";

            return `
            <div class="menu-item">
              <div class="menu-card" data-category="${key}" data-idx="${idx}" role="button" tabindex="0">
                <div class="menu-card-header">
                  <div class="menu-card-title">${item.name} ${veganBadge}</div>
                  <div class="menu-card-price">${item.price}</div>
                </div>
              </div>
            </div>
          `;
          })
          .join("")}</div>`;
      }

      return `
        <div class="menu-category ${isActive ? "active" : ""}" data-category="${key}">
          <div class="category-header">
            <div class="category-header-text">
              <h3>${category.name}</h3>
            </div>
          </div>
          ${itemsHtml}
        </div>
      `;
    })
    .join("");

  // Attach click handlers — open modal instead of inline expand
  contentContainer
    .querySelectorAll(".menu-card[data-category]")
    .forEach((card) => {
      card.addEventListener("click", () => {
        openItemModal(card.dataset.category, parseInt(card.dataset.idx, 10));
      });

      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        card.click();
      });
    });
}

// Initialize
renderTabs();
renderMenu();

// Cart drawer
const cartOpenBtns = document.querySelectorAll("[data-cart-open]");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartFindBtn = document.getElementById("cartFindBtn");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

function toggleMobileNav() {
  const isOpen = navLinks.classList.toggle("active");
  hamburgerBtn.classList.toggle("active", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
}

hamburgerBtn.addEventListener("click", toggleMobileNav);
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
      hamburgerBtn.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
  });
});

function openCart() {
  cartOverlay.hidden = false;
  requestAnimationFrame(() => {
    cartOverlay.classList.add("is-open");
    cartDrawer.classList.add("is-open");
  });
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartOverlay.classList.remove("is-open");
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
  setTimeout(() => {
    if (!cartDrawer.classList.contains("is-open")) {
      cartOverlay.hidden = true;
    }
  }, 350);
}

cartOpenBtns.forEach((btn) => {
  btn.addEventListener("click", openCart);
});
cartCloseBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

cartFindBtn.addEventListener("click", closeCart);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cartDrawer.classList.contains("is-open")) {
    closeCart();
  }
});
