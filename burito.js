const menuCategories = {
  burritos: {
    name: "Signature Grilled Burritos",
    image:
      "https://kimi-web-img.kimi.ai/img/c8.alamy.com/17a82a66a450f19ef3d451c33b595e5ac280d279.jpg",
    description:
      "Large flour tortilla filled with cilantro lime rice, black beans, fresh cabbage, fresh pico de gallo, fresh daily guacamole, cool & creamy sour cream, and your choice of protein. Finished with our signature house-made sauce and grilled to perfection.",
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
    image:
      "https://kimi-web-img.kimi.ai/img/t3.ftcdn.net/2bfd864c11646cf26271e64bd02a3e1b2a99c14b.jpg",
    description:
      "Warm corn tortillas layered with melted cheese, your choice of protein, fresh coriander, diced onions, and Taco Barrio's signature house sauce. Served with fresh pico de gallo, fresh daily guacamole, cool & creamy sour cream, and a lime wedge.",
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
    image:
      "https://kimi-web-img.kimi.ai/img/dressings-sauces.org/c84b801b46e4c4b5817cfde58c4b06b521788bac.jpeg",
    description:
      "Toasted flour tortilla filled with melted cheese, your choice of protein, garnished with fresh coriander & onions, and our signature house-made sauce. Grilled until golden and served with fresh daily guacamole and cool & creamy sour cream.",
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
    image:
      "https://kimi-web-img.kimi.ai/img/www.savorytooth.com/a27970215bfd2d4a3ad7cb6594eb2ea49c076d82.jpg",
    description:
      "Crispy corn tortilla chips layered with melted cheese, your choice of protein, fresh pico de gallo, fresh daily guacamole, cool & creamy sour cream, and our House Salsa Roja.",
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
    image:
      "https://kimi-web-img.kimi.ai/img/cdn.loveandlemons.com/deb01e07bea35a1502fe794db49978206cfd1633.jpg",
    description:
      "All the bold flavours of our Signature Burritos, served in a bowl with crispy tortilla chips. Cilantro lime rice, black beans, fresh cabbage, fresh pico de gallo, fresh daily guacamole, cool & creamy sour cream, and your choice of protein.",
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
    image:
      "https://kimi-web-img.kimi.ai/img/realfoodbydad.com/7ba125d1ec323f3011e88d24bd9054cd49bb5a14.jpg",
    description:
      "Golden crispy fries loaded with melted cheese, your choice of protein, fresh pico de gallo, fresh daily guacamole, cool & creamy sour cream, and our House Salsa Roja. Finished with fresh coriander for a bold, flavour-packed finish. (Limited Only)",
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
  drinks: {
    name: "Drinks & Meals",
    image: "",
    description: "Add a drink to any meal or enjoy on its own",
    items: [
      {
        name: "Make it a Meal with Cold Drinks",
        price: "+$6.00",
        note: "Coca Cola, L&P, Sprite, Coca Cola Zero Sugar, Fanta",
      },
      {
        name: "Make it a Meal with Jarritos",
        price: "+$9.00",
        note: "Mango, Pineapple, Mandarin, Mexican Cola, Guava",
      },
      {
        name: "330 ML Cold Drinks",
        price: "$3.50",
        note: "Coca Cola, L&P, Sprite, Coca Cola Zero Sugar, Fanta",
      },
      {
        name: "375 ML Bundaberg",
        price: "$5.50",
        note: "Ginger Beer, Lemon Lime Bitters",
      },
      { name: "Pure NZ Spring Water", price: "$2.00", note: "Still" },
    ],
  },
};

let expandedCategory = "burritos";
const fallbackMenuImage =
  "https://i.pinimg.com/1200x/48/48/ff/4848ff49381c2da1b62ccfa1f6338fe2.jpg";

// Modal elements
const menuModalOverlay = document.getElementById("menuModalOverlay");
const menuModal = document.getElementById("menuModal");
const menuModalClose = document.getElementById("menuModalClose");
const menuModalHeader = document.getElementById("menuModalHeader");
const menuModalBody = document.getElementById("menuModalBody");

function openItemModal(categoryKey, itemIdx) {
  const category = menuCategories[categoryKey];
  const item = category.items[itemIdx];
  const categoryImage = category.image || fallbackMenuImage;

  // Build header
  menuModalHeader.innerHTML = `
      <img src="${categoryImage}" alt="${item.name}" class="menu-modal-header-img">
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

menuModalClose.addEventListener("click", closeItemModal);
menuModalOverlay.addEventListener("click", (e) => {
  if (e.target === menuModalOverlay) closeItemModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuModalOverlay.classList.contains("is-open")) {
    closeItemModal();
  }
});

function renderTabs() {
  const tabsContainer = document.getElementById("categoryTabs");
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
  contentContainer.innerHTML = Object.entries(menuCategories)
    .map(([key, category]) => {
      const isActive = key === expandedCategory;
      const categoryImage = category.image || fallbackMenuImage;
      const imgHtml = `<img src="${categoryImage}" alt="${category.name}" loading="lazy">`;

      let itemsHtml = "";
      if (key === "drinks") {
        itemsHtml = `<div class="menu-grid">${category.items
          .map(
            (item, idx) => `
          <div class="menu-card menu-card-static">
            <div class="menu-card-media">
              <img src="${categoryImage}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-card-header">
              <div style="flex: 1;">
                <div class="menu-card-title">${item.name}</div>
                ${item.note ? `<p class="menu-card-note">${item.note}</p>` : ""}
              </div>
              <div class="menu-card-price">${item.price}</div>
            </div>
          </div>
        `,
          )
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
                <div class="menu-card-media">
                  <img src="${categoryImage}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-card-header">
                  <div style="flex: 1;">
                    <div class="menu-card-title">${item.name} ${veganBadge}</div>
                    <p class="menu-card-note">${category.description}</p>
                  </div>
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
            ${imgHtml}
            <div class="category-header-text">
              <h3>${category.name}</h3>
              <p>${category.description}</p>
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
const cartOrderBtn = document.getElementById("cartOrderBtn");
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

cartOrderBtn.addEventListener("click", () => {
  closeCart();
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

cartFindBtn.addEventListener("click", closeCart);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && cartDrawer.classList.contains("is-open")) {
    closeCart();
  }
});
