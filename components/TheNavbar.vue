<template>
  <nav>
    <div class="container">
      <div class="flex v-center">
        <NuxtLink class="nav-item" to="/urunlerimiz">
          <Icon name="salt" />
          Ürünler
        </NuxtLink>

        <!-- TODO: anasayfadayken hakkimzda bolumune, degilken anasayfaya yonlendirecek -->
        <NuxtLink :to="nextRoute">
          <NuxtImg id="logo" src="/site/logo.png" />
        </NuxtLink>

        <NuxtLink class="nav-item" to="/degerlerimiz">
          İletişim <Icon name="phone" />
        </NuxtLink>
        <!-- <NuxtLink to="/degerlerimiz"> Degerlerimiz </NuxtLink> -->
      </div>

      <!-- <div class="flex v-center t-center">
        <NuxtLink to="/hakkimizda"> Halil Yildiz Baharat </NuxtLink>
      </div> -->
    </div>
  </nav>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const nextRoute = ref("/");
const router = useRouter();

router.afterEach((to) => {
  if (to.fullPath === "/") {
    nextRoute.value = "hakkimizda";
  } else {
    nextRoute.value = "";
  }
});
</script>

<style></style>
