<template>
  <div id="site">
    <TheNavbar />

    <NuxtPage class="scrollbar" id="page-content" />
    <TheFooter />
  </div>
</template>
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
