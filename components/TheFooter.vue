<template>
  <footer>
    <div class="container flex">
      <div class="left-icon footer-item">
        <Icon name="left" />
      </div>

      <div class="menu footer-item">
        <Icon name="hamburger" />

        <div style="display: none">
          <NuxtLink to="/degerlerimiz"> Degerlerimiz </NuxtLink>
          <NuxtLink to="/urunlerimiz"> iletisim </NuxtLink>
          <NuxtLink to="/"> Tüm hakları saklıdır.</NuxtLink>
        </div>
      </div>

      <div class="right-icon footer-item"><Icon name="right" /></div>
    </div>
  </footer>
</template>

<style></style>

<script setup></script>
