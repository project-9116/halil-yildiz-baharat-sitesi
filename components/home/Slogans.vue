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
    title: "Önce İnsan",
    phrase:
      "Tarımdan üretime, üretimden satışa, dağıtımdan son kullanıcıya kadar emek veren tüm kaynaklarımız Halil Yıldız Baharat'ı oluşturmaktadır.",
  },
  {
    title: "Önce Güven",
    phrase:
      "Tüm birimlerimizde kalite ve güven esasına dayalı iş ilişkisi kurumsal kültürümüzün bir parçasıdır.",
  },
  {
    title: "Standartlara Uygunluk",
    phrase:
      "Tüm hammaddelerin Türk Gıda Kodeksine uygunluğunun sağlanması ve kalite güvence sistemimize uygun üretim yapmak.",
  },
];
</script>

<style scoped>
.spice-section {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
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
  margin: 0 auto 1rem;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
}

h3 {
  margin-top: 3rem;
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>
