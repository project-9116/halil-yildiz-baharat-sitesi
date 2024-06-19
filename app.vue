<template>
  <div id="site">
    <TheNavbar />
    <NuxtPage class="scrollbar" id="page-content" />
    <TheFooter />
  </div>
</template>

<script setup>
import "~/assets/css/theme.css";
import { useRouter } from "vue-router";

const router = useRouter();

console.log(router.options);
</script>
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
