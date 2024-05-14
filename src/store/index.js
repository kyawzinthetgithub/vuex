import { createStore } from "vuex";
import shop from "@/api/shop.js";

const store = createStore({
  state: {
    products: [],
    cart: [],
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

    //add to cart
    addProductToCart(context, product) {
      if (product.inventory > 0) {
        //find items
        const cartItem = context.state.cart.find(
          (item) => item.id === product.id
        );
        if (!cartItem) {
          //add to cart
          context.commit("pushProductToCart", product.id);
        } else {
          //push quanity to cart
          context.commit("increaseProductToCart", cartItem);
        }
        context.commit("decreaseProductInventory", product);
      }
    },
  },
  mutations: {
    //update state with single state changing
    setProduct(state, products) {
      state.products = products;
    },

    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quanity: 1,
      });
    },

    increaseProductToCart(cartItem) {
      cartItem.quanity++;
    },

    decreaseProductInventory(state, product) {
      product.inventory--;
    },
  },
});

export default store;
