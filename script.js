// ==========================================
// CAFE THIRTEEN - Main Script with Cart
// ==========================================

// --- Menu Data (with price info for cart) ---
const menuData = [
  {
    category: 'starters',
    label: 'Starters',
    icon: 'fa-fire',
    items: [
      { name: 'Paneer Tikka', price: '₹250', priceNum: 250, desc: 'Smoky grilled paneer cubes', tag: 'Bestseller' },
      { name: 'Malai Chaap', price: '₹250', priceNum: 250, desc: 'Creamy soya chaap skewers', tag: 'Popular' },
      { name: 'Afghani Chaap', price: '₹250', priceNum: 250, desc: 'Rich Afghani-style chaap', tag: '' },
      { name: 'Masala Chaap', price: '₹250', priceNum: 250, desc: 'Spiced masala soya chaap', tag: '' },
      { name: 'Kurkure Malai Chaap', price: '₹280', priceNum: 280, desc: 'Crispy coated malai chaap', tag: '' },
      { name: 'Paneer Masala Tikka', price: '₹280', priceNum: 280, desc: 'Spicy masala paneer tikka', tag: '' },
      { name: 'Tandoori Chicken', price: '₹270 / ₹470', desc: 'Classic tandoori, 4pcs/8pcs', tag: 'Popular', sizeOptions: [{label:'4 Pieces',price:270},{label:'8 Pieces',price:470}] },
      { name: 'Afghani Chicken', price: '₹280 / ₹490', desc: 'Creamy Afghani-style chicken', tag: '', sizeOptions: [{label:'4 Pieces',price:280},{label:'8 Pieces',price:490}] },
      { name: 'Chicken Tikka', price: '₹220 / ₹390', desc: 'Juicy spiced chicken tikka', tag: '', sizeOptions: [{label:'4 Pieces',price:220},{label:'8 Pieces',price:390}] },
      { name: 'Punjabi Chicken', price: '₹230 / ₹400', desc: 'Authentic Punjabi-style chicken', tag: '', sizeOptions: [{label:'4 Pieces',price:230},{label:'8 Pieces',price:400}] }
    ]
  },
  {
    category: 'main-course',
    label: 'Main Course',
    icon: 'fa-bowl-food',
    items: [
      { name: 'Dal Tadka', price: '₹130 / ₹200', desc: 'Yellow lentils tempered with spices', tag: '', sizeOptions: [{label:'Half',price:130},{label:'Full',price:200}] },
      { name: 'Dal Makhni', price: '₹150 / ₹220', desc: 'Creamy black lentils slow cooked', tag: 'Popular', sizeOptions: [{label:'Half',price:150},{label:'Full',price:220}] },
      { name: 'Shahi Paneer', price: '₹170 / ₹250', desc: 'Royal paneer in rich gravy', tag: '', sizeOptions: [{label:'Half',price:170},{label:'Full',price:250}] },
      { name: 'Matar Paneer', price: '₹170 / ₹250', desc: 'Paneer & peas in tomato gravy', tag: '', sizeOptions: [{label:'Half',price:170},{label:'Full',price:250}] },
      { name: 'Kadhi Paneer', price: '₹170 / ₹250', desc: 'Yogurt-based curry with paneer', tag: '', sizeOptions: [{label:'Half',price:170},{label:'Full',price:250}] },
      { name: 'Masala Chaap Gravy', price: '₹170 / ₹270', desc: 'Soya chaap in spiced gravy', tag: '', sizeOptions: [{label:'Half',price:170},{label:'Full',price:270}] },
      { name: 'Malai Kofta', price: '₹170 / ₹270', desc: 'Soft paneer kofta in creamy sauce', tag: '', sizeOptions: [{label:'Half',price:170},{label:'Full',price:270}] },
      { name: 'Paneer Butter Masala', price: '₹180 / ₹280', desc: 'Paneer in rich butter tomato gravy', tag: 'Bestseller', sizeOptions: [{label:'Half',price:180},{label:'Full',price:280}] },
      { name: 'Handi Paneer', price: '₹190 / ₹320', desc: 'Paneer cooked in traditional handi', tag: '', sizeOptions: [{label:'Half',price:190},{label:'Full',price:320}] },
      { name: 'Butter Chicken', price: '₹290 / ₹480 / ₹750', desc: 'Rich creamy butter chicken', tag: 'Bestseller', sizeOptions: [{label:'Quarter',price:290},{label:'Half',price:480},{label:'Full',price:750}] },
      { name: 'Lemon Chicken', price: '₹290 / ₹480 / ₹750', desc: 'Tangy lemon flavored chicken', tag: '', sizeOptions: [{label:'Quarter',price:290},{label:'Half',price:480},{label:'Full',price:750}] },
      { name: 'Mutton Rogan Josh', price: '₹320 / ₹620', desc: 'Kashmiri-style slow cooked mutton', tag: 'Premium', sizeOptions: [{label:'Half',price:320},{label:'Full',price:620}] }
    ]
  },
  {
    category: 'fast-food',
    label: 'Fast Food',
    icon: 'fa-burger',
    items: [
      { name: 'Veg. Burger', price: '₹80', priceNum: 80, desc: 'Classic veggie burger', tag: '' },
      { name: 'Special Cafe 13 Burger', price: '₹130', priceNum: 130, desc: 'Our signature loaded burger', tag: 'Signature' },
      { name: 'Margherita Pizza (M)', price: '₹240', priceNum: 240, desc: 'Classic tomato & mozzarella', tag: '' },
      { name: 'Margherita Pizza (F)', price: '₹360', priceNum: 360, desc: 'Full size Margherita', tag: '' },
      { name: 'Cafe 13 Pizza (M)', price: '₹300', priceNum: 300, desc: 'Signature loaded pizza', tag: 'Signature' },
      { name: 'Cafe 13 Pizza (F)', price: '₹430', priceNum: 430, desc: 'Full size signature pizza', tag: '' },
      { name: 'White Sauce Pasta', price: '₹150', priceNum: 150, desc: 'Creamy white sauce pasta', tag: 'Popular' },
      { name: 'Red Sauce Pasta', price: '₹150', priceNum: 150, desc: 'Tangy red sauce pasta', tag: '' },
      { name: 'Veg. Cheese Sandwich', price: '₹90', priceNum: 90, desc: 'Grilled cheese sandwich', tag: '' },
      { name: 'Pizza Sandwich', price: '₹130', priceNum: 130, desc: 'Pizza-style grilled sandwich', tag: '' }
    ]
  },
  {
    category: 'momos',
    label: 'Momos',
    icon: 'fa-cloud-meatball',
    items: [
      { name: 'Veg. Steam Momos', price: '₹50 / ₹90', desc: 'Classic steamed veg dumplings', tag: 'Popular', sizeOptions: [{label:'Half',price:50},{label:'Full',price:90}] },
      { name: 'Paneer Steam Momos', price: '₹80 / ₹110', desc: 'Paneer filled steamed momos', tag: '', sizeOptions: [{label:'Half',price:80},{label:'Full',price:110}] },
      { name: 'Veg. Fried Momos', price: '₹90 / ₹130', desc: 'Crispy fried veg momos', tag: '', sizeOptions: [{label:'Half',price:90},{label:'Full',price:130}] },
      { name: 'Veg. Gravy Momos', price: '₹80 / ₹110', desc: 'Momos in spicy gravy', tag: '', sizeOptions: [{label:'Half',price:80},{label:'Full',price:110}] },
      { name: 'Tandoori Veg. Momos', price: '₹90 / ₹150', desc: 'Smoky tandoori momos', tag: 'Popular', sizeOptions: [{label:'Half',price:90},{label:'Full',price:150}] },
      { name: 'Veg. Kurkure Momos', price: '₹100 / ₹170', desc: 'Extra crispy coated momos', tag: '', sizeOptions: [{label:'Half',price:100},{label:'Full',price:170}] },
      { name: 'Chicken Steam Momos', price: '₹90 / ₹140', desc: 'Classic chicken steamed momos', tag: '', sizeOptions: [{label:'Half',price:90},{label:'Full',price:140}] },
      { name: 'Chicken Kurkure Momos', price: '₹140 / ₹180', desc: 'Crispy chicken momos', tag: '', sizeOptions: [{label:'Half',price:140},{label:'Full',price:180}] }
    ]
  },
  {
    category: 'breads-rice',
    label: 'Breads & Rice',
    icon: 'fa-bread-slice',
    items: [
      { name: 'Butter Roti', price: '₹25', priceNum: 25, desc: 'Soft butter roti', tag: '' },
      { name: 'Plane Naan', price: '₹40', priceNum: 40, desc: 'Classic tandoor naan', tag: '' },
      { name: 'Butter Naan', price: '₹50', priceNum: 50, desc: 'Buttery tandoor naan', tag: '' },
      { name: 'Garlic Naan', price: '₹60', priceNum: 60, desc: 'Garlic flavored naan', tag: 'Popular' },
      { name: 'Paneer Naan', price: '₹75', priceNum: 75, desc: 'Paneer stuffed naan', tag: '' },
      { name: 'Jeera Rice', price: '₹150', priceNum: 150, desc: 'Cumin tempered basmati rice', tag: '' },
      { name: 'Veg. Pulao', price: '₹190', priceNum: 190, desc: 'Fragrant vegetable pulao', tag: '' }
    ]
  },
  {
    category: 'beverages',
    label: 'Beverages',
    icon: 'fa-glass-water',
    items: [
      { name: 'Cold Coffee', price: '₹100', priceNum: 100, desc: 'Rich cold brewed coffee', tag: '' },
      { name: 'Butter Scotch Shake', price: '₹100', priceNum: 100, desc: 'Smooth butter scotch shake', tag: '' },
      { name: 'Vanilla Shake', price: '₹100', priceNum: 100, desc: 'Classic vanilla milkshake', tag: '' },
      { name: 'Strawberry Shake', price: '₹100', priceNum: 100, desc: 'Sweet strawberry blend', tag: '' },
      { name: 'Oreo Shake', price: '₹110', priceNum: 110, desc: 'Crushed Oreo cookies blended', tag: 'Popular' },
      { name: 'Kit Kat Shake', price: '₹110', priceNum: 110, desc: 'Loaded with KitKat chunks', tag: 'Bestseller' },
      { name: 'Nutella Shake', price: '₹110', priceNum: 110, desc: 'Rich Nutella chocolate shake', tag: '' },
      { name: 'Fresh Lime Soda', price: '₹90', priceNum: 90, desc: 'Refreshing lime soda', tag: '' },
      { name: 'Mint Mojito', price: '₹90', priceNum: 90, desc: 'Cool mint mojito mocktail', tag: '' }
    ]
  }
];

// --- Combos ---
const combos = [
  {
    name: 'Burger Combo',
    price: '₹240',
    priceNum: 240,
    items: ['Cafe 13 Burger', 'Medium Fries', 'Coke'],
    badge: 'Value'
  },
  {
    name: 'Pizza Combo',
    price: '₹380',
    priceNum: 380,
    items: ['Margherita Pizza', 'Cheese Fries', 'Coke'],
    badge: 'Popular'
  }
];


// ==========================================
// SIZE OPTIONS REGISTRY (avoids JSON in HTML attributes)
// ==========================================
const sizeOptionsMap = {};

// ==========================================
// CART STATE
// ==========================================
let cart = [];

function getCartId(name, size) {
  return size ? `${name}__${size}` : name;
}

function addToCart(name, price, size) {
  const id = getCartId(name, size);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, size: size || null, price, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showAddedToast(name, size);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

function updateQty(id, delta) {
  const item = cart.find(item => item.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  try { localStorage.setItem('cafeThirteenCart', JSON.stringify(cart)); } catch(e) {}
}

function loadCart() {
  try {
    const saved = localStorage.getItem('cafeThirteenCart');
    if (saved) cart = JSON.parse(saved);
  } catch(e) {}
}


// ==========================================
// CART UI
// ==========================================
function updateCartUI() {
  // Update floating badge
  const badge = document.getElementById('cart-badge');
  const count = getCartCount();
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  // Update floating button pulse
  const fab = document.getElementById('cart-fab');
  if (fab) {
    if (count > 0) {
      fab.classList.add('has-items');
    } else {
      fab.classList.remove('has-items');
    }
  }

  // Render drawer contents
  renderCartDrawer();
}

function renderCartDrawer() {
  const body = document.getElementById('cart-drawer-body');
  const footer = document.getElementById('cart-drawer-footer');
  if (!body || !footer) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Your cart is empty</h3>
        <p>Browse our menu and add items to get started!</p>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  let html = '';
  cart.forEach(item => {
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          ${item.size ? `<span class="cart-item-size">${item.size}</span>` : ''}
          <span class="cart-item-price">₹${item.price} each</span>
        </div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateQty('${item.id}', -1)" aria-label="Decrease"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.id}', 1)" aria-label="Increase"><i class="fa-solid fa-plus"></i></button>
          </div>
          <span class="cart-item-total">₹${item.price * item.qty}</span>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  });
  body.innerHTML = html;

  const total = getCartTotal();
  footer.innerHTML = `
    <div class="cart-total-row">
      <span>Total (${getCartCount()} items)</span>
      <span class="cart-total-price">₹${total}</span>
    </div>
    ${total < 250 ? `<div class="cart-min-warning"><i class="fa-solid fa-circle-info"></i> Minimum order is ₹250. Add ₹${250 - total} more.</div>` : ''}
    <button class="cart-checkout-btn" onclick="checkoutWhatsApp()" ${total < 250 ? 'disabled' : ''}>
      <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
    </button>
    <button class="cart-clear-btn" onclick="clearCart()">
      <i class="fa-solid fa-trash"></i> Clear Cart
    </button>
  `;
}

function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('cart-open');
  } else {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('cart-open');
    renderCartDrawer();
  }
}


// ==========================================
// SIZE SELECTOR POPUP
// ==========================================
function showSizeSelector(key, buttonEl) {
  const sizeOptions = sizeOptionsMap[key];
  if (!sizeOptions) return;

  // Remove any existing popup
  closeSizeSelector();

  const name = key;
  const popup = document.createElement('div');
  popup.className = 'size-selector-popup';
  popup.id = 'active-size-selector';

  let html = `<div class="size-popup-header">
    <span>Select Size</span>
    <button class="size-popup-close" onclick="closeSizeSelector()"><i class="fa-solid fa-xmark"></i></button>
  </div>
  <div class="size-popup-options">`;

  sizeOptions.forEach(opt => {
    const safeName = name.replace(/'/g, "\\'");
    html += `<button class="size-option-btn" onclick="addToCart('${safeName}', ${opt.price}, '${opt.label}'); closeSizeSelector();">
      <span class="size-option-label">${opt.label}</span>
      <span class="size-option-price">₹${opt.price}</span>
    </button>`;
  });

  html += `</div>`;
  popup.innerHTML = html;

  // Position near the button
  document.body.appendChild(popup);

  const rect = buttonEl.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();

  let top = rect.top - popupRect.height - 8;
  let left = rect.left + rect.width / 2 - popupRect.width / 2;

  // If overflows top, show below
  if (top < 10) top = rect.bottom + 8;
  // Keep within viewport
  if (left < 10) left = 10;
  if (left + popupRect.width > window.innerWidth - 10) left = window.innerWidth - popupRect.width - 10;

  popup.style.top = `${top + window.scrollY}px`;
  popup.style.left = `${left}px`;
  popup.style.position = 'absolute';

  // Close on outside click
  setTimeout(() => {
    document.addEventListener('click', outsideClickHandler);
  }, 10);
}

function outsideClickHandler(e) {
  const popup = document.getElementById('active-size-selector');
  if (popup && !popup.contains(e.target) && !e.target.closest('.add-to-cart-btn')) {
    closeSizeSelector();
  }
}

function closeSizeSelector() {
  const popup = document.getElementById('active-size-selector');
  if (popup) popup.remove();
  document.removeEventListener('click', outsideClickHandler);
}


// ==========================================
// ADDED-TO-CART TOAST
// ==========================================
function showAddedToast(name, size) {
  const existing = document.querySelector('.cart-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'cart-toast';
  toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> <strong>${name}</strong>${size ? ` (${size})` : ''} added to cart`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2000);
}


// ==========================================
// WHATSAPP CHECKOUT
// ==========================================
function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const phone = '919870133713';
  let msg = `🛒 *New Order — Cafe Thirteen*\n\n`;

  cart.forEach((item, i) => {
    const sizeStr = item.size ? ` (${item.size})` : '';
    msg += `${i + 1}. ${item.name}${sizeStr} × ${item.qty} — ₹${item.price * item.qty}\n`;
  });

  msg += `\n💰 *Total: ₹${getCartTotal()}*\n\n`;
  msg += `Please confirm my order. Thank you! 🙏`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}


// ==========================================
// DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderMenu();
  renderCombos();
  initNavbar();
  initSmoothScroll();
  initScrollAnimations();
  initMobileMenu();
  initCounters();
  updateCartUI();
});


// ==========================================
// RENDER MENU
// ==========================================
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  const tabsContainer = document.getElementById('menu-tabs');
  if (!grid || !tabsContainer) return;

  let tabsHTML = `<button class="menu-tab active" data-category="all">
    <i class="fa-solid fa-utensils"></i> All
  </button>`;

  menuData.forEach(cat => {
    tabsHTML += `<button class="menu-tab" data-category="${cat.category}">
      <i class="fa-solid ${cat.icon}"></i> ${cat.label}
    </button>`;
  });
  tabsContainer.innerHTML = tabsHTML;

  renderMenuItems('all');

  tabsContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.menu-tab');
    if (!tab) return;

    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.dataset.category;
    renderMenuItems(category);
  });
}

function renderMenuItems(category) {
  const grid = document.getElementById('menu-grid');
  let html = '';

  const categories = category === 'all' ? menuData : menuData.filter(c => c.category === category);

  categories.forEach(cat => {
    html += `<div class="menu-category-section">`;
    html += `<div class="menu-category-header">
      <i class="fa-solid ${cat.icon}"></i>
      <h3>${cat.label}</h3>
      ${cat.sizeLabels ? `<span class="size-label">${cat.sizeLabels}</span>` : ''}
    </div>`;
    html += `<div class="menu-items-grid">`;

    cat.items.forEach(item => {
      if (item.header) {
        html += `<div class="menu-subheader">
          <h4>${item.header}</h4>
          <span class="size-prices">${item.sizes}</span>
        </div>`;
      } else {
        const tagClass = item.tag ? item.tag.toLowerCase().replace(/[^a-z]/g, '') : '';
        const hasSizes = item.sizeOptions && item.sizeOptions.length > 0;
        const escapedName = item.name.replace(/'/g, "\\'");

        // Register size options in the global map
        if (hasSizes) {
          sizeOptionsMap[item.name] = item.sizeOptions;
        }

        let addBtnHTML;
        if (hasSizes) {
          addBtnHTML = `<button class="add-to-cart-btn has-sizes" onclick="event.stopPropagation(); showSizeSelector('${escapedName}', this)">
            <i class="fa-solid fa-plus"></i> Add
          </button>`;
        } else {
          addBtnHTML = `<button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${escapedName}', ${item.priceNum})">
            <i class="fa-solid fa-plus"></i> Add
          </button>`;
        }

        html += `<div class="menu-item-card" data-category="${cat.category}">
          <div class="menu-item-info">
            <div class="menu-item-name-row">
              <h4 class="menu-item-name">${item.name}</h4>
              ${item.tag ? `<span class="menu-item-tag tag-${tagClass}">${item.tag}</span>` : ''}
            </div>
            <p class="menu-item-desc">${item.desc}</p>
          </div>
          <div class="menu-item-right">
            ${item.price ? `<div class="menu-item-price">${item.price}</div>` : ''}
            ${addBtnHTML}
          </div>
        </div>`;
      }
    });

    html += `</div></div>`;
  });

  grid.innerHTML = html;

  requestAnimationFrame(() => {
    const cards = grid.querySelectorAll('.menu-item-card, .menu-subheader');
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 30);
    });
  });
}


// ==========================================
// RENDER COMBOS (with Add to Cart)
// ==========================================
function renderCombos() {
  const container = document.getElementById('combos-grid');
  if (!container) return;

  let html = '';
  combos.forEach((combo, i) => {
    const escapedName = combo.name.replace(/'/g, "\\'");
    html += `<div class="combo-card" style="animation-delay: ${i * 0.1}s">
      <div class="combo-badge">${combo.badge}</div>
      <h3 class="combo-name">${combo.name}</h3>
      <div class="combo-price">${combo.price}</div>
      <ul class="combo-items">
        ${combo.items.map(item => `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join('')}
      </ul>
      <button class="add-to-cart-btn combo-add-btn" onclick="addToCart('${escapedName}', ${combo.priceNum})">
        <i class="fa-solid fa-plus"></i> Add to Cart
      </button>
    </div>`;
  });
  container.innerHTML = html;
}


// ==========================================
// NAVBAR, SCROLL, MOBILE MENU, COUNTERS
// ==========================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });

        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          document.getElementById('menu-toggle').classList.remove('open');
        }
      }
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.ceil(current) + '+';
    }
  }, 25);
}

// Parallax
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.setProperty('--scroll-offset', `${window.scrollY * 0.4}px`);
  }
});
