<template>
  <div id="page-content" class="page-content">
    <div class="container">
      <header>
        <h1>İLETİŞİM</h1>
      </header>
      <section class="content">
        <div class="contact-container">
          <div class="info-content">
            <NuxtImg src="baharat2.png" class="spice-image" />
            <div class="contact-info">
              <h2>İletişim Bilgileri</h2>
              <p>Yeradı (adres): Baharatcı Mahallesi, Lezzet Sokak, No: 123</p>
              <p>Telefon: +90 123 456 7890</p>
              <p>Email: info@baharatci.com</p>
            </div>
          </div>
        </div>
        <div>
          <p>
            Baharat ormanımıza hoş geldiniz! Anadolu'nun dört bir yanından en
            iyi baharatları bir araya getiriyoruz. Aşlarınızda kullanacağınız
            baharatların sizi eşsiz bir usta aşçı gibi göstermesini hep isteriz.
          </p>
          <p>
            Yolculuğumuz, lezzetlere olan tutkumuz ve en iyi malzemeleri temin
            etme taahhüdümüzle başladı. Satışa sunduğumuz her bir baharatın katı
            standartlarımızı karşıladığından emin olmak için doğrudan çiftçiler
            ve tedarikçilerle çalışıyoruz.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  alert("Mesajınız gönderildi!");
  formData.value = { name: "", email: "", message: "" };
};
</script>

<style scoped>
.contact-page {
  font-family: Arial, sans-serif;
}

.hero-section {
  text-align: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
}

.contact-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.form-content,
.info-content {
  display: flex;
}

.contact-form,
.contact-info {
  flex: 1;
  margin: 10px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-form h2,
.contact-info h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.spice-gallery {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.spice-image {
  width: 30%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .form-content,
  .info-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .contact-container {
    flex-direction: column;
  }

  .contact-form,
  .contact-info {
    margin: 10px 0;
    width: 100%; /* Kartların tam genişlikte olmasını sağlar */
  }

  .spice-gallery {
    flex-direction: column;
    align-items: center;
  }

  .spice-image {
    width: 80%;
    margin-bottom: 20px;
  }
}
</style>
