<template>
  <div class="home-products">
    <h2>Birkaç ürünümüz</h2>
    <div v-for="item in theProducts" :key="item.slug" class="card-x">
      <div class="left">
        <div class="box"></div>
      </div>
      <div class="right">
        <div class="box">
          <div class="box-img">
            <NuxtLink :to="`/${item.slug}`">
              <NuxtImg :src="item.url" loading="lazy" alt="..." />
            </NuxtLink>
          </div>
          <div class="box-detail">
            <h1>{{ item.title }}</h1>
          </div>
        </div>
      </div>
    </div>

    <NuxtLink class="button primary-button" to="/urunler"
      >Diğer ürünler</NuxtLink
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";

const { $supabase } = useNuxtApp();

const theProducts = ref([
  { title: "İsot", slug: "isot", url: "" },
  { title: "Karabiber", slug: "karabiber", url: "" },
  { title: "Kekik", slug: "kekik", url: "" },
  { title: "Kimyon", slug: "kimyon", url: "" },
  { title: "Nane", slug: "nane", url: "" },
  { title: "Pul Biber", slug: "pulbiber", url: "" },
  { title: "Toz Biber", slug: "isot", url: "" },
]);

const getSignedUrl = async (path) => {
  const { data, error } = await $supabase.storage
    .from("fotograflar")
    .createSignedUrl(path, 60 * 60); // URL geçerliliği 1 saat
  if (error) {
    console.error(`Error creating signed URL for ${path}: `, error.message);
    return null;
  }
  return data.signedUrl;
};

const listRandomImages = async () => {
  // Rastgele 3 ürün seç
  const randomProducts = theProducts.value
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // Seçilen ürünler için imzalı URL'leri oluştur
  await Promise.all(
    randomProducts.map(async (product) => {
      const url = await getSignedUrl(`oncelikliler/${product.slug}.png`);
      product.url = url ? url : "";
    })
  );

  // Diziyi seçilen ürünlerle güncelle
  theProducts.value = randomProducts.filter((product) => product.url !== "");
};

onMounted(async () => {
  try {
    await listRandomImages();
  } catch (error) {
    console.error("Error in onMounted: ", error.message);
  }
});
</script>
