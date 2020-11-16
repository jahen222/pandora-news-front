<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      v-if="mediasWithoutVideos.length > 0"
    >
      <b-carousel-slide
        v-for="media in mediasWithoutVideos"
        v-bind:key="media.id"
      >
        <template #img>
          <img
            class="d-block img-fluid resize"
            :src="[api_url + media.url]"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <br />
    <div v-for="media in mediasWithVideos" v-bind:key="media.id">
      <Media
        :id="media.url"
        :kind="'video'"
        :controls="true"
        :src="[api_url + media.url]"
        :style="{ width: '100%' }"
      >
      </Media>
    </div>
  </div>
</template>

<script>
import Media from "@dongido/vue-viaudio";

export default {
  name: "Carousel",
  props: ["medias"],
  components: {
    Media
  },
  data() {
    return {
      api_url: process.env.API,
      videoFormats: [
        "avi",
        "wmv",
        "asf",
        "mov",
        "flv",
        "rm",
        "rmvb",
        "mp4",
        "mkv",
        "mks",
        "3gpp"
      ]
    };
  },
  methods: {
    isVideo: function(urlMedia) {
      const format = urlMedia.split(".")[1];
      return this.videoFormats.includes(format);
    }
  },
  computed: {
    mediasWithoutVideos: function() {
      var medias = [];
      for (let index = 0; index < this.medias.length; index++) {
        const urlMedia = this.medias[index].url;
        if (!this.isVideo(urlMedia)) {
          medias.push(this.medias[index]);
        }
      }
      return medias;
    },
    mediasWithVideos: function() {
      var medias = [];
      for (let index = 0; index < this.medias.length; index++) {
        const urlMedia = this.medias[index].url;
        if (this.isVideo(urlMedia)) {
          medias.push(this.medias[index]);
        }
      }
      return medias;
    }
  }
};
</script>

<style>
.carousel-control-prev-icon {
  top: 50% !important;
}
.carousel-control-next-icon {
  top: 50% !important;
}
.resize{
  width: 100%;
  height: 500px;
}
</style>
