<template>
  <div id="page-content" class="page-content">
    <div class="container">
      <header>
        <h1>İLETİŞİM</h1>
      </header>
      <section class="content">
        <NuxtImg src="baharat2.png" class="spice-image" />
        <div>
          <ul>
            <li>
              Yeradı (Adres):<br>Baharatçı Mahallesi, Lezzet Sk. No: 123
            </li>
            <li>
              Telefon:<br>+90 123 456 7890
            </li>
            <li>
              E-posta:<br>info@baharatci.com
            </li>
          </ul>
          
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
.contact {
  text-align: center;
}




@media (max-width: 768px) {



}
</style>
