<template>
  <div>
    <div v-if="catalog.length > 0" class="product-grid">
      <div class="card-x" v-for="product in photos" :key="product.name">
        <div class="left">
          <div class="box"></div>
        </div>
        <div class="right">
          <div class="box">
            <div class="box-img">
              <NuxtLink :to="`/${product.name}`">
                <NuxtImg
                  :src="product.url"
                  :alt="product.name"
                  loading="lazy"
                />
              </NuxtLink>
            </div>
            <div class="box-detail">
              <h1>{{ product.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";
import { getCachedImage, setCachedImage } from "~/composables/cache";
const { $supabase } = useNuxtApp();

const catalog = ref([]);
const photos = ref([]);

const getSignedUrl = async (path) => {
  const cachedUrl = getCachedImage(path);
  if (cachedUrl) {
    return cachedUrl;
  }

  try {
    const { data, error } = await $supabase.storage
      .from("fotograflar")
      .createSignedUrl(path, 60 * 60); // URL geçerliliği 1 saat
    if (error) throw error;

    setCachedImage(path, data.signedUrl);
    return data.signedUrl;
  } catch (error) {
    console.error("Error creating signed URL: ", error.message);
    return null;
  }
};

const listAllImages = async () => {
  try {
    // Create signed URLs for each image in parallel
    const urls = await Promise.all(
      catalog.value.map(async (product) => {
        const url = await getSignedUrl(`tumu/${product.slug}.png`);
        return { name: product.slug, url, title: product.title };
      })
    );
    photos.value = urls.filter((url) => url.url !== null);
    console.log("photos ", photos.value);
  } catch (error) {
    console.error("Error listing images: ", error.message);
  }
};

onMounted(async () => {
  try {
    const response = await fetch("/data/products.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    catalog.value = products;
    console.log("Bunlar ürünler:", catalog.value);
    await listAllImages();
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
});
</script>
