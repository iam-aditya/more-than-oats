/* ============================================================
   CONFIGURATION
   ============================================================ */
const WHATSAPP_NUMBER = "918584945597";
const RESTAURANT_NAME = "More Than Oats";

// ---- BANNER IMAGES ----
// Drop your photos in the images/ folder and list them here.
// They auto-scroll every 3 seconds.
const bannerImages = ["images/banner12.png", "images/banner2.png", "images/banner3.png"];

/* ============================================================
   MENU DATA
   Edit categories, addonGroups, and items below.
   You can also replace this with data from your CSV.
   ============================================================ */

const categories = [
	{ id: "oatmeal", name: "Oatmeal Bowl", addonGroupIds: ["size", "dry_fruits", "seeds", "protein_powder", "extras", "sweetener", "milk"] },
	{ id: "yogurt", name: "Yogurt Bowl", addonGroupIds: ["dry_fruits", "seeds", "extras", "sweetener", "milk"] },
	{ id: "smoothie", name: "Smoothie Bowl", addonGroupIds: ["dry_fruits", "seeds", "extras", "sweetener"] },
	{ id: "fruit_salad", name: "Fruit Salad", addonGroupIds: [] },
	{ id: "chia", name: "Chia Pudding", addonGroupIds: ["sweetener", "milk"] },
	{ id: "dessert", name: "Dessert Oatbowl", addonGroupIds: [] },
	{ id: "milkshake", name: "Protein Milkshake", addonGroupIds: [] },
	{ id: "halfhalf", name: "Half & Half Oatmeal", addonGroupIds: ["size", "dry_fruits", "seeds", "protein_powder", "extras", "sweetener", "milk"] },
];

const addonGroups = [
	{
		id: "size",
		name: "Make it a Meal",
		min: 0,
		max: 1,
		addons: [{ id: "500ml", name: "Upgrade to 500ml", price: 100, default: false }],
	},
	{
		id: "dry_fruits",
		name: "Dry Fruits",
		min: 0,
		max: 7,
		addons: [
			{ id: "almond", name: "Almond", price: 20, default: false },
			{ id: "walnut", name: "Walnut", price: 30, default: false },
			{ id: "cashew", name: "Cashew", price: 20, default: false },
			{ id: "raisins", name: "Raisins", price: 15, default: false },
			{ id: "pista", name: "Pista", price: 30, default: false },
			{ id: "fig", name: "Fig", price: 30, default: false },
			{ id: "df-mix", name: "Mixed", price: 40, default: false },
		],
	},
	{
		id: "seeds",
		name: "Seeds",
		min: 0,
		max: 5,
		addons: [
			{ id: "chia", name: "Chia", price: 15, default: false },
			{ id: "flax", name: "Flax", price: 10, default: false },
			{ id: "pumpkin", name: "Pumpkin", price: 10, default: false },
			{ id: "sunflower", name: "Sunflower", price: 10, default: false },
			{ id: "s-mix", name: "Mixed", price: 20, default: false },
		],
	},
	{
		id: "protein_powder",
		name: "Protein Powder",
		min: 0,
		max: 1,
		addons: [
			{ id: "mb-30g", name: "MuscleBlaze Whey (30g)", price: 80, default: false },
			{ id: "mb-20g", name: "MuscleBlaze Whey (20g)", price: 60, default: false },
			{ id: "mb-15g", name: "MB Chocolate Whey (15g)", price: 50, default: false },
		],
	},
	{
		id: "extras",
		name: "Extras",
		min: 0,
		max: 2,
		addons: [
			{ id: "banana", name: "Banana", price: 15, default: false },
			{ id: "dark-choc", name: "Dark Chocolate", price: 15, default: false },
		],
	},
	{
		id: "sweetener",
		name: "Sweetener",
		min: 1,
		max: 1,
		addons: [
			{ id: "honey", name: "Honey", price: 0, default: true },
			{ id: "monk-fruit", name: "Monk Fruit", price: 15, default: false },
		],
	},
	{
		id: "milk",
		name: "Milk",
		min: 1,
		max: 1,
		addons: [
			{ id: "dairy", name: "Dairy", price: 0, default: true },
			{ id: "almond-milk", name: "Almond", price: 60, default: false },
			{ id: "oat-milk", name: "Oat", price: 40, default: false },
		],
	},
];

const items = [
	// OATMEAL BOWL
	{ id: "choc-pb", categoryId: "oatmeal", name: "Chocolate Peanut Butter", description: "Rich dark chocolate blended with creamy peanut butter oats", price: 180, image: "images/choco_peanut_oatmeal.png" },
	{ id: "choc-coff", categoryId: "oatmeal", name: "Chocolate Coffee", description: "Bold espresso-infused oats with a rich chocolate swirl", price: 180, image: "images/choco_coffee.png" },
	{ id: "hazelnut", categoryId: "oatmeal", name: "Chocolate Hazelnut", description: "Silky hazelnut spread folded into rich chocolate oats", price: 180, image: "images/choco_hazelnut.jpeg" },
	{ id: "morning", categoryId: "oatmeal", name: "Morning Coffee", description: "Classic coffee-flavoured oats with fig to power your morning", price: 170, image: "images/coffee_fig_oatmeal.png" },
	{ id: "gulkand", categoryId: "oatmeal", name: "Gulkand Garden", description: "Rose-petal gulkand infused oats — floral, sweet, and unique", price: 180, image: "images/gulkand_oatmeal.png" },
	{ id: "date-choc", categoryId: "oatmeal", name: "Date Chocolate", description: "Naturally sweetened date and chocolate oats", price: 180, image: "images/date_chocolate_oatmeal.jpg" },
	{ id: "banana", categoryId: "oatmeal", name: "Banana Bread", description: "Warm banana bread flavours baked into every spoonful of oats", price: 170, image: "images/banana_bread.png" },
	{ id: "apple", categoryId: "oatmeal", name: "Apple Crumble", description: "Spiced stewed apple with a buttery crumble topping on oats", price: 190, image: "images/apple_crumble.jpeg" },
	{ id: "rasp-pb", categoryId: "oatmeal", name: "Raspberry Peanut Butter", description: "Tangy raspberry compote swirled with smooth peanut butter oats", price: 180, image: "images/raspberry_peabut_butter.png" },
	{ id: "blueberry", categoryId: "oatmeal", name: "Blueberry Pie", description: "Blueberry compote with a pie-spiced oatmeal base", price: 190, image: "images/blueberry.png" },
	{ id: "mango-coc", categoryId: "oatmeal", name: "Mango Coconut Crunch", description: "Tropical mango with coconut and a satisfying crunch", price: 200, image: "images/mango_oatmeal.png" },
	{ id: "mango-choc", categoryId: "oatmeal", name: "Mango Chocolate", description: "Juicy mango and rich chocolate together in one bowl", price: 210, image: "images/mango_choco_oatmeal.jpeg" },

	// YOGURT BOWL
	{ id: "y-fruit", categoryId: "yogurt", name: "Mixed Fruit", description: "Creamy yogurt topped with a medley of fresh seasonal fruits", price: 210, image: "images/mixed_fruit_yogurt.png" },
	{ id: "y-berry", categoryId: "yogurt", name: "Mixed Berry", description: "Thick yogurt loaded with fresh mixed berries and granola", price: 220, image: "images/mixed_berry_yogurt.png" },
	{ id: "y-choc", categoryId: "yogurt", name: "Chocolate", description: "Velvety chocolate yogurt bowl with peanut butter and toppings", price: 210, image: "images/chocolate_peanut_butter_yogurt.png" },

	// SMOOTHIE BOWL
	{ id: "sb-mango", categoryId: "smoothie", name: "Tropical Mango", description: "Thick blended tropical mango smoothie bowl with seeds and toppings", price: 220, image: "images/mango_smoothie.png" },
	{ id: "sb-choc", categoryId: "smoothie", name: "Chocolate", description: "Dense chocolate smoothie bowl — rich, filling, and nutritious", price: 190, image: "images/choco_smoothie.jpeg" },

	// FRUIT SALAD
	{ id: "fs-water", categoryId: "fruit_salad", name: "Watermelon", description: "Fresh watermelon fruit salad with mint and a sprinkle of spice", price: 210, image: "images/watermelon_salad.png" },

	// CHIA PUDDING
	{ id: "chia-mango", categoryId: "chia", name: "Mango", description: "Overnight chia pudding layered with fresh mango — light and filling", price: 210, image: "images/mango_chia.jpeg" },

	// DESSERT OATBOWL
	{ id: "cookies", categoryId: "dessert", name: "Cream and Cookies", description: "Creamy oat-based cookies-and-cream dessert bowl", price: 150, image: "images/cream_n_cookies.jpg" },
	{ id: "tiramisu", categoryId: "dessert", name: "Tiramisu", description: "Classic layered Italian tiramisu with espresso and mascarpone", price: 150, image: "images/tiramisu.png" },
	{ id: "snickers", categoryId: "dessert", name: "Snickers", description: "Indulgent snickers-inspired oat dessert with caramel and chocolate", price: 150, image: "images/snickers.png" },

	// PROTEIN MILKSHAKE (with 15g MB Protein Powder included)
	{ id: "ms-choc", categoryId: "milkshake", name: "Chocolate", description: "Chocolate milkshake with 15g MuscleBlaze protein powder included", price: 170, image: "images/chocolate_milkshake.png" },
	{ id: "ms-berry", categoryId: "milkshake", name: "Berry", description: "Berry milkshake with 15g MuscleBlaze protein powder included", price: 200, image: "" },
	{ id: "ms-mocha", categoryId: "milkshake", name: "Mocha", description: "Mocha milkshake with 15g MuscleBlaze protein powder included", price: 180, image: "" },

	// HALF & HALF OATMEAL
	{ id: "hh-300", categoryId: "halfhalf", name: "Half & Half — 300ml", description: "Choose any two oatmeal flavours in one 300ml bowl", price: 200, image: "images/halfnhalf_oatmeal.png" },
	{ id: "hh-500", categoryId: "halfhalf", name: "Half & Half — 500ml", description: "Choose any two oatmeal flavours in a generous 500ml bowl", price: 300, image: "images/halfnhalf_oatmeal.png" },
];

/* ============================================================
   APP STATE
   ============================================================ */
let cart = []; // Array of cart entries (see addFromSheet for structure)
let activeCategory = "all";
let sheetItemId = null;
let sheetSelections = {}; // { groupId: Set<addonId> }

let carouselIndex = 0;
let carouselTimer = null;

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
	initCarousel();
	renderMenu();
	updateCartUI();
});

/* ============================================================
   CAROUSEL
   ============================================================ */
function initCarousel() {
	const track = document.getElementById("carousel-track");
	const dotsEl = document.getElementById("carousel-dots");
	if (!track || !dotsEl || !bannerImages.length) return;

	track.innerHTML = bannerImages
		.map(
			(src) => `
    <div class="carousel-slide">
      <img src="${src}" alt="More Than Oats" onerror="this.parentElement.classList.add('slide-no-img')">
    </div>
  `,
		)
		.join("");

	dotsEl.innerHTML = bannerImages
		.map(
			(_, i) => `
    <button class="carousel-dot ${i === 0 ? "dot-active" : ""}" onclick="goToSlide(${i})"></button>
  `,
		)
		.join("");

	// Touch/swipe support
	let touchStartX = 0;
	track.parentElement.addEventListener(
		"touchstart",
		(e) => {
			touchStartX = e.touches[0].clientX;
		},
		{ passive: true },
	);
	track.parentElement.addEventListener(
		"touchend",
		(e) => {
			const diff = touchStartX - e.changedTouches[0].clientX;
			if (Math.abs(diff) > 40) diff > 0 ? nextSlide() : prevSlide();
			resetCarouselTimer();
		},
		{ passive: true },
	);

	startCarouselTimer();
}

function goToSlide(idx) {
	carouselIndex = (idx + bannerImages.length) % bannerImages.length;
	const track = document.getElementById("carousel-track");
	if (track) track.style.transform = `translateX(-${carouselIndex * 100}%)`;
	document.querySelectorAll(".carousel-dot").forEach((d, i) => {
		d.classList.toggle("dot-active", i === carouselIndex);
	});
}

function nextSlide() {
	goToSlide(carouselIndex + 1);
}
function prevSlide() {
	goToSlide(carouselIndex - 1);
}

function startCarouselTimer() {
	carouselTimer = setInterval(nextSlide, 3000);
}

function resetCarouselTimer() {
	clearInterval(carouselTimer);
	startCarouselTimer();
}

/* ============================================================
   MENU RENDERING
   ============================================================ */
function renderMenu() {
	renderCategoryPills();
	renderMenuList();
}

function renderCategoryPills() {
	const container = document.getElementById("category-pills");
	const allCount = items.length;

	const pills = [{ id: "all", name: "All", count: allCount }, ...categories.map((cat) => ({ id: cat.id, name: cat.name, count: items.filter((i) => i.categoryId === cat.id).length })).filter((p) => p.count > 0)];

	container.innerHTML = pills
		.map(
			(p) => `
    <button class="pill ${activeCategory === p.id ? "pill-active" : ""}" onclick="filterCategory('${p.id}')">
      ${p.name} <span class="pill-count">${p.count}</span>
    </button>
  `,
		)
		.join("");
}

function renderMenuList() {
	const container = document.getElementById("menu-list");
	const visibleCats = activeCategory === "all" ? categories : categories.filter((c) => c.id === activeCategory);

	container.innerHTML = visibleCats
		.map((cat) => {
			const catItems = items.filter((i) => i.categoryId === cat.id);
			if (!catItems.length) return "";
			return `
      <div class="menu-section">
        <h2 class="section-header">${cat.name}</h2>
        ${catItems.map(renderItemCard).join("")}
      </div>
    `;
		})
		.join("");
}

function renderItemCard(item) {
	const cartEntries = cart.filter((e) => e.itemId === item.id);
	const totalQty = cartEntries.reduce((s, e) => s + e.quantity, 0);

	return `
    <div class="item-card" id="card-${item.id}">
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.description}</div>
        <div class="item-price">₹${item.price}</div>
      </div>
      <div class="item-right">
        <div class="item-img-wrap">
          ${item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='<div class=img-placeholder></div>'">` : `<div class="img-placeholder"></div>`}
        </div>
        ${
					totalQty > 0
						? `<div class="qty-control">
               <button onclick="event.stopPropagation(); quickDecrement('${item.id}')">−</button>
               <span>${totalQty}</span>
               <button onclick="event.stopPropagation(); openSheet('${item.id}')">+</button>
             </div>`
						: `<button class="add-btn" onclick="openSheet('${item.id}')">ADD</button>`
				}
      </div>
    </div>
  `;
}

function filterCategory(catId) {
	activeCategory = catId;
	renderCategoryPills();
	renderMenuList();
	window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   BOTTOM SHEET
   ============================================================ */
function openSheet(itemId) {
	sheetItemId = itemId;
	const item = items.find((i) => i.id === itemId);
	if (!item) return;

	const cat = categories.find((c) => c.id === item.categoryId);
	const groups = getItemGroups(item);

	// Init selections with defaults
	sheetSelections = {};
	groups.forEach((g) => {
		sheetSelections[g.id] = new Set(g.addons.filter((a) => a.default).map((a) => a.id));
	});

	renderSheetContent(item, cat, groups);

	document.getElementById("sheet-backdrop").classList.remove("hidden");
	const sheet = document.getElementById("item-sheet");
	sheet.classList.remove("hidden");
	requestAnimationFrame(() => sheet.classList.add("sheet-open"));
	document.body.style.overflow = "hidden";

	updateSheetButton(groups);
}

function getItemGroups(item) {
	const cat = categories.find((c) => c.id === item.categoryId);
	return (cat?.addonGroupIds || []).map((gid) => addonGroups.find((g) => g.id === gid)).filter(Boolean);
}

function renderSheetContent(item, cat, groups) {
	const hasCustomize = groups.length > 0;
	const allOptional = groups.every((g) => g.min === 0);

	document.getElementById("sheet-content").innerHTML = `
    <div class="sheet-header">
      <div class="sheet-item-info">
        <div class="sheet-cat-pill">${cat?.name || ""}</div>
        <h3 class="sheet-item-name">${item.name}</h3>
        <p class="sheet-item-desc">${item.description}</p>
      </div>
      ${item.image ? `<img class="sheet-item-img" src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">` : `<div class="img-placeholder-sm"></div>`}
    </div>
    ${
			hasCustomize
				? `
      <div class="sheet-customize">
        <div class="customize-header">
          <span class="customize-title">CUSTOMIZE YOUR MEAL</span>
          <span class="customize-optional">${allOptional ? "OPTIONAL" : ""}</span>
        </div>
        ${groups.map(renderAddonGroup).join("")}
      </div>
    `
				: ""
		}
  `;
}

function renderAddonGroup(group) {
	const isRadio = group.max === 1;
	const label = addonConstraintLabel(group);

	return `
    <div class="addon-group">
      <div class="addon-group-header">
        <span class="addon-group-name">${group.name.toUpperCase()}</span>
        <span class="addon-group-label">${label}</span>
      </div>
      ${group.addons.map((addon) => renderAddonOption(group, addon, isRadio)).join("")}
    </div>
  `;
}

function renderAddonOption(group, addon, isRadio) {
	const selected = sheetSelections[group.id]?.has(addon.id) || false;
	const priceLabel = addon.price > 0 ? `+₹${addon.price}` : "";

	return `
    <div class="addon-option ${selected ? "addon-selected" : ""}"
         onclick="toggleAddon('${group.id}', '${addon.id}', ${isRadio}, ${group.min}, ${group.max})">
      <div class="addon-check ${isRadio ? "radio" : "checkbox"} ${selected ? "checked" : ""}">
        ${selected ? (isRadio ? "●" : "✓") : ""}
      </div>
      <span class="addon-name">${addon.name}</span>
      <span class="addon-price">${priceLabel}</span>
    </div>
  `;
}

function addonConstraintLabel(group) {
	const { min, max, addons } = group;
	if (min === 1 && max === 1) return "Required · Choose 1";
	if (min === 0 && max === 1) return "Optional · Choose up to 1";
	if (min >= 1 && max > 1) return `Required · Choose ${min}–${max}`;
	return `Optional · Choose up to ${max}`;
}

function toggleAddon(groupId, addonId, isRadio, min, max) {
	const sel = sheetSelections[groupId] || new Set();

	if (isRadio) {
		if (min === 0 && sel.has(addonId)) {
			sel.clear(); // optional radio — allow unselect
		} else {
			sel.clear();
			sel.add(addonId);
		}
	} else {
		if (sel.has(addonId)) {
			if (sel.size > min) sel.delete(addonId);
		} else {
			if (sel.size < max) sel.add(addonId);
		}
	}

	sheetSelections[groupId] = sel;

	const item = items.find((i) => i.id === sheetItemId);
	const cat = categories.find((c) => c.id === item?.categoryId);
	const groups = getItemGroups(item);

	renderSheetContent(item, cat, groups);
	updateSheetButton(groups);
}

function sheetAddonTotal() {
	let extra = 0;
	Object.entries(sheetSelections).forEach(([gid, selectedIds]) => {
		const g = addonGroups.find((g) => g.id === gid);
		if (!g) return;
		selectedIds.forEach((aid) => {
			const a = g.addons.find((a) => a.id === aid);
			if (a) extra += a.price;
		});
	});
	return extra;
}

function sheetIsValid(groups) {
	return groups.every((g) => (sheetSelections[g.id]?.size || 0) >= g.min);
}

function updateSheetButton(groups) {
	const btn = document.getElementById("sheet-add-btn");
	if (!btn) return;
	const item = items.find((i) => i.id === sheetItemId);
	const price = (item?.price || 0) + sheetAddonTotal();
	const valid = sheetIsValid(groups);

	if (valid) {
		btn.textContent = `Add ₹${price} ›`;
		btn.disabled = false;
		btn.classList.remove("btn-disabled");
	} else {
		const unsatisfied = groups.find((g) => (sheetSelections[g.id]?.size || 0) < g.min);
		btn.textContent = unsatisfied ? `Choose at least ${unsatisfied.min} from ${unsatisfied.name}` : `Add ₹${price} ›`;
		btn.disabled = true;
		btn.classList.add("btn-disabled");
	}
}

function addFromSheet() {
	const item = items.find((i) => i.id === sheetItemId);
	if (!item) return;

	const groups = getItemGroups(item);
	if (!sheetIsValid(groups)) return;

	const selectedAddons = [];
	groups.forEach((g) => {
		(sheetSelections[g.id] || new Set()).forEach((aid) => {
			const a = g.addons.find((a) => a.id === aid);
			if (a) selectedAddons.push({ groupId: g.id, groupName: g.name, addonId: aid, name: a.name, price: a.price });
		});
	});

	const linePrice = item.price + sheetAddonTotal();
	const addonKey = JSON.stringify(selectedAddons.map((a) => a.addonId).sort());

	// Merge with existing cart entry that has the same item + same addons
	const existing = cart.find((e) => e.itemId === item.id && e.addonKey === addonKey);
	if (existing) {
		existing.quantity += 1;
	} else {
		cart.push({
			cartId: `${Date.now()}-${Math.random()}`,
			itemId: item.id,
			name: item.name,
			image: item.image,
			basePrice: item.price,
			quantity: 1,
			selectedAddons,
			addonKey,
			linePrice,
		});
	}

	closeSheet();
	updateCartUI();
	renderMenuList();
}

function closeSheet() {
	const sheet = document.getElementById("item-sheet");
	sheet.classList.remove("sheet-open");
	setTimeout(() => {
		sheet.classList.add("hidden");
		document.getElementById("sheet-backdrop").classList.add("hidden");
		document.body.style.overflow = "";
	}, 310);
	sheetItemId = null;
	sheetSelections = {};
}

/* ============================================================
   CART LOGIC
   ============================================================ */
function cartTotal() {
	return cart.reduce((s, e) => s + e.linePrice * e.quantity, 0);
}

function cartItemCount() {
	return cart.reduce((s, e) => s + e.quantity, 0);
}

function updateCartUI() {
	const count = cartItemCount();
	const total = cartTotal();

	const badge = document.getElementById("cart-badge");
	if (count > 0) {
		badge.textContent = count;
		badge.classList.remove("hidden");
	} else {
		badge.classList.add("hidden");
	}

	const bar = document.getElementById("cart-bar");
	if (count > 0) {
		bar.classList.remove("hidden");
		document.getElementById("cart-bar-count").textContent = `${count} ${count === 1 ? "ITEM" : "ITEMS"}`;
		document.getElementById("cart-bar-price").textContent = `₹${total}`;
	} else {
		bar.classList.add("hidden");
	}
}

function quickDecrement(itemId) {
	const entries = cart.filter((e) => e.itemId === itemId);
	if (!entries.length) return;
	const last = entries[entries.length - 1];
	changeCartQty(last.cartId, -1);
	renderMenuList();
}

function changeCartQty(cartId, delta) {
	const idx = cart.findIndex((e) => e.cartId === cartId);
	if (idx === -1) return;
	cart[idx].quantity += delta;
	if (cart[idx].quantity <= 0) cart.splice(idx, 1);
	updateCartUI();
}

/* ============================================================
   CART VIEW
   ============================================================ */
function showCart() {
	if (cart.length === 0) return;
	document.getElementById("menu-view").classList.add("hidden");
	document.getElementById("cart-bar").classList.add("hidden");
	document.getElementById("cart-view").classList.remove("hidden");
	renderCart();
	window.scrollTo(0, 0);
}

function showMenu() {
	document.getElementById("cart-view").classList.add("hidden");
	document.getElementById("menu-view").classList.remove("hidden");
	updateCartUI();
}

function renderCart() {
	const view = document.getElementById("cart-view");
	const count = cartItemCount();
	const total = cartTotal();

	if (!cart.length) {
		view.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <button class="back-btn" onclick="showMenu()">← Browse Menu</button>
      </div>`;
		return;
	}

	view.innerHTML = `
    <div class="cart-header">
      <button class="back-btn" onclick="showMenu()">← Back</button>
      <h2>Your Cart</h2>
      <span class="cart-count-label">${count} ${count === 1 ? "item" : "items"}</span>
    </div>

    <div class="cart-items">
      ${cart.map(renderCartEntry).join("")}
    </div>

    <div class="cart-phone-section">
      <label>📱 Your Phone Number</label>
      <input type="tel" id="phone-input" maxlength="10" inputmode="numeric" pattern="[0-9]*"
             placeholder="Enter 10-digit mobile number" oninput="updateSendBtn()">
    </div>

    <div class="bill-summary">
      <h3>Bill Summary</h3>
      <div class="bill-row"><span>Subtotal</span><span>₹${total}</span></div>
      <div class="bill-row"><span>Delivery</span><span class="free-tag">Free</span></div>
      <div class="bill-divider"></div>
      <div class="bill-row bill-total"><span>Total</span><span>₹${total}</span></div>
    </div>

    <button class="whatsapp-btn" id="send-btn" onclick="sendToWhatsApp()" disabled>
      Send Order on WhatsApp →
    </button>
    <p class="wa-note">Opens WhatsApp with your order pre-filled</p>
  `;
}

function renderCartEntry(entry) {
	const lineTotal = entry.linePrice * entry.quantity;
	const addonTags = entry.selectedAddons
		.filter((a) => a.price > 0)
		.map((a) => `<span class="addon-tag">+ ${a.name}</span>`)
		.join("");

	return `
    <div class="cart-entry">
      <div class="cart-entry-img">
        ${entry.image ? `<img src="${entry.image}" alt="${entry.name}" onerror="this.parentElement.innerHTML=''">` : `<div class="img-placeholder-sm"></div>`}
      </div>
      <div class="cart-entry-info">
        <div class="cart-entry-name">${entry.name}</div>
        <div class="cart-entry-price">₹${lineTotal}</div>
        <div>${addonTags}</div>
      </div>
      <div class="cart-qty-control">
        <button onclick="cartQtyAndRefresh('${entry.cartId}', -1)">−</button>
        <span>${entry.quantity}</span>
        <button onclick="cartQtyAndRefresh('${entry.cartId}', 1)">+</button>
      </div>
    </div>
  `;
}

function cartQtyAndRefresh(cartId, delta) {
	changeCartQty(cartId, delta);
	if (cart.length === 0) {
		showMenu();
		return;
	}
	renderCart();
}

function updateSendBtn() {
	const phone = document.getElementById("phone-input")?.value || "";
	const btn = document.getElementById("send-btn");
	if (btn) btn.disabled = !/^\d{10}$/.test(phone);
}

/* ============================================================
   WHATSAPP
   ============================================================ */
function buildWhatsAppMessage() {
	const phone = document.getElementById("phone-input")?.value || "";
	const total = cartTotal();
	let msg = `🛒 *Order from ${RESTAURANT_NAME}*\n\n`;

	cart.forEach((e) => {
		msg += `${e.quantity}x ${e.name} — ₹${e.linePrice * e.quantity}\n`;
		e.selectedAddons
			.filter((a) => a.price > 0)
			.forEach((a) => {
				msg += `   + ${a.name} (+₹${a.price})\n`;
			});
		msg += "\n";
	});

	msg += `───────────────\n`;
	msg += `*Total: ₹${total}*\n\n`;
	msg += `📱 Customer: ${phone}`;

	return msg;
}

function sendToWhatsApp() {
	const phone = document.getElementById("phone-input")?.value || "";
	if (!/^\d{10}$/.test(phone)) return;
	const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
	window.open(url, "_blank");
}
