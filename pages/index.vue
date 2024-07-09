<template>
  <div>
    <div class="hero">
      <NuxtImg id="hero-img" src="/site/hero.jpg" />
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

      <div class="index-card">
        <header>
          <h1>HAKKIMIZDA</h1>
        </header>
        <section>
          <p>
            İstanbul'un bağrında baharat dünyasına adanmış bir işletmeyiz.
            Bildik bir deyiş ile bir baharatçıyız. Tarladan sofraya kadar olan
            yolculukta, niteliği ve özeni hep gözetip koruyoruz. Size en iyisini
            sunmak için çalışıyoruz.
          </p>
        </section>
        <footer>
          <NuxtLink to="/hakkimizda" class="button"
            >Hepsini okumak için tıklayınız.</NuxtLink
          >
        </footer>
      </div>

      <HomeClients />
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
  width: auto;
  height: auto;
  top: 25%;
  padding: 10%;
  margin: 0 10%;
  background-color: rgba(250, 250, 250, 0.9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  opacity: 0.95;
}

#hero-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
