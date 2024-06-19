<template>
  <div>
    <div v-if="currentProduct" class="container">
      <h1>{{ currentProduct.title }}</h1>
      <p>{{ currentProduct.info }}</p>
      <NuxtImg :src="currentProduct.img" />
    </div>
    <div class="container" v-else>
      <h1>Yukleniyor...</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// currentProduct adında bir ref tanımlıyoruz
const currentProduct = ref(null);

// Route bilgilerini alıyoruz
const route = useRoute();

onMounted(async () => {
  // JSON dosyasını dinamik olarak import ediyoruz
  const catalog = await import("~/public/data/products.json");

  // Route'dan gelen slug parametresini alıyoruz
  const slug = route.params.slug;

  // Slug ile eşleşen ürünü buluyoruz
  currentProduct.value = catalog.default.find(
    (product) => product.slug === slug
  );
});
</script>
