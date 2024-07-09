<template>
  <div class="page-content">
    <div class="product-image-container" style="  margin-bottom: -35px;">
          <Swiper
            :modules="[SwiperAutoplay, SwiperPagination]"
            :autoplay="{
              delay: 3500,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide>
              <NuxtImg src="/pulbiber/mutfakta.jpg" class="product-image" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/pulbiber/tahtada1.jpg" class="product-image" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/pulbiber/tahtada3.jpg" class="product-image" />
            </SwiperSlide>
          </Swiper>
        </div>
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
      <!-- <div class="product-detail-wrapper">
        <div class="product-detail">
          <div class="other-photos">
            <NuxtImg src="/pulbiber/mutfakta.jpg" class="product-thumbnail" />
            <NuxtImg src="/pulbiber/tahtada1.jpg" class="product-thumbnail" />
            <NuxtImg src="/pulbiber/tahtada2.jpg" class="product-thumbnail" />
            <NuxtImg src="/pulbiber/tahtada3.jpg" class="product-thumbnail" />
          </div>
        </div>
      </div> -->
      <SingleOthers />
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

@media (max-width: 768px) {
  .product-detail-wrapper {
    flex-direction: column;
  }
}
</style>
