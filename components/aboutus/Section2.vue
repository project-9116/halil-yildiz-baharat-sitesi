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
            Tarım aşamasından üretime, üretimden satışa ve dağıtıma kadar tüm süreçlerde emeği geçen herkesle birlikte
            Yıldız Baharat’ı oluşturuyoruz. Doğadan sofralarınıza en kaliteli baharatları sunuyoruz. Her baharatın en
            iyi şekilde işlenmesini ve en doğal haliyle size ulaşmasını sağlıyoruz. Üretim sürecimizin her adımında
            doğaya ve çevreye saygılı yöntemler kullanıyoruz. Bu sayede, baharatlarımızın doğallığını ve tazeliğini
            koruyarak sofralarınıza ulaştırıyoruz.
          </p>
        </div>
        <div class="value-section">
          <div class="flex-icon">
            <Icon name="ic:round-star" />

            <h2>Güvenle Tüketin</h2>
          </div>

          <p>
            Tüm birimlerimizde kalite ve güven önceliğimizdir. Yıldız Baharat olarak, ürünlerimizi güvenle
            tüketebilmeniz için titizlikle çalışıyoruz. Her bir baharatın güvenilirliğini ve sağlığınıza olan
            uygunluğunu garanti altına alıyoruz. Ürünlerimiz, sıkı denetimlerden geçirilerek hijyenik ortamlarda
            paketlenir. Bu süreçte, müşteri memnuniyetini en üst seviyede tutmayı hedefliyoruz ve size en güvenilir
            baharatları sunmaktan gurur duyuyoruz.
          </p>
        </div>
        <div class="value-section">
          <div class="flex-icon">
            <Icon name="ic:round-star" />
            <h2>Kalite ve Standartlar</h2>
          </div>
          <p>
            Tüm hammaddelerimizin Türk Gıda Kodeksi'ne uygunluğunu sağlamak ve kalite güvence sistemimize uygun olarak
            üretim yapmak bizim için vazgeçilmezdir. Yıldız Baharat’ta standartlara bağlı kalarak en iyi ürünleri
            sunuyoruz. Kalite kontrol ekibimiz, her aşamada titizlikle çalışarak en yüksek kalite standartlarını
            korur.
            Ürünlerimizin her biri, kalite güvencemizden geçerek sofralarınıza ulaşır. Bu sayede, her baharatın aynı
            yüksek kalitede olmasını ve güvenle tüketilmesini sağlıyoruz.
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
  font-size: 1.8rem;
}

.value-section p {
  margin: 0;
}
</style>
