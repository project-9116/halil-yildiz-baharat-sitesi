<template>
  <div>
    <header>
      <h1>HAKKIMIZDA</h1>
    </header>
    <section class="content">
      <div class="image-container">
        <NuxtImg src="/hakkimizda.jpeg" />
      </div>
      <div class="text-content">
        <p>
          Baharat ormanımıza hoş geldiniz! Anadolu'nun dört bir yanından en iyi baharatları bir araya getiriyoruz.
          Aşlarda, yemeklerde kullandığınız bahratların sizi eşsiz bir usta aşçı gibi göstermesini hep isteriz.
        </p>
        <p>
          Gaziantepten başlayan yolculuğumuz İstanbulda Halil Yıldız Baharata dönüştü. Ülkenin dört bir yanında pişmiş
          yemeklerde baharatlarımız tadılır oldu.
        </p>
        <p>Paketleyip toptan satışta ve perakende satışta sunduğumuz her bir baharatın genel standartlara ve
          standartlarımıza uyduğundan emin olmak için doğrudan bahratların kaynağı olan çiftçiler ve tedarikçilerle
          çalışıyoruz. </p>

        <i>Her ne kadar biz kendimizi anlatsak da ürünlerimiz ile tanınıp, bilinmek isteriz. </i>

        <NuxtLink to="/urunler">Ürünlerimize erişmek için</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.content {
  text-align: center;
  padding: 1rem;
}

.image-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.image-container img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-content {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: left;
}
</style>
