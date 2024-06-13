<!-- <template>
  <div class="content">
    <h1>ÜRÜNLER</h1>
    <p>
      Acısından tatlısına, tuzlusundan ekşisine<br />türlü türlü baharat
      ürünleri
    </p>
    <NuxtImg src="baharat1.png" />
    <NuxtImg src="baharat2.png" />
    <NuxtImg src="baharat3.png" />
    <NuxtImg src="baharat4.png" />
    <NuxtImg src="baharat5.png" />
  </div>
</template> -->

<template>
  <div class="content">
    <h1>ÜRÜNLER</h1>
    <p>
      Acısından tatlısına, tuzlusundan ekşisine<br />türlü türlü baharat
      ürünleri
    </p>
    <div class="product-grid">
      <div class="product-card" v-for="n in 5" :key="n">
        <NuxtImg :src="'baharat' + n + '.png'" :alt="'Baharat ' + n" />
        <div class="product-details">
          <h2>{{ "Baharat " + n }}</h2>
          <p>{{ "Baharat " + n + "in açıklaması burada yer alacak." }}</p>
          <div class="badge-container">
            <span class="badge">2KG</span>
            <span class="badge">5KG</span>
            <span class="badge">10KG</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #d35400;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  width: calc(33.333% - 40px); /* üç kart yan yana */
  max-width: 400px;
  text-align: left;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-card NuxtImg {
  width: 100%;
  height: auto;
  display: block;
}

.product-card h2 {
  font-size: 1.5em;
  margin: 15px;
  color: #d35400;
}

.product-card p {
  font-size: 1em;
  margin: 0 15px 15px;
}

.badge-container {
  display: flex;
  justify-content: end;
  gap: 10px;
  padding: 15px;
  margin-top: auto;
}

.badge {
  background-color: #d35400;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .product-card {
    width: calc(50% - 30px); /* iki kart yan yana */
  }
}

@media (max-width: 480px) {
  .product-card {
    width: 100%; /* tek kart */
  }
}
</style>
