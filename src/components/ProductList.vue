<template>
  <h1>Product List</h1>
  <div class="" v-if="loading.status">loading....</div>
  <div class="" v-else>
    <h4>Total Product</h4>
    <ul v-for="product in products" :key="product.id">
      <li>
        {{ product.title }} - {{ product.price }} - {{ product.inventory }}
        <button @click="addProductToCart(product)">Add To Cart</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import store from "../store";
const loading = reactive({
  status: false,
});

const products = computed(() => {
  return store.getters.avaliableProducts;
});

onMounted(() => {
  loading.status = true;
  store.dispatch("fetchProducts").then(() => (loading.status = false));
});

function addProductToCart(product) {
  store.dispatch("addProductToCart", product);
}
</script>
