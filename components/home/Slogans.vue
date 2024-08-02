<template>
  <section class="spice-section">
    <div class="spice-card" v-for="(item, index) in slogans" :key="item.title">
      <NuxtImg :src="`/konsept/konsept${index + 1}.jpg`" class="spice-image" />

      <h3>{{ item.title }}</h3>
      <p>
        {{ item.phrase }}
      </p>
    </div>
  </section>
</template>

<script setup>
const slogans = [
  {
    title: "Özenle Üretiyoruz",
    phrase:
      "Tarım aşamasından üretime, üretimden satışa ve dağıtıma kadar tüm süreçlerde emeği geçen herkesle birlikte Yıldız Baharat’ı oluşturuyoruz. Doğadan sofralarınıza en kaliteli baharatları sunuyoruz.",
  },
  {
    title: "Güvenle Tüketin",
    phrase:
      "Tüm birimlerimizde kalite ve güven önceliğimizdir. Yıldız Baharat olarak, ürünlerimizi güvenle tüketebilmeniz için titizlikle çalışıyoruz.",
  },
  {
    title: "Kalite ve Standartlar",
    phrase:
      "Tüm hammaddelerimizin Türk Gıda Kodeksi'ne uygunluğunu sağlamak ve kalite güvence sistemimize uygun olarak üretim yapmak bizim için vazgeçilmezdir. Yıldız Baharat’ta standartlara bağlı kalarak en iyi ürünleri sunuyoruz.",
  },
];
</script>

<style scoped>
.spice-section {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 56px;
  gap: 28px;
}

.spice-card {
  margin-bottom: 60px;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  text-align: center;
  color: #d35400;
  padding: 1.5rem;
  position: relative;
}

.spice-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-position: center;
  margin: -80px auto 1rem;
}

h3 {
  margin-top: 2rem;
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>
