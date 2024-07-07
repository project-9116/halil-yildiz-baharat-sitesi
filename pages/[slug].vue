<template>
  <div class="page-content">
    <div v-if="currentProduct" class="container">
      <header>
        <h1>{{ currentProduct.title }}</h1>
      </header>
      <section>
        <div class="product-image-container">
            <NuxtImg
              :src="`/tekil/${currentProduct.slug}.png`"
              class="product-image"
            />
        </div>
        <div class="product-info">
            <p>{{ currentProduct.info }}</p>
        </div>
      </section>
      <div class="product-detail-wrapper">
        <div class="product-detail">
          <div class="other-photos">
            <NuxtImg src="/pulbiber/mutfakta.jpg" class="product-thumbnail" />
            <NuxtImg src="/pulbiber/tahtada1.jpg" class="product-thumbnail" />
            <NuxtImg src="/pulbiber/tahtada2.jpg" class="product-thumbnail" />
            <NuxtImg src="/pulbiber/tahtada3.jpg" class="product-thumbnail" />
          </div>
        </div>



        <div v-if="catalog" class="product-grid">
        <div class="card-x" v-for="product in catalog" :key="product.title">
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

.product-image-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: center;
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

.product-thumbnail {
  max-width: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
</style>
