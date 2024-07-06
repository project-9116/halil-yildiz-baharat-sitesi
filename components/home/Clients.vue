<template>
  <div>
    <div class="clients-showcase">
      <NuxtImg
        src="/musteriler/efsanekadroyemekcilik.jpg"
        class="client-thumbnail"
      />
      <NuxtImg src="/musteriler/mahsunusta.png" class="client-thumbnail" />
      <NuxtImg src="/musteriler/manticizade.png" class="client-thumbnail" />
      <NuxtImg src="/musteriler/ongroup.jpg" class="client-thumbnail" />
      <NuxtImg src="/musteriler/sonmezet.webp" class="client-thumbnail" />
      <NuxtImg src="/musteriler/manticizade.png" class="client-thumbnail" />
      <NuxtImg src="/musteriler/mahsunusta.png" class="client-thumbnail" />
      <NuxtImg src="/musteriler/sonmezet.webp" class="client-thumbnail" />
      <NuxtImg src="/musteriler/ongroup.jpg" class="client-thumbnail" />
    </div>
  </div>
</template>

<style>
.clients-showcase {
  background-color: #fff;
  margin: auto;
  display: flex;
  overflow-x: auto;
  gap: 45px;
  align-items: center;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.client-thumbnail {
  border-radius: 5px;
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 0 0 auto;
}

.client-thumbnail:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .clients-showcase {
    padding: 10px;
    gap: 20px;
    height: 150px;
  }

  .client-thumbnail {
    width: 150px; /* Küçük ekranlarda logoların genişliğini ayarlayın */
  }
}
</style>
