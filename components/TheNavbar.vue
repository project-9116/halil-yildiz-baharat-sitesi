<template>
  <header>
    <div class="container">
      <nav>
        <div>
          <NuxtLink class="nav-item" to="/urunlerimiz">
            <Icon name="salt" />
          </NuxtLink>
        </div>
        <div class="logo">
          <!-- TODO: anasayfadayken hakkimzda bolumune, degilken anasayfaya yonlendirecek -->
          <NuxtLink :to="nextRoute">
            <NuxtImg id="logo" src="/site/halil-yildiz-baharat-logosu.png" />
          </NuxtLink>
        </div>
        <div>
          <NuxtLink class="nav-item" to="/iletisim">
            <Icon name="phone" />
          </NuxtLink>
        </div>
        <!-- <NuxtLink to="/degerlerimiz"> Degerlerimiz </NuxtLink> -->

        <!-- <div class="flex v-center t-center">
        <NuxtLink to="/hakkimizda"> Halil Yildiz Baharat </NuxtLink>
      </div> -->

      </nav>
    </div>
  </header>

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
