<template>
  <footer>
    <div class="container flex">
      <div class="left-icon footer-item">
        <NuxtLink class="nav-item" to="/left">
          <Icon name="left" />
        </NuxtLink>  
      </div>

      <div class="menu footer-item">
        <NuxtLink class="nav-item" to="/menu">
          <Icon name="hamburger" />
        </NuxtLink>  
        

        <div style="display: none">
          <NuxtLink to="/degerlerimiz"> Degerlerimiz </NuxtLink>
          <NuxtLink to="/urunlerimiz"> iletisim </NuxtLink>
          <NuxtLink to="/"> Tüm hakları saklıdır.</NuxtLink>
        </div>
      </div>

      <div class="right-icon footer-item">
        <NuxtLink class="nav-item" to="/right">
          <Icon name="right" />
        </NuxtLink>        
      </div>
    </div>
  </footer>
</template>
