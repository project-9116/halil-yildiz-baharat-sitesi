<template>
  <div class="product-container">
    <div class="product-card large">
      <div class="product-image">
        <NuxtImg src="baharat1.png" alt="Black Pepper" />
      </div>
      <div class="product-info">
        <h2>Black Pepper</h2>
      </div>
    </div>
    <div class="product-grid">
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="product-image">
          <NuxtImg :src="product.image" :alt="product.name" />
        </div>
        <div class="product-info">
          <h2>{{ product.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  { id: 1, name: "Pul Biber", image: "baharat1.png" },
  { id: 2, name: "Karabiber", image: "baharat2.png" },
  { id: 3, name: "Zerdeçal", image: "baharat3.png" },
  { id: 4, name: "Tarçın", image: "baharat4.png" },
];
</script>

<style scoped>
.product-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-card.large {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  max-width: 500px;
}

.product-card.large .product-image {
  flex: 1;
  position: relative;
}

.product-card.large .product-info {
  flex: 1;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card .product-image {
  position: relative;
  text-align: center;
  padding: 20px;
}

.product-card .product-image img {
  max-width: 100%;
  border-radius: 10px;
}

.product-card .product-info {
  padding: 10px 20px;
  text-align: center;
}

.product-card .product-info h2 {
  font-size: 18px;
  margin: 10px 0;
}

.product-card .product-info p {
  font-size: 14px;
  color: #777;
}

.view-all {
  background-color: #fff;
  border: 2px solid #d35400;
  color: #d35400;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.view-all:hover {
  background-color: #d35400;
  color: #fff;
}

@media (max-width: 768px) {
  .product-card.large {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .product-card {
    width: 100%;
  }
}
</style>
