<template>
  <div class="page-content">
    <div class="container">
      <header>
        <h1>ÜRÜNLER</h1>
        <p>Acı, tatlı, tuzlu, ekşi<br />türlü türlü baharatlar</p>
      </header>

      <div v-if="catalog" class="product-grid">
        <div class="card-x" v-for="product in catalog" :key="product.title">
          <div class="left">
            <div class="box">
              
            </div>
          </div>
          <div class="right">
            <div class="box">
              <div class="box-img">
                <img src="/ornek1.png" alt="..." />
              </div>
              <div class="box-detail">
                <h1>{{ product.title }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div v-if="catalog" class="product-grid">
        <div class="product-card" v-for="product in catalog" :key="product.title">
          <NuxtLink :to="`/${product.slug}`">
            <NuxtImg :src="product.img" alt="icerik filan" />
          </NuxtLink>
          <div class="product-details">
            <h2>{{ product.title }}</h2>

            <div class="badge-container">
              <span class="badge">2 Kg</span>
              <span class="badge">5 Kg</span>
              <span class="badge">10 Kg</span>
            </div>
          </div>
        </div>
      </div> -->
      <div v-else>Yükleniyor...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const catalog = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/data/products.json");
    // console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    catalog.value = products;
    // console.log("Bunlar ürünler:", catalog.value);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
});
</script>
