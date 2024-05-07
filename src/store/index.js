import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [],
  },
  getters: {
    productsCount() {
      //...
    },
  },
  actions: {
    fetchProducts() {
      //make the call
    },
  },
  mutations: {
    //update state with single state changing
    setProduct(state, products) {
      state.products = products;
    },
  },
});

export default store;
