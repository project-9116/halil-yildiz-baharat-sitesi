<template>
  <div class="content">
    <h1>ÜRÜNLER</h1>
    <p>Acı, tatlı, tuzlu, ekşi<br />türlü türlü baharatlar</p>
    <div v-if="catalog" class="product-grid">
      <NuxtLink
        class="product-card"
        v-for="product in catalog"
        :key="product.title"
        :to="product.slug"
      >
        <NuxtImg :src="product.img" alt="icerik filan" />
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.info }}</p>
          <div class="badge-container">
            <span class="badge">2Kg</span>
            <span class="badge">5Kg</span>
            <span class="badge">10Kg</span>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div v-else>Yukleniyor</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const catalog = ref();
onMounted(async () => {
  const products = await import("~/public/data/products.json");
  catalog.value = products.default;
});
</script>
