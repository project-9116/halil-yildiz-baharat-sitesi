<template>
  <footer>
    <div class="flex container">
      <div class="left-icon footer-item">
        <div class="nav-item" @click="navigateBack()">
          <Icon name="left" />
          <span>{{ previousRouteLabel || 'ana sayfa' }}</span>
        </div>
      </div>

      <div class="menu footer-item">
        <NuxtLink class="nav-item" to="/urunler">
          <Icon name="salt" />
          <span>urunler</span>

        </NuxtLink>

        <div style="display: none">
          <NuxtLink to="/degerlerimiz"> Degerlerimiz </NuxtLink>
          <NuxtLink to="/urunler"> İletişim </NuxtLink>
          <NuxtLink to="/"> Tüm hakları saklıdır.</NuxtLink>
        </div>
      </div>

      <div class="right-icon footer-item">
        <div class="nav-item" @click="navigateForward()">
          <Icon name="right" />
          <span>{{ nextRouteLabel || 'ana sayfa' }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const routerIndex = ref(2);
const nextRoute = ref('');
const catalog = ref([]);
const slugs = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('/data/products.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    catalog.value = products;
    slugs.value = catalog.value.map((product) => product.slug);
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
});

const routesArr = ref(['urunler', '', 'hakkimizda', 'iletisim']);


const navigateBack = async () => {
  let currentPath = router.currentRoute.value.fullPath.replace('/', '');

  if (routesArr.value.includes(currentPath) || currentPath == 'menu') {
    routerIndex.value = routesArr.value.indexOf(currentPath);

    if (routerIndex.value == 0) {
      routerIndex.value = routesArr.value.length - 1;
    } else {
      routerIndex.value -= 1;
    }
    nextRoute.value = routesArr.value[routerIndex.value];
  } else {
    routerIndex.value = slugs.value.indexOf(currentPath);

    if (routerIndex.value == 0) {
      routerIndex.value = slugs.value.length - 1;
    } else {
      routerIndex.value -= 1;
    }
    nextRoute.value = slugs.value[routerIndex.value];
  }

  await router.push('/' + nextRoute.value);
};

const navigateForward = async () => {
  let currentPath = router.currentRoute.value.fullPath.replace('/', '');

  if (routesArr.value.includes(currentPath) || currentPath == 'menu') {
    routerIndex.value = routesArr.value.indexOf(currentPath);

    if (routerIndex.value == routesArr.value.length - 1) {
      routerIndex.value = 0;
    } else {
      routerIndex.value += 1;
    }
    nextRoute.value = routesArr.value[routerIndex.value];
  } else {
    routerIndex.value = slugs.value.indexOf(currentPath);

    if (routerIndex.value == slugs.value.length - 1) {
      routerIndex.value = 0;
    } else {
      routerIndex.value += 1;
    }
    nextRoute.value = slugs.value[routerIndex.value];
  }

  await router.push('/' + nextRoute.value);
};

const previousRouteLabel = computed(() => {
  let currentPath = router.currentRoute.value.fullPath.replace('/', '');
  let index;

  if (routesArr.value.includes(currentPath)) {
    index = routesArr.value.indexOf(currentPath);
    return routesArr.value[index === 0 ? routesArr.value.length - 1 : index - 1];
  } else {
    index = slugs.value.indexOf(currentPath);
    return slugs.value[index === 0 ? slugs.value.length - 1 : index - 1];
  }
});

const nextRouteLabel = computed(() => {
  let currentPath = router.currentRoute.value.fullPath.replace('/', '');
  let index;

  if (routesArr.value.includes(currentPath)) {
    index = routesArr.value.indexOf(currentPath);
    return routesArr.value[index === routesArr.value.length - 1 ? 0 : index + 1];
  } else {
    index = slugs.value.indexOf(currentPath);
    return slugs.value[index === slugs.value.length - 1 ? 0 : index + 1];
  }
});
</script>
