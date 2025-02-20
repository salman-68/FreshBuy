import { configureStore, createSlice } from "@reduxjs/toolkit";
import ProductSlider from "./ProductSlider";
 


// Products slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    veg: [
      { name: "Tomato", price: 200.5, image: "tomato2.jpeg" },
      {
        name: "Potato",
        price: 100.8,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",
      },
      { name: "Kerala", price: 100.0, image: "karela.jpeg" },
      { name: "Spinach", price: 20.0, image: "spinach.jpeg" },
      { name: "Carrot", price: 90.0, image: "carrot.jpeg" },
      { name: "Broccli", price: 180.0, image: "brocli.jpeg" },
      { name: "Beet", price: 120.8, image: "beet.jpeg" },
      { name: "Cabbage", price: 70.0, image: "cab.jpeg" },
      { name: "Cauliflower", price: 65.0, image: "couliflower.jpeg" },
      { name: "Brinjal", price: 40.0, image: "brinjal.jpeg" },
      { name: "Green Beans", price: 50.0, image: "greenbeans.jpeg" },
      { name: "Pumpkin", price: 30.0, image: "pumpkin.jpeg" },
      { name: "Radish", price: 25.0, image: "radish.jpeg" },
      { name: "Cucumber", price: 35.0, image: "cucumber.jpeg" },
      { name: "Onion", price: 45.0, image: "onion.jpeg" },
      { name: "Sweet Potato", price: 60.0, image: "sweetpotato.jpeg" },
      { name: "Capsicum", price: 60.0, image: "capsicum.jpeg" },
      { name: "Mushroom", price: 80.0, image: "mushroom.jpeg" },
      { name: "Zucchini", price: 70.0, image: "zucchini.jpeg" },
      { name: "Artichoke", price: 150.0, image: "artichoke.jpeg" },
      { name: "Asparagus", price: 120.0, image: "asparagus.jpeg" },
      { name: "Chili", price: 40.0, image: "chili.jpeg" },
      { name: "Moringa", price: 80.0, image: "moringa.jpeg" },
      { name: "Bitter Gourd", price: 90.0, image: "bitter.jpeg" },
      { name: "Kale", price: 100.0, image: "kale.jpeg" },
      { name: "Chayote", price: 50.0, image: "choyyate.jpeg" },
      { name: "Fennel", price: 55.0, image: "fennnel.jpeg" },
      { name: "Okra", price: 45.0, image: "okras.jpeg" },
      { name: "Chili", price: 40.0, image: "gchili.jpeg" },
      { name: "Lettuce", price: 50.0, image: "lettuce.jpeg" },
      { name: "Sweet Corn", price: 55.0, image: "sweetcorn.jpeg" },
      { name: "Leeks", price: 75.0, image: "leeks.jpeg" },
    ],
    nonVeg: [
      { name: "Chicken", price: 800.0, image: "chkn.jpeg" },
      { name: "Fish", price: 1000.0, image: "Fsh.jpeg" },
      { name: "Mutton", price: 1200.0, image: "mutton.jpeg" },
      { name: "Prawns", price: 1500.0, image: "prawns.jpeg" },
      { name: "Turkey", price: 2500.0, image: "turkey.jpeg" },
      { name: "Duck", price: 2000.0, image: "duck.jpeg" },
      { name: "Goat Meat", price: 1500.0, image: "goatmeat.jpeg" },
      { name: "Lamb", price: 1800.0, image: "lambs.jpeg" },
      { name: "Quail", price: 800.0, image: "quail.jpeg" },
      { name: "Fish Fillet", price: 1200.0, image: "fishfillet.jpeg" },
      { name: "Salmon", price: 2200.0, image: "salmon.jpeg" },
      { name: "Tilapia", price: 800.0, image: "tilapia.jpeg" },
      { name: "Pigeon", price: 1000.0, image: "pigeon.jpeg" },
      { name: "Shrimp", price: 1300.0, image: "shrimp.jpeg" },
      { name: "Cod", price: 1800.0, image: "Cod.jpeg" },
      { name: "Tuna", price: 1500.0, image: "tuna.jpeg" },
      { name: "Crab", price: 2000.0, image: "crab.jpeg" },
      { name: "Eel", price: 1200.0, image: "eil.jpeg" },
      { name: "Squid", price: 1000.0, image: "squid.jpeg" },
      { name: "Octopus", price: 1800.0, image: "octopus.jpeg" },
      { name: "Bass", price: 1600.0, image: "bass.jpeg" },
      { name: "Herring", price: 900.0, image: "herring.jpeg" },
      { name: "Carp", price: 800.0, image: "carp.jpeg" },
      { name: "Alligator Meat", price: 2500.0, image: "alligatormeat.jpeg" },
      // Add 30 more non-veg items...
    ],
    milkItems: [
      { name: "Jersey", price: 100.0, image: "jrsyMilk.jpeg" },
      { name: "Amul", price: 80.0, image: "amul.jpeg" },
      { name: "Dsi", price: 60.0, image: "dsi.jpeg" },
      { name: "Butter Milk", price: 50.0, image: "buttermilk.jpeg" },
      { name: "Amul Ghee", price: 700.0, image: "ghee.png" },
      { name: "Khoa", price: 500.0, image: "khoa4.jpeg" },
      { name: "Butter", price: 250.0, image: "butter.jpeg" },
      { name: "Ice Cream", price: 300.0, image: "icecream.jpeg" },
      { name: "Milk Powder", price: 120.0, image: "powder.jpeg" },
      { name: "Full Cream Milk", price: 80.0, image: "fullcreammilk.jpeg" },
      { name: "Low Fat Milk", price: 70.0, image: "lowfatmilk.jpeg" },
      { name: "Paneer", price: 200.0, image: "paneer.jpeg" },
      { name: "Cheese", price: 250.0, image: "cheese.jpeg" },
      { name: "Yogurt", price: 150.0, image: "yogurt.jpeg" },
      { name: "Cream", price: 120.0, image: "cream.jpeg" },
      { name: "Chocolate Milk", price: 130.0, image: "chocolatemilk.jpeg" },
      { name: "Milkshake", price: 180.0, image: "milkshake.jpeg" },
      { name: "Whey Protein", price: 1500.0, image: "wheyprotein.jpeg" },
      { name: "Almond Milk", price: 220.0, image: "almondmilk.jpeg" },
      { name: "Coconut Milk", price: 250.0, image: "coconutmilk.jpeg" },
      // Add 30 more milk items...
    ],
  },
  reducers: {},
});

// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity = item.quantity + 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity = item.quantity - 1;
      } else {
        return state.filter((item) => item.name !== action.payload.name);
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.name !== action.payload.name);
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
  initialState: {
    users: [],
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});



// Auth slice with modifications for state sync
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

      const userExists = registeredUsers.find(
        (user) => user.username === username && user.password === password
      );

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
// Export actions and the store
export const { addToCart, increment, decrement, remove, clearCart } =
  cartSlice.actions;
export const { addPurchaseDetails } = purchaseDetailsSlice.actions;
export const { login, logout, checkAuthState } = authSlice.actions;
export const { registerUser } = registrationSlice.actions;

export default store;
