import { createStore } from "vuex";
import actions from "./action";
("@/store/action.js");

const store = createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    avaliableProducts(state) {
      return state.products.filter((product) => product.inventory > 0);
    },
    cartProducts(state) {
      return state.cart.map((cartItem) => {
        const product = state.products.find(
          (product) => product.id == cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quanity,
        };
      });
    },
    cartTotal(state, getters) {
      let total = 0;
      getters.cartProducts.forEach((product) => {
        total += product.price * product.quanity;
      });
      return total;
      // return getters.cartProducts.reduce(
      //   (total, product) => total + product.price * product.quanity,
      //   0
      // );
    },
  },
  actions,

  mutations: {
    //update state with single state changing
    setProduct(state, products) {
      state.products = products;
    },

    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quanity: +1,
      });
    },

    increaseProductToCart(cartItem) {
      console.log(typeof cartItem);
      cartItem.quanity++;
    },

    decreaseProductInventory(product) {
      product.inventory--;
    },
  },
});

export default store;
