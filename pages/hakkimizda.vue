<template>
  <div class="page-content">
    <div class="container">
      <header>
      <h1>Hakkımızda</h1>
    </header>
    <section class="content">
      <div class="image-container">
        <NuxtImg src="/hakkimizda.jpeg" />
      </div>
      <div>
        <p>
          Baharat dükkanımıza hoş geldiniz! Dünyanın dört bir yanından en iyi
          baharatları size sunmaya adanmış durumdayız. Misyonumuz, mutfak
          yaratımlarınızı bir üst seviyeye taşıyacak yüksek kaliteli ürünler
          sağlamaktır.
        </p>
        <p>
          Yolculuğumuz, lezzetlere olan tutkumuz ve en iyi malzemeleri temin
          etme taahhüdümüzle başladı. Satışa sunduğumuz her bir baharatın katı
          standartlarımızı karşıladığından emin olmak için doğrudan çiftçiler ve
          tedarikçilerle çalışıyoruz.
        </p>
      </div>
    </section>
    </div>    
  </div>
</template>
<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
}

.image-container img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-container {
  max-width: 800px;
  text-align: left;
  line-height: 1.6;
}

.text-container p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1rem;
}
</style>
