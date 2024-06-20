<template>
  <div class="content">
    <h1>ÜRÜNLER</h1>
    <p>Acı, tatlı, tuzlu, ekşi<br />türlü türlü baharatlar</p>
    <div v-if="catalog" class="product-grid">
      <div class="product-card" v-for="product in catalog" :key="product.title">
        <NuxtLink :to="`/${product.slug}`">
          <NuxtImg :src="product.img" alt="icerik filan" />
        </NuxtLink>
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.info }}</p>
          <div class="badge-container">
            <span class="badge">2Kg</span>
            <span class="badge">5Kg</span>
            <span class="badge">10Kg</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Yükleniyor...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const catalog = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/data/products.json");
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    catalog.value = products;
    console.log("Bunlar ürünler:", catalog.value);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
});
</script>
