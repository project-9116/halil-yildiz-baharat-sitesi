<template>
  <header>
    <nav>
      <div class="container">
        <div class="nav">

          <div class="nav-item md-hide" @click="menuNavigate()">
            <Icon name="hamburger" />
          </div>
          
          <div class="logo">
            <NuxtLink @click="navigating()" :to="nextRoute">
              <NuxtImg id="logo" src="/site/halil-yildiz-baharat-logosu.png" />
            </NuxtLink>
          </div>
          <div class="nav-item md-show">
            <NuxtLink class="nav-item" to="/urunler">
              <Icon name="phone" /> <span>Ürünler</span>
            </NuxtLink>
          </div>
          <div class="nav-item md-show">
            <NuxtLink class="nav-item" to="/hakkimizda">
              <Icon name="phone" /> <span>Hakkımızda</span>
            </NuxtLink>
          </div>
          <div class="nav-item">
            <NuxtLink class="nav-item" to="/iletisim">
              <Icon name="phone" /> <span>İletişim</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const nextRoute = ref("/");
const router = useRouter();

function menuNavigate() {
  if (router.currentRoute.value.fullPath == "/menu") {
    router.push("/");
  } else {
    router.push("/menu");
  }
}

function navigating() {
  console.log("Simdiki uzanti: ", router.currentRoute.value.fullPath);
  if (router.currentRoute.value.fullPath === "/") {
    nextRoute.value = "hakkimizda";
  } else {
    nextRoute.value = "/";
  }

  router.push(nextRoute.value);
}
</script>

<style></style>
