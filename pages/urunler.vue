<template>
  <div class="page-content">
    <div class="container">
      <header>
        <h1>ÜRÜNLER</h1>
        <p>Acı, tatlı, tuzlu, ekşi<br />türlü türlü baharatlar</p>
      </header>

      <ProductsCatalog />
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
