<template>
  <footer>
    <div class="flex container">
      <div class="left-icon footer-item">
        <div class="nav-item" @click="navigateBack()">
          <Icon name="left" />
        </div>
      </div>

      <div class="menu footer-item">
        <NuxtLink class="nav-item" to="/urunler">
          <Icon name="salt" />
        </NuxtLink>

        <div style="display: none">
          <NuxtLink to="/degerlerimiz"> Degerlerimiz </NuxtLink>
          <NuxtLink to="/urunler"> iletisim </NuxtLink>
          <NuxtLink to="/"> Tüm hakları saklıdır.</NuxtLink>
        </div>
      </div>

      <div class="right-icon footer-item">
        <div class="nav-item" @click="navigateForward()">
          <Icon name="right" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const routerIndex = ref(2);
const nextRoute = ref("");
const currentRoute = ref("");
const catalog = ref([]);
const slugs = ref([]);

onMounted(async () => {

  try {
    const response = await fetch("/data/products.json");
    // console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    catalog.value = products;
    // Her nesnenin slug bilgisini almak için map kullanıyoruz
    slugs.value = catalog.value.map((product) => product.slug);
    // console.log("Bunlar slugs:", slugs.value);
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
});

//TODO: herhangi bir sayfadayken sayfalar arasi, herhangi bir urundeyken urunler arasi gezinsin.
const routesArr = ref([
  "degerlerimiz",
  "urunler",
  "",
  "hakkimizda",
  "iletisim",
]);

async function navigateBack() {
  let currentPath = router.currentRoute.value.fullPath;
  currentPath = currentPath.replace("/", "");

  if (routesArr.value.includes(currentPath) || currentPath == "menu") {
    routerIndex.value = routesArr.value.indexOf(currentPath);

    if (routerIndex.value == 0) {
      routerIndex.value = 4;
      nextRoute.value = routesArr.value[routerIndex.value];
      await navigateTo("/" + nextRoute.value);
    } else {
      routerIndex.value -= 1;
      nextRoute.value = routesArr.value[routerIndex.value];
      await navigateTo("/" + nextRoute.value);
    }
  } else {
    routerIndex.value = slugs.value.indexOf(currentPath);

    if (routerIndex.value == 0) {
      routerIndex.value = 20;
      nextRoute.value = slugs.value[routerIndex.value];
      await navigateTo("/" + nextRoute.value);
    } else {
      routerIndex.value -= 1;
      nextRoute.value = slugs.value[routerIndex.value];
      await navigateTo("/" + nextRoute.value);
    }
  }
}

async function navigateForward() {
  let currentPath = router.currentRoute.value.fullPath;
  currentPath = currentPath.replace("/", "");

  if (routesArr.value.includes(currentPath) || currentPath == "menu") {
    routerIndex.value = routesArr.value.indexOf(currentPath);

    if (routerIndex.value == 4) {
      routerIndex.value = 0;
      nextRoute.value = routesArr.value[routerIndex.value];
      await navigateTo("/" + nextRoute.value);
    } else {
      routerIndex.value += 1;
      nextRoute.value = routesArr.value[routerIndex.value];
      await navigateTo("/" + nextRoute.value);
    }
  } else {
    routerIndex.value = slugs.value.indexOf(currentPath);

    if (routerIndex.value == 20) {
      routerIndex.value = 0;
      nextRoute.value = slugs.value[routerIndex.value];
      await navigateTo("/" + nextRoute.value);
    } else {
      routerIndex.value += 1;
      nextRoute.value = slugs.value[routerIndex.value];
      await navigateTo("/" + nextRoute.value);
    }
  }
}

</script>
