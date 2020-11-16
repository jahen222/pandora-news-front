<template>
  <div v-if="articlesPinned.length > 0">
    <!-- Block Title 2 -->
    <div class="block-title-2">
      <h3>{{ $t("pinned") }}</h3>
    </div>
    <!-- /.Block Title 2 -->
    <div
      class="block-style-2"
      v-for="article in articlesPinned"
      v-bind:key="article.id"
    >
      <!-- Contents -->
      <div class="contents">
        <!-- Thumbnail -->
        <div class="thumbnail-1" v-if="isVideo(article.media[0].url)">
          <span class="bg-orange">{{
            article.article_subcategory.article_category.name
          }}</span>
          <Media
            :id="article.media[0].url"
            :kind="'video'"
            :controls="true"
            :src="[api_url + article.media[0].url]"
            :style="{ width: '100%' }"
          >
          </Media>
          <div class="overlay overlay-video">
            <div class="overlay-content overlay-content-video">
              <div class="list-users-02">
                <ul class="images" style="display: none;">
                  <li>
                    <img src="../../assets/images/list_user1.jpg" alt="Zola" />
                  </li>
                  <li>
                    <img src="../../assets/images/list_user2.jpg" alt="Zola" />
                  </li>
                </ul>
                <p>
                  {{ $t("by") }}:
                  <span>{{ article.admin_user.username }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="thumbnail-1" v-else>
          <span class="bg-orange">{{
            article.article_subcategory.article_category.name
          }}</span>
          <router-link
            :to="{
              name: 'article',
              params: { id: article.id }
            }"
          >
            <img
              class="resize"
              :src="api_url + article.media[0].url"
              alt="Zola"
            />
            <div class="overlay">
              <div class="overlay-content">
                <div class="list-users-02">
                  <ul class="images" style="display: none;">
                    <li>
                      <img
                        src="../../assets/images/list_user1.jpg"
                        alt="Zola"
                      />
                    </li>
                    <li>
                      <img
                        src="../../assets/images/list_user2.jpg"
                        alt="Zola"
                      />
                    </li>
                  </ul>
                  <p>
                    {{ $t("by") }}:
                    <span>{{ article.admin_user.username }}</span>
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- /.Thumbnail -->
        <!-- Content Wrapper -->
        <div class="content-wrapper">
          <!-- Date -->
          <div class="date">
            <h5>{{ getFormatDate(article.created_at) }}</h5>
          </div>
          <!-- /.Date -->
          <!-- Title -->
          <div class="title">
            <router-link
              :to="{
                name: 'article',
                params: { id: article.id }
              }"
            >
              <h2>
                {{ article.title }}
              </h2>
            </router-link>
          </div>
          <!-- /.Title -->
          <!-- Description -->
          <div class="desc">
            <p>
              {{ article.content.slice(0, 128) }}...
              <router-link
                class="readMore"
                :to="{
                  name: 'article',
                  params: { id: article.id }
                }"
              >
                {{ $t("readMore") }}
              </router-link>
            </p>
          </div>
          <!-- /.Description -->
        </div>
      </div>
      <!-- /.Contents -->
    </div>
  </div>
  <div v-else>
    <div class="block-style-2">
      <!-- Block Title 2 -->
      <div class="block-title-2">
        <h3>{{ $t("pinned") }}</h3>
      </div>
      <!-- /.Block Title 2 -->
      <!-- Contents -->
      <div class="contents">
        <!-- Content Wrapper -->
        <div class="content-wrapper">
          <!-- Title -->
          <div class="title">
            <h2>
              {{ $t("noArticles") }}
            </h2>
          </div>
          <!-- /.Title -->
        </div>
      </div>
      <!-- /.Contents -->
    </div>
  </div>
</template>

<script>
// import Media from "@dongido/vue-viaudio";

export default {
  name: "Pinned",
  props: ["articlesPinned"],
  components: {
    // Media
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
    getFormatDate: function(datetime) {
      var dateTime = new Date(datetime);
      const formattedDate =
        dateTime.getUTCMonth() +
        "/" +
        dateTime.getUTCDate() +
        "/" +
        dateTime.getUTCFullYear() +
        " " +
        dateTime.getHours() +
        ":" +
        dateTime.getMinutes();

      return formattedDate;
    },
    isVideo: function(urlMedia) {
      const format = urlMedia.split(".")[1];
      return this.videoFormats.includes(format);
    }
  }
};
</script>

<style scoped>
.overlay-video {
  position: relative !important;
}
.overlay-content-video {
  bottom: 70px !important;
  left: 20px !important;
}
.resize {
  width: 100%;
  height: 267px;
}
.readMore:hover {
  color: #f96d00;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
</style>
