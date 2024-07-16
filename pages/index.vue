<template>
  <div>
    <div class="hero">
      <HomeHero />
      <!-- <video width="100%" height="auto" playsinline autoplay>
        <source src="/site/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> -->
    </div>
    <div class="container home-content">
      <!-- TODO: sayfa yenilendiginde yeteri kadar sure gecmediyse degismesin
      urunler. -->

      <HomeSlogans />

      <HomeProducts />

      <HomeClients />

      <HomeValues />
    </div>
  </div>
</template>

<style>
.hero {
  position: relative;
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
