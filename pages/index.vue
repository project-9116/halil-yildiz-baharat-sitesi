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
      <div class="home-products">
        <h2>Birkaç ürünümüz</h2>
        <div class="card-x">
          <div class="left">
            <div class="box"></div>
          </div>
          <div class="right">
            <div class="box">
              <div class="box-img">
                <NuxtLink to="/">
                  <img src="/ornek1.png" alt="..." />
                </NuxtLink>
              </div>
              <div class="box-detail">
                <h1>Baslik1</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="card-x">
          <div class="left">
            <div class="box"></div>
          </div>
          <div class="right">
            <div class="box">
              <div class="box-img">
                <NuxtLink to="/">
                  <img src="/ornek1.png" alt="..." />
                </NuxtLink>
              </div>
              <div class="box-detail">
                <h1>Baslik2</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="card-x">
          <div class="left">
            <div class="box"></div>
          </div>
          <div class="right">
            <div class="box">
              <div class="box-img">
                <NuxtLink to="/">
                  <img src="/ornek1.png" alt="..." />
                </NuxtLink>
              </div>
              <div class="box-detail">
                <h1>Baslik</h1>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink class="button primary-button" to="/urunler"
          >Diğer ürünler</NuxtLink
        >
      </div>

      <div class="articles">
        <h1>Birkaç yazımız</h1>
        <div class="article-card">
          <h2>Taze ürünler</h2>
          <p>hergün ürün gelir</p>
          <NuxtImg src="/baharat1.png" />
        </div>
        <div class="article-card">
          <h2>Birinci elden</h2>
          <p>köylüsünden aldık verdik</p>
          <NuxtImg src="/baharat1.png" />
        </div>

        <NuxtLink to="/degerlerimiz" class="button">Diğer yazılarımız</NuxtLink>
      </div>

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

      <!-- <MiniCatalog /> -->
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
