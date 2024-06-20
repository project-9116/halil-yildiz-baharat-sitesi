<template>
  <footer>
    <div class="container flex">
      <div class="left-icon footer-item">
        <NuxtLink
          class="nav-item"
          @click="navigateTo(-1)"
          :to="router.options.routes[routerIndex].path"
        >
          <Icon name="left" />
        </NuxtLink>
      </div>

      <div class="menu footer-item">
        <NuxtLink class="nav-item" to="/menu">
          <Icon name="hamburger" />
        </NuxtLink>

        <div style="display: none">
          <NuxtLink to="/degerlerimiz"> Degerlerimiz </NuxtLink>
          <NuxtLink to="/urunler"> iletisim </NuxtLink>
          <NuxtLink to="/"> Tüm hakları saklıdır.</NuxtLink>
        </div>
      </div>

      <div class="right-icon footer-item">
        <NuxtLink
          class="nav-item"
          @click="navigateTo(1)"
          :to="router.options.routes[routerIndex].path"
        >
          <Icon name="right" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const routerIndex = ref(3);
// console.log(router.options.routes);

function navigateTo(whereTo) {
  if (routerIndex.value <= 5) {
    routerIndex.value += whereTo;
  } else {
    routerIndex.value = 0;
  }
  // console.log(router.options.routes[routerIndex.value]);
}
</script>
