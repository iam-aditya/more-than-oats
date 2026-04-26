/* ============================================================
   CONFIGURATION
   ============================================================ */
const WHATSAPP_NUMBER = "918584945597";
const RESTAURANT_NAME = "More Than Oats";

// ---- BANNER IMAGES ----
// Drop your photos in the images/ folder and list them here.
// They auto-scroll every 3 seconds.
const bannerImages = ["images/banner12.png", "images/banner2.png", "images/banner3.png"];

// ---- OFFERS ----
// Add or remove offers here. All active offers are shown as pills below categories.
const offers = [
	{
		id: "offer1",
		label: "10% OFF up to ₹50 on orders above ₹300",
		minCart: 300,
		discountPercent: 10,
		maxDiscount: 50,
	},
];

// ---- PROMO CODES ----
// type: "flat"    → flat ₹discount off on cart above minCart
// type: "percent" → discountPercent% off up to maxDiscount on cart above minCart
// expiry: "YYYY-MM-DD" — leave "" for no expiry
const promoCodes = [
	{
		code: "OATS10",
		type: "percent",
		discountPercent: 10,
		maxDiscount: 80,
		minCart: 200,
		expiry: "2026-12-31",
	},
	{
		code: "FLAT50",
		type: "flat",
		discount: 50,
		minCart: 300,
		expiry: "2026-12-31",
	},
];

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
	{ id: "milkshake", name: "Protein Milkshake", addonGroupIds: ["protein_powder"] },
	{ id: "halfhalf", name: "Half & Half Oatmeal", addonGroupIds: ["hh_flavors"] },
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
			{ id: "mb-30g", name: "MuscleBlaze Whey (30g)", price: 90, default: false },
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
			{ id: "unsweetened", name: "Unsweetened", price: 0, default: false },
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
	{
		id: "hh_flavors",
		name: "Choose Your Flavours",
		min: 2,
		max: 2,
		addons: [
			{ id: "hh-choc-pb", name: "Chocolate Peanut Butter", price: 0, default: false },
			{ id: "hh-choc-coff", name: "Chocolate Coffee", price: 0, default: false },
			{ id: "hh-hazelnut", name: "Chocolate Hazelnut", price: 0, default: false },
			{ id: "hh-morning", name: "Morning Coffee", price: 0, default: false },
			{ id: "hh-gulkand", name: "Gulkand Garden", price: 0, default: false },
			{ id: "hh-date-choc", name: "Date Chocolate", price: 0, default: false },
			{ id: "hh-banana", name: "Banana Bread", price: 0, default: false },
			{ id: "hh-apple", name: "Apple Crumble", price: 0, default: false },
			{ id: "hh-rasp-pb", name: "Raspberry Peanut Butter", price: 0, default: false },
			{ id: "hh-blueberry", name: "Blueberry Pie", price: 0, default: false },
			{ id: "hh-mango-coc", name: "Mango Coconut Crunch", price: 0, default: false },
			{ id: "hh-mango-choc", name: "Mango Chocolate", price: 0, default: false },
		],
	},
];

const items = [
	// OATMEAL BOWL
	{ id: "choc-pb", categoryId: "oatmeal", name: "Chocolate Peanut Butter", description: "A rich blend of oats, cocoa and crunchy peanut butter naturally sweetened with honey and topped with almonds, raisins, dark chocolate and a crunchy mix of seeds. Chocolatey, nutty and nourishing in every spoonful.", price: 180, image: "images/choco_peanut_oatmeal.png" },
	{ id: "choc-coff", categoryId: "oatmeal", name: "Chocolate Coffee", description: "A nourishing blend of oats infused with coffee and cocoa, layered with crunchy toppings and finished with Greek yogurt, honey and dark chocolate. The perfect balance of energy and indulgence.", price: 180, image: "images/choco_coffee.png" },
	{ id: "hazelnut", categoryId: "oatmeal", name: "Chocolate Hazelnut", description: "For all the choco hazelnut fans this one’s a dream. Oats blended with our homemade hazelnut choco spread, then topped with roasted hazelnuts, almonds, seeds and dark chocolate chunks.", price: 180, image: "images/choco_hazelnut.jpeg" },
	{ id: "morning", categoryId: "oatmeal", name: "Morning Coffee", description: "A smooth blend of cold coffee and sweet banana, lightly sweetened with honey. Topped with chewy dried figs, crunchy walnuts, chocolate chips and a power mix of seeds, this bowl delivers rich flavor and lasting energy with every bite.", price: 170, image: "images/coffee_fig_oatmeal.png" },
	{ id: "gulkand", categoryId: "oatmeal", name: "Gulkand Garden", description: "This garden has the scent of roses and the richness of tradition. It has fragrant gulkand folded into creamy oats. Topped with roasted almonds, pistachios and a nourishing medley of seeds, each spoonful is a floral, nutty escape into indulgence and wellness.", price: 180, image: "images/gulkand_oatmeal.png" },
	{ id: "date-choc", categoryId: "oatmeal", name: "Date Chocolate", description: "Creamy peanut butter oats sweetened with honey, topped with chopped dates, chocolate, seeds, peanuts and a hint of toasted coconut crunch.", price: 180, image: "images/date_chocolate_oatmeal.jpg" },
	{ id: "banana", categoryId: "oatmeal", name: "Banana Bread", description: "Cozy and comforting, this oatmeal captures the essence of banana bread with creamy banana puree, aromatic cinnamon and a touch of vanilla. Topped with banana slices, crunchy walnuts and hearty seeds, it’s a naturally sweet, fibre rich bowl perfect for a nourishing start.", price: 170, image: "images/banana_bread.png" },
	{ id: "apple", categoryId: "oatmeal", name: "Apple Crumble", description: "A cozy blend of overnight oats and creamy milk, gently flavoured with cinnamon, sweetened with honey and enriched by apple slices and pomegranate. Topped with chewy raisins, buttery cashews and a crunchy trio of seeds.", price: 190, image: "images/apple_crumble.jpeg" },
	{
		id: "rasp-pb",
		categoryId: "oatmeal",
		name: "Raspberry Peanut Butter",
		description: "Bursting with berry goodness and nutty richness, this bowl brings together a lush swirl of raspberry purée with creamy peanut butter. Finished with crunchy walnuts and a nourishing mix of chia, flax, pumpkin and sunflower seeds it’s a playful yet wholesome way to power your morning",
		price: 180,
		image: "images/raspberry_peabut_butter.png",
	},
	{
		id: "blueberry",
		categoryId: "oatmeal",
		name: "Blueberry Pie",
		description: "A comforting blend of rolled oats and creamy Dairy Milk, infused with juicy blueberries, warm cinnamon, vanilla and a touch of honey. Topped with coconut flakes and a nourishing mix of chia, flax, pumpkin and sunflower seeds, this bowl brings the sweet, spiced essence of a blueberry pie to your morning ritual.",
		price: 190,
		image: "images/blueberry.png",
	},
	{ id: "mango-coc", categoryId: "oatmeal", name: "Mango Coconut Crunch", description: "Creamy oats blended with sweet mango and honey, layered with fresh mango bites, coconut flakes, a balanced mix of seeds and nuts for crunchy finish.", price: 200, image: "images/mango_oatmeal.png" },
	{ id: "mango-choc", categoryId: "oatmeal", name: "Mango Chocolate", description: " Loaded with juicy mango cubes and creamy chocolate oats, this bowl combines tropical sweetness with rich cocoa flavours. Finished with pista and crunchy seeds for the perfect texture.", price: 210, image: "images/mango_choco_oatmeal.jpeg" },

	// YOGURT BOWL
	{ id: "y-fruit", categoryId: "yogurt", name: "Mixed Fruit", description: "Protein rich yogurt layered with fresh fruits like apple, banana, pomegranate, finished with granola for a nourishing, fiber packed and guilt free treat.", price: 210, image: "images/mixed_fruit_yogurt.png" },
	{ id: "y-berry", categoryId: "yogurt", name: "Mixed Berry", description: "Creamy yogurt topped with juicy blueberries and tangy raspberries, finished with crunchy granola a perfect balance of sweet, tart and wholesome goodness packed with antioxidants.", price: 220, image: "images/mixed_berry_yogurt.png" },
	{ id: "y-choc", categoryId: "yogurt", name: "Chocolate", description: "Creamy chocolate yogurt topped with fresh banana slices, crunchy chocolate granola, rich chocolate chips and a smooth peanut butter drizzle, offering a perfect balance of indulgent flavour and wholesome nutrition.", price: 210, image: "images/chocolate_peanut_butter_yogurt.png" },

	// SMOOTHIE BOWL
	{ id: "sb-mango", categoryId: "smoothie", name: "Tropical Mango", description: "A thick, creamy smoothie made with ripe, naturally sweet mangoes. Topped with juicy mango chunks, crunchy muesli, and delicate coconut flakes for a refreshing tropical crunch. Light, wholesome, and perfect for a guilt-free treat.", price: 220, image: "images/mango_smoothie.png" },
	{ id: "sb-choc", categoryId: "smoothie", name: "Chocolate", description: "Creamy chocolate smoothie bowl blended with oats, chocolate and topped with crunchy muesli, seasonal fruit, chia seed, dark chocolate, crunchy peanut butter and no added sugar.", price: 190, image: "images/choco_smoothie.jpeg" },

	// FRUIT SALAD
	{ id: "fs-water", categoryId: "fruit_salad", name: "Watermelon", description: "Fresh watermelon cubes tossed with feta cheese, mint leaves for a cooling, mildly sweet and salty salad.", price: 90, image: "images/watermelon_salad.png" },

	// CHIA PUDDING
	{ id: "chia-mango", categoryId: "chia", name: "Mango", description: "Silky smooth blended chia pudding layered with sweet mango pure, topped with fresh mango chunks and dry fruits. Naturally rich in fibre and nutrients. Light, filling and perfect for a healthy indulgence.", price: 210, image: "images/mango_chia.jpeg" },

	// DESSERT OATBOWL
	{ id: "cookies", categoryId: "dessert", name: "Cream and Cookies", description: " Creamy oatmeal made with creamy instant oats, milk, honey, chia seeds, layered Greek yoghurt, topped with chocolate chips and crunchy Oreo cookies.", price: 150, image: "images/cream_n_cookies.jpg" },
	{ id: "tiramisu", categoryId: "dessert", name: "Tiramisu", description: "Replace your regular cake bread with oats soaked in coffee and cocoa and swap the cream for vanilla flavored Greek yogurt and have a cheat dessert without any guilt.", price: 150, image: "images/tiramisu.png" },
	{ id: "snickers", categoryId: "dessert", name: "Snickers", description: "Creamy oats topped with chocolate, date caramel and crunchy nuts. No added sugar, no guilt. The healthy snickers you did not know you needed.", price: 150, image: "images/snickers.png" },

	// PROTEIN MILKSHAKE (with 15g MB Protein Powder included)
	{ id: "ms-choc", categoryId: "milkshake", name: "Chocolate", description: "A creamy chocolate milkshake made with muscleblaze chocolate whey protein [15 g] and no added sugar. Deliciously nourishing and power packed.", price: 170, image: "images/chocolate_milkshake.png" },
	{ id: "ms-berry", categoryId: "milkshake", name: "Berry", description: "A rich, creamy berry milkshake loaded with 15g muscleblaze whey protein goodness for a deliciously healthy boost anytime.", price: 200, image: "" },
	{ id: "ms-mocha", categoryId: "milkshake", name: "Mocha", description: "A bold fusion of coffee and chocolate in a thick, creamy milkshake loaded with 15g Muscleblaze whey protein to boost your energy and keep you going.", price: 180, image: "" },

	// HALF & HALF OATMEAL
	{ id: "hh-300", categoryId: "halfhalf", name: "Half & Half — 300ml", description: "Choose any two oatmeal flavours in one 300ml bowl", price: 200, image: "images/halfnhalf_oatmeal.png" },
	{ id: "hh-500", categoryId: "halfhalf", name: "Half & Half — 500ml", description: "Choose any two oatmeal flavours in a generous 500ml bowl", price: 300, image: "images/halfnhalf_oatmeal.png" },
];

/* ============================================================
   FIREBASE
   ============================================================ */
const firebaseConfig = {
	apiKey: "AIzaSyChh6vQfvXi5ilRd4xfvNXvrbLZDJSaj6c",
	authDomain: "more-than-oats.firebaseapp.com",
	projectId: "more-than-oats",
	storageBucket: "more-than-oats.firebasestorage.app",
	messagingSenderId: "470871378959",
	appId: "1:470871378959:web:ee81a176e4f7c8e12b677a",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

let currentUser = null;
let confirmationResult = null;
let otpSent = false;

function initAuth() {
	auth.onAuthStateChanged((fbUser) => {
		currentUser = fbUser ? { uid: fbUser.uid, phoneNumber: fbUser.phoneNumber } : null;
		updateAuthIcon();
		if (fbUser) saveUserPhone(fbUser.uid, fbUser.phoneNumber);
		if (!document.getElementById("auth-sheet").classList.contains("hidden")) {
			otpSent = false;
			renderAuthSheet();
			if (fbUser) setTimeout(closeAuthSheet, 1500);
		}
		if (!document.getElementById("cart-view").classList.contains("hidden")) {
			renderCart();
		}
	});
}

function saveUserPhone(uid, phoneNumber) {
	db.collection("users").doc(uid).set({ phone: phoneNumber }, { merge: true });
}

function updateAuthIcon() {
	const btn = document.getElementById("auth-icon-btn");
	const dot = document.getElementById("auth-dot");
	if (!btn || !dot) return;
	if (currentUser) {
		btn.classList.remove("hidden");
		dot.classList.remove("hidden");
	} else {
		btn.classList.add("hidden");
		dot.classList.add("hidden");
	}
}

function openAuthSheet() {
	renderAuthSheet();
	document.getElementById("auth-backdrop").classList.remove("hidden");
	const sheet = document.getElementById("auth-sheet");
	sheet.classList.remove("hidden");
	requestAnimationFrame(() => sheet.classList.add("sheet-open"));
	document.body.style.overflow = "hidden";
}

function closeAuthSheet() {
	const sheet = document.getElementById("auth-sheet");
	sheet.classList.remove("sheet-open");
	setTimeout(() => {
		sheet.classList.add("hidden");
		document.getElementById("auth-backdrop").classList.add("hidden");
		document.body.style.overflow = "";
		if (!document.getElementById("cart-view").classList.contains("hidden")) {
			renderCart();
		}
	}, 310);
}

function renderAuthSheet() {
	const content = document.getElementById("auth-sheet-content");
	if (!content) return;

	if (currentUser) {
		content.innerHTML = `
			<div class="auth-sheet-body">
				<div class="auth-check-circle">✓</div>
				<div class="auth-sheet-title">Signed In</div>
				<div class="auth-sheet-phone">${currentUser.phoneNumber}</div>
				<button class="auth-signout-btn" onclick="signOutUser()">Sign Out</button>
			</div>`;
		return;
	}

	if (otpSent) {
		content.innerHTML = `
			<div class="auth-sheet-body">
				<div class="auth-sheet-title">Enter OTP</div>
				<p class="auth-sheet-subtitle">Sent to your phone number</p>
				<div class="auth-input-row">
					<input id="auth-otp-input" class="auth-input" type="number" placeholder="6-digit code"
					       onkeydown="if(event.key==='Enter') verifyOTP()">
					<button class="auth-btn" onclick="verifyOTP()">Verify</button>
				</div>
				<div id="auth-msg" class="auth-msg"></div>
			</div>`;
		setTimeout(() => document.getElementById("auth-otp-input")?.focus(), 50);
		return;
	}

	content.innerHTML = `
		<div class="auth-sheet-body">
			<div class="auth-sheet-title">Sign In</div>
			<p class="auth-sheet-subtitle">Enter your number to get started</p>
			<div class="auth-input-row">
				<span class="auth-prefix">+91</span>
				<input id="auth-phone-input" class="auth-input" type="tel" placeholder="Phone number" maxlength="10"
				       onkeydown="if(event.key==='Enter') sendOTP()">
				<button class="auth-btn" onclick="sendOTP()">Send OTP</button>
			</div>
			<div id="auth-msg" class="auth-msg"></div>
		</div>`;
	setTimeout(() => document.getElementById("auth-phone-input")?.focus(), 50);
}

function setupRecaptcha() {
	if (!window.recaptchaVerifier) {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", { size: "invisible" });
	}
}

const TEST_PHONE = "1234567890";
const TEST_OTP = "123456";
let testPhonePending = false;

async function sendOTP() {
	const raw = (document.getElementById("auth-phone-input")?.value || "").replace(/\D/g, "");
	if (raw.length !== 10) {
		setAuthMsg("Enter a valid 10-digit number", "error");
		return;
	}
	if (raw === TEST_PHONE) {
		testPhonePending = true;
		otpSent = true;
		renderAuthSheet();
		return;
	}
	setAuthMsg("Sending OTP…", "info");
	try {
		setupRecaptcha();
		confirmationResult = await auth.signInWithPhoneNumber(`+91${raw}`, window.recaptchaVerifier);
		otpSent = true;
		renderAuthSheet();
	} catch (e) {
		console.log(e);
		window.recaptchaVerifier = null;
		setAuthMsg("Couldn't send OTP. Try again.", "error");
	}
}

async function verifyOTP() {
	const code = (document.getElementById("auth-otp-input")?.value || "").trim();
	if (code.length !== 6) {
		setAuthMsg("Enter the 6-digit code", "error");
		return;
	}
	setAuthMsg("Verifying…", "info");
	if (testPhonePending) {
		if (code === TEST_OTP) {
			testPhonePending = false;
			otpSent = false;
			currentUser = { uid: "test-uid", phoneNumber: `+91${TEST_PHONE}` };
			updateAuthIcon();
			renderAuthSheet();
			if (!document.getElementById("cart-view").classList.contains("hidden")) renderCart();
			setTimeout(closeAuthSheet, 1500);
		} else {
			setAuthMsg("Wrong OTP. Try again.", "error");
		}
		return;
	}
	try {
		await confirmationResult.confirm(code);
	} catch (e) {
		setAuthMsg("Wrong OTP. Try again.", "error");
	}
}

function signOutUser() {
	auth.signOut();
	currentUser = null;
	otpSent = false;
	testPhonePending = false;
	updateAuthIcon();
	renderAuthSheet();
	if (!document.getElementById("cart-view").classList.contains("hidden")) renderCart();
}

function setAuthMsg(msg, type) {
	const el = document.getElementById("auth-msg");
	if (el) {
		el.textContent = msg;
		el.className = `auth-msg auth-msg-${type}`;
	}
}

/* ============================================================
   APP STATE
   ============================================================ */
let cart = []; // Array of cart entries (see addFromSheet for structure)
let activeCategory = "all";
let sheetItemId = null;
let sheetSelections = {}; // { groupId: Set<addonId> }
let appliedPromo = null; // { code, discountAmount } or null
let showPromoInput = false;

let carouselIndex = 0;
let carouselTimer = null;

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
	initAuth();
	initCarousel();
	renderOfferStrip();
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
   OFFERS
   ============================================================ */
function calcAutoDiscount(subtotal) {
	const s = subtotal ?? cartTotal();
	let discount = 0;
	offers.forEach((o) => {
		if (s >= o.minCart) discount += Math.min(Math.floor((s * o.discountPercent) / 100), o.maxDiscount);
	});
	return discount;
}

function cartDiscount(subtotal) {
	if (appliedPromo) return appliedPromo.discountAmount;
	return calcAutoDiscount(subtotal);
}

function nextOfferNudge(subtotal) {
	if (appliedPromo) return null;
	const s = subtotal ?? cartTotal();
	const next = offers.filter((o) => s < o.minCart).sort((a, b) => a.minCart - b.minCart)[0];
	if (!next) return null;
	return `🏷 Add ₹${next.minCart - s} more to get ${next.discountPercent}% off`;
}

function calcPromoDiscount(promo, cartValue) {
	if (promo.type === "flat") return promo.discount;
	if (promo.type === "percent") return Math.min(Math.floor((cartValue * promo.discountPercent) / 100), promo.maxDiscount);
	return 0;
}

async function validatePromoCode(code, phoneNumber) {
	// Test phone bypasses Firestore entirely
	if ((phoneNumber || "").replace("+91", "") === TEST_PHONE) {
		return { valid: true, promo: { type: "percent", discountPercent: 10, maxDiscount: 80, minCart: 0 } };
	}

	// 1. Fetch all promos with this code and find the active one
	const today = new Date().toISOString().slice(0, 10);
	const snap = await db.collection("promoCodes").where("code", "==", code).get();
	if (snap.empty) {
		return { valid: false, message: "Invalid promo code." };
	}
	const activeDoc = snap.docs.find((d) => {
		const p = d.data();
		return (!p.startDate || today >= p.startDate) && (!p.endDate || today <= p.endDate);
	});
	if (!activeDoc) {
		return { valid: false, message: "This promo code has expired." };
	}
	const promo = activeDoc.data();

	// 3. Check if this phone has already used this promo campaign
	const promoKey = `${code}_${promo.endDate || "noexpiry"}`;
	const usageSnap = await db.collection("promo_usage")
		.where("phone", "==", phoneNumber)
		.where("promoCode", "==", promoKey)
		.limit(1)
		.get();
	if (!usageSnap.empty) {
		return { valid: false, message: "You've already used this code." };
	}

	return { valid: true, promo, promoKey };
}

async function applyPromoCode() {
	const input = document.getElementById("promo-input");
	const code = (input?.value || "").trim().toUpperCase();
	if (!code) return;

	const btn = document.getElementById("promo-apply-btn");
	if (btn) btn.disabled = true;
	setPromoMsg("Checking…", "info");

	const result = await validatePromoCode(code, currentUser?.phoneNumber);

	if (!result.valid) {
		setPromoMsg(result.message, "error");
		if (btn) btn.disabled = false;
		return;
	}

	const total = cartTotal();
	if (total < result.promo.minCart) {
		setPromoMsg(`Add ₹${result.promo.minCart - total} more to use this code.`, "warn");
		if (btn) btn.disabled = false;
		return;
	}

	appliedPromo = { code, discountAmount: calcPromoDiscount(result.promo, total), promoKey: result.promoKey };
	renderCart();
}

function removePromoCode() {
	appliedPromo = null;
	showPromoInput = false;
	renderCart();
}

function setPromoMsg(msg, type) {
	const el = document.getElementById("promo-msg");
	if (el) {
		el.textContent = msg;
		el.className = `promo-msg promo-${type}`;
	}
}

function renderOfferStrip() {
	const strip = document.getElementById("offer-strip");
	if (!strip || !offers.length) return;
	strip.innerHTML = offers.map((o) => `<div class="offer-pill">🏷 ${o.label}</div>`).join("");
}

function updateCartNudge() {
	const nudge = document.getElementById("cart-nudge");
	if (!nudge) return;
	const cartViewOpen = !document.getElementById("cart-view").classList.contains("hidden");
	if (cartViewOpen) {
		nudge.classList.add("hidden");
		return;
	}
	const msg = cartItemCount() > 0 ? nextOfferNudge() : null;
	if (msg) {
		nudge.textContent = msg;
		nudge.classList.remove("hidden");
	} else {
		nudge.classList.add("hidden");
	}
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
    <div class="item-card" id="card-${item.id}" onclick="openSheet('${item.id}')">
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
						: `<button class="add-btn" onclick="event.stopPropagation(); openSheet('${item.id}')">ADD</button>`
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
			sel.delete(addonId);
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

	btn.textContent = `Add ₹${price} ›`;
	if (valid) {
		btn.disabled = false;
		btn.classList.remove("btn-disabled");
	} else {
		btn.disabled = true;
		btn.classList.add("btn-disabled");
	}

	// Show nudge above Add button: project cart total if this item is added
	const currentCart = cartTotal();
	const projectedTotal = currentCart + price;
	const nudgeMsg = currentCart === 0 ? (offers.length ? `🏷 ${offers[0].label}` : null) : nextOfferNudge(projectedTotal);
	let nudgeEl = document.getElementById("sheet-offer-nudge");
	if (!nudgeEl) {
		nudgeEl = document.createElement("div");
		nudgeEl.id = "sheet-offer-nudge";
		nudgeEl.className = "sheet-nudge";
		btn.parentElement.insertBefore(nudgeEl, btn);
	}
	if (nudgeMsg) {
		nudgeEl.textContent = nudgeMsg;
		nudgeEl.style.display = "block";
	} else {
		nudgeEl.style.display = "none";
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
	const cartViewOpen = !document.getElementById("cart-view").classList.contains("hidden");

	const badge = document.getElementById("cart-badge");
	if (count > 0) {
		badge.textContent = count;
		badge.classList.remove("hidden");
	} else {
		badge.classList.add("hidden");
	}

	const bar = document.getElementById("cart-bar");
	if (count > 0 && !cartViewOpen) {
		bar.classList.remove("hidden");
		document.getElementById("cart-bar-count").textContent = `${count} ${count === 1 ? "ITEM" : "ITEMS"}`;
		document.getElementById("cart-bar-price").textContent = `₹${total}`;
	} else {
		bar.classList.add("hidden");
	}

	updateCartNudge();
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
	document.getElementById("cart-nudge").classList.add("hidden");
	document.getElementById("cart-view").classList.remove("hidden");
	renderCart();
	window.scrollTo(0, 0);
}

function showMenu() {
	document.getElementById("cart-view").classList.add("hidden");
	document.getElementById("menu-view").classList.remove("hidden");
	updateCartUI();
	renderMenuList();
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

    <div class="bill-summary">
      <h3>Bill Summary</h3>
      <div class="bill-row"><span>Subtotal</span><span>₹${total}</span></div>
      ${!appliedPromo && calcAutoDiscount() > 0 ? `<div class="bill-row"><span>Offer 🏷</span><span class="discount-tag">-₹${calcAutoDiscount()}</span></div>` : ""}
      ${appliedPromo ? `<div class="bill-row"><span class="promo-applied-label"><span class="promo-code-chip">${appliedPromo.code}</span></span><span class="discount-tag">-₹${appliedPromo.discountAmount} <button class="promo-remove-btn" onclick="removePromoCode()">✕</button></span></div>` : ""}
      <div class="bill-row"><span>Delivery</span><span><s class="delivery-strike">₹50</s>&nbsp;<span class="free-tag">₹0</span></span></div>
      <div class="bill-divider"></div>
      <div class="bill-row bill-total"><span>Total</span><span>₹${total - cartDiscount()}</span></div>
    </div>

    ${
			!appliedPromo
				? `
    <div class="promo-section">
      ${
				!currentUser
					? `
        <div class="promo-gate">
          <span class="promo-gate-text">🏷 Have a promo code?</span>
          <button class="promo-gate-login" onclick="openAuthSheet()">Login to apply</button>
        </div>
      `
					: `
        <div class="promo-auth-row">
          <span class="promo-auth-tag">✓ Logged in as ${currentUser.phoneNumber}</span>
        </div>
        <div class="promo-input-wrap">
          <input id="promo-input" class="promo-input" type="text" placeholder="Enter promo code"
                 style="text-transform:uppercase" onkeydown="if(event.key==='Enter') applyPromoCode()">
          <button id="promo-apply-btn" class="promo-apply-btn" onclick="applyPromoCode()">Apply</button>
        </div>
        <div id="promo-msg" class="promo-msg"></div>
      `
			}
    </div>
    `
				: ""
		}

    <button class="whatsapp-btn" id="send-btn" onclick="sendToWhatsApp()">
      Send Order on WhatsApp →
    </button>
    <p class="wa-note">Opens WhatsApp with your order pre-filled</p>
    <p class="delivery-note">🛵 We deliver via Rapido and bear delivery charges up to ₹50. For distances beyond that, additional charges will apply based on your address.</p>
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
		appliedPromo = null;
		showPromoInput = false;
		showMenu();
		return;
	}
	renderCart();
}

/* ============================================================
   WHATSAPP
   ============================================================ */
function buildWhatsAppMessage() {
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

	const discount = cartDiscount();
	msg += `───────────────\n`;
	msg += `Subtotal: ₹${total}\n`;
	if (discount > 0 && !appliedPromo) msg += `Offer 🏷: -₹${discount}\n`;
	if (appliedPromo) msg += `Promo (${appliedPromo.code}): -₹${appliedPromo.discountAmount}\n`;
	msg += `Delivery: ₹0 (we cover up to ₹50 via Rapido)\n`;
	msg += `*Total: ₹${total - discount}*\n\n`;
	msg += `_Note: Delivery charges beyond ₹50 will be added based on your address._`;

	return msg;
}

function sendToWhatsApp() {
	if (appliedPromo?.promoKey && currentUser?.phoneNumber && (currentUser.phoneNumber || "").replace("+91", "") !== TEST_PHONE) {
		db.collection("promo_usage").add({
			phone:     currentUser.phoneNumber,
			promoCode: appliedPromo.promoKey,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
	}
	const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
	window.open(url, "_blank");
}
