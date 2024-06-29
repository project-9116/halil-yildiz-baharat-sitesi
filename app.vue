<template>
  <div id="site">
    <TheNavbar />

    <NuxtPage class="scrollbar" id="page-content" />
    <TheFooter />
  </div>
</template>

<!-- <script setup>
import { ref, onMounted } from "vue";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lmhnvhaprafszwpvstge.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtaG52aGFwcmFmc3p3cHZzdGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NjAwNzgsImV4cCI6MjAzNTIzNjA3OH0.7ZgJqoJlJbl86WV4SoyZnJT_CuC_I57aTkybv-qQ2e0";

const supabase = createClient(supabaseUrl, supabaseKey);
const photos = ref([]);

onMounted(async () => {
  const { data, error } = await supabase.storage
    .from("fotograflar")
    .list("tumu", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error("Error fetching photos:", error);
  } else {
    const photoList = data.map((item) => ({
      name: item.name,
      url: supabase.storage
        .from("fotograflar")
        .getPublicUrl(`tumu/${item.name}`).data.publicUrl,
    }));
    photos.value = photoList;
    console.log("photos.value: ", photos.value);
  }
});
</script> -->

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
