<template>
  <div class="">
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }} - {{ product.quantity }}
      </li>
    </ul>
    <h4>Total - ${{ total }}</h4>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const products = computed(() => {
  return store.getters.cartProducts;
});

const total = computed(() => {
  return store.getters.cartTotal;
});
</script>

<style></style>
