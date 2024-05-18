import shop from "@/api/shop.js";
export default {
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
};
