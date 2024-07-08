<template>
  <div v-if="recommendedProducts" class="product-grid">
    <header>
      <h1>Diğer Ürünler</h1>
    </header>
    <div
      class="card-x"
      v-for="product in recommendedProducts"
      :key="product.title"
    >
      <div class="left">
        <div class="box"></div>
      </div>
      <div class="right">
        <div class="box">
          <div class="box-img">
            <NuxtLink :to="`/${product.slug}`">
              <NuxtImg :src="`/tekil/${product.slug}.png`" alt="..." />
            </NuxtLink>
          </div>
          <div class="box-detail">
            <h1>{{ product.title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const recommendedProducts = ref([]);

const route = useRoute();

onMounted(async () => {
  try {
    const response = await fetch("/data/products.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();

    const slug = route.params.slug;

    // Filter out the current product to get recommended products
    recommendedProducts.value = products.filter(
      (product) => product.slug !== slug
    );

    recommendedProducts.value = recommendedProducts.value.splice(0, 5);
  } catch (error) {
    console.error("Veri çekme hatası: ", error);
  }
});
</script>
