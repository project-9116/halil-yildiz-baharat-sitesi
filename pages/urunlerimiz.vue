<template>
  <div class="content">
    <h1>ÜRÜNLER</h1>
    <p>
      Acı, tatlı, tuzlu, ekşi<br />türlü türlü baharatlar
    </p>
    <div class="product-grid">
      <div class="product-card" v-for="n in 5" :key="n">
        <NuxtImg :src="'baharat' + n + '.png'" :alt="'Baharat ' + n" />
        <div class="product-details">
          <h2>{{ "Baharat " + n }}</h2>
          <p>{{ "Baharat " + n + "in açıklaması burada yer alacak." }}</p>
          <div class="badge-container">
            <span class="badge">2Kg</span>
            <span class="badge">5Kg</span>
            <span class="badge">10Kg</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
