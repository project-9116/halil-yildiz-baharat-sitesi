<template>
  <div class="page-content">
    <div class="product-image-container" style="margin-bottom: -35px">
      <Swiper
        v-if="photos.length > 0"
        :modules="[SwiperAutoplay, SwiperPagination]"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="photo in photos" :key="photo.url">
          <NuxtImg :src="photo.url" loading="lazy" :alt="photo.name" />
        </SwiperSlide>
      </Swiper>
      <div v-else>
        <h1>Yükleniyor...</h1>
      </div>
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
import { useNuxtApp } from "#app";

const { $supabase } = useNuxtApp();
const currentProduct = ref(null);
const recommendedProducts = ref([]);
const photos = ref([]);
const route = useRoute();

const getSignedUrl = async (path) => {
  try {
    const { data, error } = await $supabase.storage
      .from("fotograflar")
      .createSignedUrl(path, 60 * 60); // URL geçerliliği 1 saat
    if (error) throw error;
    return data.signedUrl;
  } catch (error) {
    console.error("Error creating signed URL: ", error.message);
    return null;
  }
};

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

const fetchProductPhotos = async () => {
  const slug = route.params.slug;
  try {
    const { data, error } = await $supabase.storage
      .from("fotograflar")
      .list(`urunler/${slug}`, {
        limit: 100, // Fotoğraf sayısına göre limit ayarlayabilirsiniz
        sortBy: { column: "name", order: "asc" },
      });

    if (error) throw error;

    const urls = await Promise.all(
      data.map(async (file) => {
        const url = await getSignedUrl(`urunler/${slug}/${file.name}`);
        return { name: file.name, url };
      })
    );
    photos.value = urls.filter((url) => url.url !== null);
  } catch (error) {
    console.error("Error listing images: ", error.message);
  }
};

onMounted(async () => {
  await fetchProductData();
  await fetchProductPhotos();
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
