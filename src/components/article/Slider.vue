<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Slides with custom text
      <b-carousel-slide
        :img-src="api_url + media.url"
        v-for="media in medias"
        v-bind:key="media.id"
      >
      </b-carousel-slide>-->
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["medias"],
  data() {
    return {
      api_url: process.env.API,
    };
  },
}
</script>
