<template>
  <div class="block-style-1 v2" v-if="editorsPicks.length > 0">
    <!-- Block Title 1 -->
    <div class="block-title-1">
      <h3>{{ $t("editorsPicks") }}</h3>
    </div>
    <!-- /.Block Title 1 -->
    <!-- Block Content -->
    <div
      class="block-content"
      v-for="article in editorsPicks"
      v-bind:key="article.id"
    >
      <div class="block-content_header">
        <img
          src="../../assets/images/profile_12.jpg"
          alt="Zola"
          style="display: none"
        />
        <p>{{ $t("by") }}: {{ article.admin_user.username }}</p>
      </div>
      <div class="block-content_thumbnail">
        <router-link
          :to="{
            name: 'article',
            params: { id: article.id }
          }"
        >
          <Media
            :id="article.media[0].url"
            :kind="'video'"
            :controls="true"
            :src="[api_url + article.media[0].url]"
            :style="{ width: '100%' }"
            v-if="isVideo(article.media[0].url)"
          >
          </Media>
          <img
            class="resize"
            :src="api_url + article.media[0].url"
            alt="Zola"
            v-else
          />
        </router-link>
      </div>
      <div class="block-content_text">
        <router-link
          :to="{
            name: 'article',
            params: { id: article.id }
          }"
        >
          <h4>{{ article.title }}</h4>
        </router-link>
        <p>
          {{ article.content.slice(0, 64) }}
          <router-link
            :to="{
              name: 'article',
              params: { id: article.id }
            }"
            >{{ $t("readMore") }}</router-link
          >
        </p>
      </div>
    </div>
    <!-- /.Block Content -->
  </div>
  <div class="block-style-1 v2" v-else>
    <!-- Block Title 1 -->
    <div class="block-title-1">
      <h3>{{ $t("editorsPicks") }}</h3>
    </div>
    <!-- /.Block Title 1 -->
    <!-- Block Content -->
    <div class="block-content">
      <div class="block-content_text">
        <h4>{{ $t("noArticles") }}</h4>
      </div>
    </div>
    <!-- /.Block Content -->
  </div>
</template>

<script>
import Media from "@dongido/vue-viaudio";

export default {
  name: "EditorPicks",
  props: ["editorsPicks"],
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
  }
};
</script>

<style scoped>
.resize {
  width: 100%;
  height: 150px;
}
</style>
