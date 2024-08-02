<template>
  <div class="hero">
    <div class="video-container">
      <video autoplay loop muted playsinline class="hero-video">
        <source src="https://d3ffi9q6w5a2fe.cloudfront.net/A%C5%9F%C4%B1n%C4%B1zda%20baharat%C4%B1m%C4%B1z%20olsun.mp4"
          type="video/mp4">
        Tarayıcınız bu videoyu oynatmayı desteklemiyor.
      </video>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 150%;
  /* Yüksekliği arttırarak videonun boyunu ayarlıyoruz */
  box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
  overflow: hidden;
  will-change: transform;
}

.hero-video {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}
</style>
