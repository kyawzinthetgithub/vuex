import { createStore } from "vuex";
import shop from "@/api/shop.js";

const store = createStore({
  state: {
    products: [],
  },
  getters: {
    avaliableProducts(state) {
      return state.products.filter((product) => product.inventory > 0);
    },
  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        shop.getProducts((products) => {
          commit("setProduct", products);
          resolve();
        });
      });
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
