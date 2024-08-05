<template>
  <div>
    <header>
      <h1>DEĞERLERİMİZ</h1>
    </header>
    <section class="content">
      <div class="image-container">
        <NuxtImg src="/hakkimizda.jpeg" />
      </div>
      <div class="text-content">
        <div class="value-section">
          <div class="flex-icon">

            <Icon name="ic:round-star" />

            <h2>Özenle Üretiyoruz</h2>
          </div>
          <p>
            Tarım aşamasından üretime, üretimden dağıtıma ve satışa kadar tüm süreçlerde emeği geçenler ile birlikte
            Halil Yıldız Baharat’ı oluşturuyoruz. Doğadan sofralarınıza en nitelikli baharatları sunmak, amacımızdır.

            İşimize özen göstererek en iyi şekilde baharatları işliyoruz. Doğallığını yitirmeden size ulaştırmak için
            çalışıyoruz.
            Doğa baharatlarımızın fabrikasıdır. Bu yüzden fabrikamız olan doğaya bütün sorumluluk bilincimizle
            yaklaşıyoruz. Böylece, baharatlarımızın doğallığını ve tazeliğini koruyarak sofralarınıza ulaştırıyoruz.
          </p>
        </div>
        <div class="value-section">
          <div class="flex-icon">
            <Icon name="ic:round-star" />

            <h2>Güvenle Tüketin</h2>
          </div>

          <p>
            Tüm birimlerimizde nitelik ve güven önceliğimizdir. Halil Yıldız Baharat olarak, ürünlerimizi gözünüzü
            yumarak yiyebilceğiniz her baharat için titizlikle çalışıyoruz.
            Sağlıklı paketleme yöntemleriyle baharatların el değmeden sofralara ulaştırmada güven oluşturuyoruz.
            Müşteri memnuniyetinde en önemli paylardan biri güvende süreklilik sağlanmasıdır. Ve biz bu güveni
            sağlayabildiğimiz için gurur duyuyoruz.
          </p>
        </div>
        <div class="value-section">
          <div class="flex-icon">
            <Icon name="ic:round-star" />
            <h2>Nitelik ve Standartlar</h2>
          </div>
          <p>
            Tüm ürünlerimiz ... Standartlarımız konusunda Türk Kıda Kodeksini tanıyor ve uyuyoruz. Bu uyumu korumak için
            doğadan sofraya kadar olan bütün süreçleri yönetimimiz altında tutmak için çalışıyoruz. Baharatlarımızın
            niteliğinin bir güvencesi de standartları belirleyen kurumlara ve yapılara açık olmamızdır.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  margin-bottom: 1.5rem;
}

header h1 {
  font-size: 2.5rem;

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

.flex-icon {
  align-items: center;
  display: flex;
  color: #d35400;
}


.text-content {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
  text-align: left;
}

.value-section {
  margin-bottom: 2rem;
}

.value-section h2 {
  font-size: 1.6rem;
}

.value-section p {
  margin: 0;
}
</style>
