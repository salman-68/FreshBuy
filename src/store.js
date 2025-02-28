import { configureStore, createSlice } from "@reduxjs/toolkit";

// Products slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    veg: [
      { name: "Tomato", price: 200.5, image: "tomato2.jpeg", quantity: 0 },
      { name: "Potato", price: 100.8, image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg", quantity: 0 },
      { name: "Kerala", price: 100.0, image: "karela.jpeg", quantity: 0 },
      { name: "Spinach", price: 20.0, image: "spinach.jpeg", quantity: 0 },
      { name: "Carrot", price: 90.0, image: "carrot.jpeg", quantity: 0 },
      { name: "Broccli", price: 180.0, image: "brocli.jpeg", quantity: 0 },
      { name: "Beet", price: 120.8, image: "beet.jpeg", quantity: 0 },
      { name: "Cabbage", price: 70.0, image: "cab.jpeg", quantity: 0 },
      { name: "Cauliflower", price: 65.0, image: "couliflower.jpeg", quantity: 0 },
      { name: "Brinjal", price: 40.0, image: "brinjal.jpeg", quantity: 0 },
      { name: "Green Beans", price: 50.0, image: "greenbeans.jpeg", quantity: 0 },
      { name: "Pumpkin", price: 30.0, image: "pumpkin.jpeg", quantity: 0 },
      { name: "Radish", price: 25.0, image: "radish.jpeg", quantity: 0 },
      { name: "Cucumber", price: 35.0, image: "cucumber.jpeg", quantity: 0 },
      { name: "Onion", price: 45.0, image: "onion.jpeg", quantity: 0 },
      { name: "Sweet Potato", price: 60.0, image: "sweetpotato.jpeg", quantity: 0 },
      { name: "Capsicum", price: 60.0, image: "capsicum.jpeg", quantity: 0 },
      { name: "Mushroom", price: 80.0, image: "mushroom.jpeg", quantity: 0 },
      { name: "Zucchini", price: 70.0, image: "zucchini.jpeg", quantity: 0 },
      { name: "Artichoke", price: 150.0, image: "artichoke.jpeg", quantity: 0 },
      { name: "Asparagus", price: 120.0, image: "asparagus.jpeg", quantity: 0 },
      { name: "Chili", price: 40.0, image: "chili.jpeg", quantity: 0 },
      { name: "Moringa", price: 80.0, image: "moringa.jpeg", quantity: 0 },
      { name: "Bitter Gourd", price: 90.0, image: "bitter.jpeg", quantity: 0 },
      { name: "Kale", price: 100.0, image: "kale.jpeg", quantity: 0 },
      { name: "Chayote", price: 50.0, image: "choyyate.jpeg", quantity: 0 },
      { name: "Fennel", price: 55.0, image: "fennnel.jpeg", quantity: 0 },
      { name: "Okra", price: 45.0, image: "okras.jpeg", quantity: 0 },
      { name: "Lettuce", price: 50.0, image: "lettuce.jpeg", quantity: 0 },
      { name: "Sweet Corn", price: 55.0, image: "sweetcorn.jpeg", quantity: 0 },
      { name: "Leeks", price: 75.0, image: "leeks.jpeg", quantity: 0 },
    ],
    nonVeg: [
      { name: "Chicken", price: 800.0, image: "chkn.jpeg", quantity: 0 },
      { name: "Fish", price: 1000.0, image: "Fsh.jpeg", quantity: 0 },
      { name: "Mutton", price: 1200.0, image: "mutton.jpeg", quantity: 0 },
      { name: "Prawns", price: 1500.0, image: "prawns.jpeg", quantity: 0 },
      { name: "Turkey", price: 2500.0, image: "turkey.jpeg", quantity: 0 },
      { name: "Duck", price: 2000.0, image: "duck.jpeg", quantity: 0 },
      { name: "Goat Meat", price: 1500.0, image: "goatmeat.jpeg", quantity: 0 },
      { name: "Lamb", price: 1800.0, image: "lambs.jpeg", quantity: 0 },
      { name: "Quail", price: 800.0, image: "quail.jpeg", quantity: 0 },
      { name: "Fish Fillet", price: 1200.0, image: "fishfillet.jpeg", quantity: 0 },
      { name: "Salmon", price: 2200.0, image: "salmon.jpeg", quantity: 0 },
      { name: "Tilapia", price: 800.0, image: "tilapia.jpeg", quantity: 0 },
      { name: "Pigeon", price: 1000.0, image: "pigeon.jpeg", quantity: 0 },
      { name: "Shrimp", price: 1300.0, image: "shrimp.jpeg", quantity: 0 },
      { name: "Cod", price: 1800.0, image: "Cod.jpeg", quantity: 0 },
      { name: "Tuna", price: 1500.0, image: "tuna.jpeg", quantity: 0 },
      { name: "Crab", price: 2000.0, image: "crab.jpeg", quantity: 0 },
      { name: "Eel", price: 1200.0, image: "eil.jpeg", quantity: 0 },
      { name: "Squid", price: 1000.0, image: "squid.jpeg", quantity: 0 },
      { name: "Octopus", price: 1800.0, image: "octopus.jpeg", quantity: 0 },
      { name: "Bass", price: 1600.0, image: "bass.jpeg", quantity: 0 },
      { name: "Herring", price: 900.0, image: "herring.jpeg", quantity: 0 },
      { name: "Carp", price: 800.0, image: "carp.jpeg", quantity: 0 },
      { name: "Alligator Meat", price: 2500.0, image: "alligatormeat.jpeg", quantity: 0 },
    ],
    milkItems: [
      { name: "Jersey", price: 100.0, image: "jrsyMilk.jpeg", quantity: 0 },
      { name: "Amul", price: 80.0, image: "amul.jpeg", quantity: 0 },
      { name: "Dsi", price: 60.0, image: "dsi.jpeg", quantity: 0 },
      { name: "Butter Milk", price: 50.0, image: "buttermilk.jpeg", quantity: 0 },
      { name: "Amul Ghee", price: 700.0, image: "ghee.png", quantity: 0 },
      { name: "Khoa", price: 500.0, image: "khoa4.jpeg", quantity: 0 },
      { name: "Butter", price: 250.0, image: "butter.jpeg", quantity: 0 },
      { name: "Ice Cream", price: 300.0, image: "icecream.jpeg", quantity: 0 },
      { name: "Milk Powder", price: 120.0, image: "powder.jpeg", quantity: 0 },
      { name: "Full Cream Milk", price: 80.0, image: "fullcreammilk.jpeg", quantity: 0 },
      { name: "Low Fat Milk", price: 70.0, image: "lowfatmilk.jpeg", quantity: 0 },
      { name: "Paneer", price: 200.0, image: "paneer.jpeg", quantity: 0 },
      { name: "Cheese", price: 250.0, image: "cheese.jpeg", quantity: 0 },
      { name: "Yogurt", price: 150.0, image: "yogurt.jpeg", quantity: 0 },
      { name: "Cream", price: 120.0, image: "cream.jpeg", quantity: 0 },
      { name: "Chocolate Milk", price: 130.0, image: "chocolatemilk.jpeg", quantity: 0 },
      { name: "Milkshake", price: 180.0, image: "milkshake.jpeg", quantity: 0 },
      { name: "Whey Protein", price: 1500.0, image: "wheyprotein.jpeg", quantity: 0 },
      { name: "Almond Milk", price: 220.0, image: "almondmilk.jpeg", quantity: 0 },
      { name: "Coconut Milk", price: 250.0, image: "coconutmilk.jpeg", quantity: 0 },
    ],
    
  },
  reducers: {
    updateQuantity: (state, action) => {
      const { category, name, quantity } = action.payload;
      const categoryItems = state[category];

      if (categoryItems) {
        const item = categoryItems.find((item) => item.name === name);
        if (item) {
          item.quantity = quantity;
        }
      }
    },
  },
});

// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter(item => item.name !== action.payload.name);
        }
      }
    },
    remove: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
    clearCart: () => [],
  },
});

// Purchase details slice
const purchaseDetailsSlice = createSlice({
  name: "purchaseDetails",
  initialState: [],
  reducers: {
    addPurchaseDetails: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Registration slice
const registrationSlice = createSlice({
  name: "registration",
  initialState: { users: [] },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("username"),
    user: localStorage.getItem("username") || null,
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
      const userExists = registeredUsers.find(user => user.username === username && user.password === password);
      if (userExists) {
        state.isAuthenticated = true;
        state.user = username;
        localStorage.setItem("username", username);
      } else {
        alert("Invalid credentials! Please check your username and password.");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("username");
    },
  },
});

// Configure the store
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    purchaseDetails: purchaseDetailsSlice.reducer,
    auth: authSlice.reducer,
    registration: registrationSlice.reducer,
  },
});

// Export actions and store
export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { updateQuantity } = productsSlice.actions;
export const { addPurchaseDetails } = purchaseDetailsSlice.actions;
export const { login, logout } = authSlice.actions;
export const { registerUser } = registrationSlice.actions;

export default store;
