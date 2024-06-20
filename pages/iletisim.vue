<template>
  <div class="container">
    <div class="contact-page">
      <div class="hero-section">
        <h1>İLETİŞİM</h1>
      </div>
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

        <div class="form-content">
          <div class="contact-form">
            <h2>Bize Yazın</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Ad</label>
                <input type="text" id="name" v-model="formData.name" required />
              </div>
              <div class="form-group">
                <label for="email">Eposta</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Konu</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                ></textarea>
              </div>
              <button type="submit">İlet</button>
            </form>
          </div>
          <NuxtImg src="baharat3.png" class="spice-image" />
        </div>
      </div>
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
