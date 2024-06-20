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
    <div class="container">
      <ul class="yazilar">
        <li>
          <h1>Önce İnsan</h1>
          <p>
            Tarımdan üretime, üretimden satışa, dağıtımdan son kullanıcıya kadar
            emek veren tüm kaynaklarımız Tufan Baharat ailesini oluşturmaktadır.
          </p>
        </li>
        <li>
          <h1>Önce Güven</h1>
          <p>
            Tüm birimlerimizde kalite ve güven esasına dayalı iş ilişkisi
            kurumsal kültürümüzün bir parçasıdır.
          </p>
        </li>
        <li>
          <h1>Standartlara Uygunluk</h1>
          <p>
            Tüm hammaddelerin Türk Gıda Kodeksine uygunluğunun sağlanması ve
            kalite güvence sistemimize uygun üretim yapmak.
          </p>
        </li>
        <li>
          <h1>Etik Değerler</h1>
          <p>
            Değerlere saygılı kalarak, bireysel ve kurumsal ilişkiler hukukuna
            riayette yasaları ve genel toplum ahlak esaslarını taviz vermeden
            uygulamak.
          </p>
        </li>
      </ul>

      <MiniCatalog />
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
