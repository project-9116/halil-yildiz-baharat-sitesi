<template>
  <div class="home-products">
    <h2>Birkaç ürünümüz</h2>
    <div class="card-x">
      <div class="left">
        <div class="box"></div>
      </div>
      <div class="right">
        <div class="box">
          <div class="box-img">
            <NuxtLink to="/">
              <NuxtImg src="/yeniler/corek-otu.png" alt="..." />
            </NuxtLink>
          </div>
          <div class="box-detail">
            <h1>Baslik1</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="card-x">
      <div class="left">
        <div class="box"></div>
      </div>
      <div class="right">
        <div class="box">
          <div class="box-img">
            <NuxtLink to="/">
              <NuxtImg src="/yeniler/kofte-harci.png" alt="..." />
            </NuxtLink>
          </div>
          <div class="box-detail">
            <h1>Baslik2</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="card-x">
      <div class="left">
        <div class="box"></div>
      </div>
      <div class="right">
        <div class="box">
          <div class="box-img">
            <NuxtLink to="/">
              <NuxtImg src="/yeniler/pulbiber.png" alt="..." />
            </NuxtLink>
          </div>
          <div class="box-detail">
            <h1>Baslik</h1>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink class="button primary-button" to="/urunler"
      >Diğer ürünler</NuxtLink
    >
  </div>
</template>
