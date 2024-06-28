<template>
  <section class="spice-section">
    <div class="spice-card">
      <NuxtImg src="baharat1.png" class="spice-image" />
      <h3>Önce İnsan</h3>
      <p>
        Tarımdan üretime, üretimden satışa, dağıtımdan son kullanıcıya kadar
        emek veren tüm kaynaklarımız Tufan Baharat ailesini oluşturmaktadır.
      </p>
    </div>
    <div class="spice-card">
      <NuxtImg src="baharat2.png" class="spice-image" />
      <h3>Önce Güven</h3>
      <p>
        Tüm birimlerimizde kalite ve güven esasına dayalı iş ilişkisi kurumsal
        kültürümüzün bir parçasıdır.
      </p>
    </div>
    <div class="spice-card">
      <NuxtImg src="baharat3.png" class="spice-image" />
      <h3>Standartlara Uygunluk</h3>
      <p>
        Tüm hammaddelerin Türk Gıda Kodeksine uygunluğunun sağlanması ve kalite
        güvence sistemimize uygun üretim yapmak.
      </p>
    </div>
  </section>
</template>

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
  background-size: cover;
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
