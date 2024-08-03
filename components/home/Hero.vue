<template>
  <div class="hero">
    <div class="video-container">
      <video autoplay loop muted playsinline class="hero-video">
        <source src="https://d3n88fskc9kmpv.cloudfront.net/mobile-video.mp4" type="video/mp4">
        Tarayıcınız bu videoyu oynatmayı desteklemiyor.
      </video>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: calc(100% + 48px);
}

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
