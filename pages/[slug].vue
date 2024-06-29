<template>
  <div>
    <div v-if="currentProduct" class="container">
      <div class="product-detail-wrapper">
        <div class="product-detail">
          <NuxtImg
            :src="`/tekil/${currentProduct.slug}.jpg`"
            class="product-image"
          />
          <div class="product-info">
            <h1>{{ currentProduct.title }}</h1>
            <p>{{ currentProduct.info }}</p>
          </div>
        </div>
        <div class="recommended-products">
          <h2>Önerilen Ürünler</h2>
          <div class="recommended-list">
            <div
              v-for="product in recommendedProducts"
              :key="product.id"
              class="recommended-item"
            >
              <NuxtLink :to="`/${product.slug}`">
                <NuxtImg :src="`/tekil/${product.slug}.jpg`" alt="..." />
              </NuxtLink>
              <h3>{{ product.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <h1>Yükleniyor...</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const currentProduct = ref(null);
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
    currentProduct.value = products.find((product) => product.slug === slug);

    // Filter out the current product to get recommended products
    recommendedProducts.value = products.filter(
      (product) => product.slug !== slug
    );
  } catch (error) {
    console.error("Veri çekme hatası: ", error);
  }
});
</script>

<!-- <style scoped>
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

.product-image {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.product-info {
  text-align: center;
}

.recommended-products {
  flex: 0 0 300px;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #ccc;
}

.recommended-products h2 {
  text-align: center;
  margin-bottom: 20px;
}

.recommended-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.recommended-item {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
}

.recommended-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .product-detail-wrapper {
    flex-direction: column;
  }

  .recommended-products {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
  }
}
</style> -->

<style scoped>
.container {
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
}

.product-detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  gap: 60px;
}

.product-image {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.product-info {
  text-align: start;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recommended-products {
  margin-top: 40px;
}

.recommended-products h2 {
  text-align: center;
  margin-bottom: 20px;
}

.recommended-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.recommended-item {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  max-width: 200px;
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
}

.recommended-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .product-detail {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .recommended-item {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .recommended-item {
    flex: 1 1 100%;
  }
}
</style>
