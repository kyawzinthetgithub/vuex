<template>
  <h1>Product List</h1>
  <div class="" v-if="loading.status">loading....</div>
  <div class="" v-else>
    <h4>Total Product</h4>
    <ul v-for="product in products" :key="product.id">
      <li>{{ product.title }} - {{ product.price }}</li>
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
  return store.state.products;
});

onMounted(() => {
  console.log(loading.status);
  loading.status = true;
  store.dispatch("fetchProducts").then(() => (loading.status = false));
});
</script>
