<template>
  <h1>Product List</h1>
  <ul v-for="product in products" :key="product.id">
    <li>{{ product.title }} - {{ product.price }}</li>
  </ul>
</template>

<script>
import shop from "@/api/shop.js";
import store from "../store";
export default {
  computed: {
    products() {
      console.log("abo", store.state.products);
      return store.state.products;
    },
  },
  mounted() {
    shop.getProducts((products) => {
      console.log(products);
      store.commit("setProduct", products);
    });
  },
};
</script>
