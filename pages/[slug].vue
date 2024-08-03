<template>
  <div class="page-content">
    <SinglePhoto />

    <div v-if="currentProduct" class="container">
      <section>
        <header>
          <h1>{{ currentProduct.title }}</h1>
        </header>
        <div v-if="currentProduct.content" class="product-info">
          <p>{{ currentProduct.content }}</p>
        </div>
        <div class="product-info">
          <p>{{ currentProduct.info }}</p>
        </div>
      </section>
      <LazySingleOthers />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useNuxtApp } from "#app";

const { $supabase } = useNuxtApp();
const currentProduct = ref(null);
const recommendedProducts = ref([]);
const route = useRoute();

const fetchProductData = async () => {
  try {
    const response = await fetch("/data/products.json");
    if (!response.ok) throw new Error("Network response was not ok");
    const products = await response.json();

    const slug = route.params.slug;
    currentProduct.value = products.find((product) => product.slug === slug);
    recommendedProducts.value = products.filter(
      (product) => product.slug !== slug
    );
  } catch (error) {
    console.error("Veri çekme hatası: ", error);
  }
};

onMounted(async () => {
  await fetchProductData();
});
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
}

.product-detail-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-detail {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

.product-title {
  width: 100%;
  background-color: rgba(231, 131, 44, 0.15);
  color: #d35400;
  position: absolute;
  bottom: 10px;
  padding: 5px 15px;
  border-radius: 5px;
}

.other-photos {
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding: 5px 0;
}

.other-photos::-webkit-scrollbar {
  height: 8px;
}

.other-photos::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.product-info {
  text-align: center;
}

@media (max-width: 768px) {
  .product-detail-wrapper {
    flex-direction: column;
  }
}
</style>
