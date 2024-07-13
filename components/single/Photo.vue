<template>
  <div class="product-image-container" style="margin-bottom: -35px">
    <Swiper
      v-if="photos.length > 0"
      :modules="[SwiperAutoplay, SwiperPagination]"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="photo in photos" :key="photo.url">
        <NuxtImg
          :src="photo.url"
          :alt="photo.name"
          format="webp"
          loading="lazy"
          quality="80"
        />
      </SwiperSlide>
    </Swiper>
    <TheLoading v-else />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useNuxtApp } from "#app";
import { getCachedImage, setCachedImage } from "~/composables/cache";

const { $supabase } = useNuxtApp();

const route = useRoute();
const photos = ref([]);
const loading = ref();

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

const fetchProductPhotos = async () => {
  const slug = route.params.slug;

  try {
    const { data, error } = await $supabase.storage
      .from("fotograflar")
      .list(`urunler/${slug}`, {
        limit: 100, // Fotoğraf sayısına göre limit ayarlayabilirsiniz
        sortBy: { column: "name", order: "asc" },
      });

    if (error) throw error;

    const urls = await Promise.all(
      data.map(async (file) => {
        const url = await getSignedUrl(`urunler/${slug}/${file.name}`);
        return { name: file.name, url };
      })
    );
    photos.value = urls.filter((url) => url.url !== null);
    console.log("photos.value ", photos.value);
  } catch (error) {
    console.error("Error listing images: ", error.message);
  }
};

onMounted(async () => {
  await fetchProductPhotos();
});
</script>

<style>
.product-image-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  text-align: center;
}
</style>
