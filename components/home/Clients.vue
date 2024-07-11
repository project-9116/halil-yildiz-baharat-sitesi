<template>
  <div>
    <div class="clients-showcase">
      <div class="clients-scroll">
        <NuxtImg
          src="/musteriler/efsanekadroyemekcilik.jpg"
          class="client-thumbnail"
        />
        <NuxtImg src="/musteriler/yediden.png" class="client-thumbnail" />

        <NuxtImg src="/musteriler/mahsunusta.png" class="client-thumbnail" />
        <NuxtImg src="/musteriler/manticizade.png" class="client-thumbnail" />
        <NuxtImg
          style="background-color: lightslategray; padding: 4px 4px"
          src="/musteriler/ozguryemek.png"
          class="client-thumbnail"
        />
        <NuxtImg src="/musteriler/ongroup.jpg" class="client-thumbnail" />
        <NuxtImg
          style="scale: 1.4"
          src="/musteriler/kervansaray.png"
          class="client-thumbnail"
        />
        <NuxtImg src="/musteriler/sonmezet.webp" class="client-thumbnail" />
        <NuxtImg src="/musteriler/zazanin-yeri.png" class="client-thumbnail" />
        <NuxtImg src="/musteriler/manticizade.png" class="client-thumbnail" />
        <NuxtImg src="/musteriler/mahsunusta.png" class="client-thumbnail" />
        <NuxtImg src="/musteriler/sonmezet.webp" class="client-thumbnail" />
        <NuxtImg
          style="scale: 1.4"
          src="/musteriler/ongroup.jpg"
          class="client-thumbnail"
        />
        <NuxtImg src="/musteriler/kervansaray.png" class="client-thumbnail" />
      </div>
    </div>
  </div>
</template>

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

<script>
export default {
  mounted() {
    this.startScrolling();
  },
  methods: {
    startScrolling() {
      const scrollArea = document.querySelector(".clients-scroll");
      const scrollSpeed = 1.3; // Kaydırma hızı
      const reverseScrollSpeed = 20; // Ters yön kaydırma hızı
      let scrollPos = 0;
      let direction = "forward";

      const scroll = () => {
        if (direction === "forward") {
          scrollPos -= scrollSpeed;
          if (Math.abs(scrollPos) >= scrollArea.scrollWidth / 2) {
            direction = "reverse";
          }
        } else if (direction === "reverse") {
          scrollPos += reverseScrollSpeed;
          if (scrollPos >= 0) {
            direction = "forward";
            scrollPos = 0; // Sonsuz döngü için sıfırla
          }
        }
        scrollArea.style.transition = "transform 0.1s linear";
        scrollArea.style.transform = `translateX(${scrollPos}px)`;
        requestAnimationFrame(scroll);
      };

      scrollArea.innerHTML += scrollArea.innerHTML; // Sonsuz döngü için içerikleri iki katına çıkar
      requestAnimationFrame(scroll);
    },
  },
};
</script>
