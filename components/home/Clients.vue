<template>
  <div>
    <div class="clients-showcase">
      <div class="clients-scroll">
        <NuxtImg
          src="/musteriler/efsanekadroyemekcilik.jpg"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
        <NuxtImg
          src="/musteriler/kervansaray.png"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
        <NuxtImg
          src="/musteriler/mahsunusta.png"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
        <NuxtImg
          src="/musteriler/manticizade.png"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
        <NuxtImg
          src="/musteriler/ongroup.jpg"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
        <NuxtImg
          src="/musteriler/ozguryemek.png"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
        <NuxtImg
          src="/musteriler/sonmezet.webp"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
        <NuxtImg
          src="/musteriler/yediden.png"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
        <NuxtImg
          src="/musteriler/zazanin-yeri.png"
          class="client-thumbnail"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const startScrolling = () => {
  const scrollArea = document.querySelector(".clients-scroll");
  const scrollSpeed = 1.3; // Kaydırma hızı
  let scrollPos = 0;

  const scroll = () => {
    scrollPos -= scrollSpeed;
    if (Math.abs(scrollPos) >= scrollArea.scrollWidth / 2) {
      scrollPos = 0; // Sonsuz döngü için sıfırla
    }
    scrollArea.style.transform = `translateX(${scrollPos}px)`;
    requestAnimationFrame(scroll);
  };

  scrollArea.innerHTML += scrollArea.innerHTML; // Sonsuz döngü için içerikleri iki katına çıkar
  requestAnimationFrame(scroll);
};

onMounted(() => {
  startScrolling();
});
</script>

<style>
.clients-showcase {
  background-color: #fff;
  margin: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  height: 200px; /* Varsayılan yükseklik */
}

.clients-scroll {
  display: flex;

  gap: 45px;
  padding: 20px;
  align-items: center;
  position: absolute;
  will-change: transform;
}

.client-thumbnail {
  border-radius: 5px;
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 0 0 auto;
  max-height: 100%; /* Thumbnail yüksekliği ayarla */
  max-width: 150px; /* Maksimum genişlik */
  display: flex;
  justify-content: center;
  align-items: center;
}

.client-thumbnail img {
  max-height: 100%; /* Resim yüksekliği ayarla */
  max-width: 100%; /* Resim genişliği ayarla */
  padding: 40px;
  object-fit: contain; /* Resmin bozulmadan sığmasını sağlar */
}

.client-thumbnail:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .clients-showcase {
    padding: 10px 50px;
    gap: 20px;
    height: 150px; /* Küçük ekranlarda yüksekliği ayarla */
  }

  .client-thumbnail {
    width: 100px; /* Küçük ekranlarda genişliği ayarla */
    height: auto; /* Küçük ekranlarda yüksekliği otomatik */
  }

  .client-thumbnail img {
    height: auto; /* Küçük ekranlarda resim yüksekliği otomatik */
    width: 100%; /* Küçük ekranlarda resim genişliği tam */
  }
}
</style>
