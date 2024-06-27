<template>
  <div>
    <div class="hero">
      <NuxtImg id="hero-img" src="heroBg2.jpg" />
      <div class="hero-text">
        <h1>halil yıldız baharat</h1>
        <h2>damak tadı kırıntıları</h2>
        <NuxtLink to="/urunler">-> tüm ürünlerimizde</NuxtLink>
      </div>
    </div>
    <div class="container home-content">
      <!-- TODO: sayfa yenilendiginde yeteri kadar sure gecmediyse degismesin
      urunler. -->

      <HomeSlogans />

      <HomeProducts />

      <HomeValues />

      <div class="about-us">
        <h1>Hakkımızda</h1>
        <p>
          İstanbul'da iş varlığını sürdüren bir baharatçıyız. Doğrudan tarladan
          temin edilen ürünlerin son kullanıcıya ulaştırılmasındaki bütün
          hizmetleri ve üretim aşamalarını üstlenmekteyiz.
        </p>
        <NuxtLink to="/hakkimizda" class="button"
          >Daha iyi tanımak için tıklayın.</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  position: relative;
  height: 580px;
  overflow: hidden;
}
.hero-text {
  position: absolute;
  height: auto;
  top: 40%;
  left: 15%;
}

#hero-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
