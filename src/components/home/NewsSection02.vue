<template>
  <div class="block-style-8" v-if="subcategoryWithArticle != null">
    <!-- Block Title 2 -->
    <div class="block-title-2">
      <h3>{{ subcategoryWithArticle.article_category.name }}</h3>
    </div>
    <!-- /.Block Title 2 -->
    <!-- Contents -->
    <div class="contents">
      <!-- Thumbnail -->
      <div
        class="thumbnail-1"
        v-if="isVideo(subcategoryWithArticle.articles[0].media[0].url)"
      >
        <span class="bg-orange">{{ subcategoryWithArticle.name }}</span>
        <Media
          :id="subcategoryWithArticle.articles[0].media[0].url"
          :kind="'video'"
          :controls="true"
          :src="[api_url + subcategoryWithArticle.articles[0].media[0].url]"
          :style="{ width: '100%' }"
        >
        </Media>
        <div class="overlay overlay-video">
          <div class="overlay-content overlay-content-video">
            <div class="list-users-02">
              <ul class="images" style="display: none">
                <li>
                  <img src="../../assets/images/profile_11.jpg" alt="Zola" />
                </li>
              </ul>
              <p>
                {{ $t("by") }}:
                <span>{{
                  subcategoryWithArticle.articles[0].admin_user.username
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="thumbnail-1" v-else>
        <span class="bg-orange">{{ subcategoryWithArticle.name }}</span>
        <router-link
          :to="{
            name: 'article',
            params: { id: subcategoryWithArticle.articles[0].id }
          }"
        >
          <img
            class="resize"
            :src="api_url + subcategoryWithArticle.articles[0].media[0].url"
            alt="Zola"
          />
          <div class="overlay">
            <div class="overlay-content">
              <div class="list-users-02">
                <ul class="images" style="display: none">
                  <li>
                    <img src="../../assets/images/profile_11.jpg" alt="Zola" />
                  </li>
                </ul>
                <p>
                  {{ $t("by") }}:
                  <span>{{
                    subcategoryWithArticle.articles[0].admin_user.username
                  }}</span>
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
          <h5>
            {{ getFormatDate(subcategoryWithArticle.articles[0].created_at) }}
          </h5>
        </div>
        <!-- /.Date -->
        <!-- Title -->
        <div class="title">
          <router-link
            :to="{
              name: 'article',
              params: { id: subcategoryWithArticle.articles[0].id }
            }"
          >
            <h2>{{ subcategoryWithArticle.articles[0].title }}</h2>
          </router-link>
        </div>
        <!-- /.Title -->
        <!-- Description -->
        <div class="desc">
          <p>
            {{ subcategoryWithArticle.articles[0].content.slice(0, 128) }}...
            <router-link
              class="readMore"
              :to="{
                name: 'article',
                params: { id: subcategoryWithArticle.articles[0].id }
              }"
              >{{ $t("readMore") }}</router-link
            >
          </p>
        </div>
        <!-- /.Description -->
      </div>
      <!-- Content Wrapper -->
      <!-- Small List Posts -->
      <div class="small-list-posts" style="display: none">
        <!-- Item -->
        <div class="item">
          <a href="#">
            <div class="thumbnail-img">
              <img src="../../assets/images/thumbnail_09.jpg" alt="Zola" />
            </div>
            <div class="content">
              <h3>Welcome to Akroot is a Spe- cialized Design Agency.</h3>
              <span>5 MIN READ</span>
            </div>
          </a>
        </div>
        <!-- Item -->
        <!-- Item -->
        <div class="item">
          <a href="#">
            <div class="thumbnail-img">
              <img src="../../assets/images/thumbnail_10.jpg" alt="Zola" />
            </div>
            <div class="content">
              <h3>Welcome to Akroot is a Spe- cialized Design Agency.</h3>
              <span>5 MIN READ</span>
            </div>
          </a>
        </div>
        <!-- Item -->
        <!-- Item -->
        <div class="item">
          <a href="#">
            <div class="thumbnail-img">
              <img src="../../assets/images/thumbnail_11.jpg" alt="Zola" />
            </div>
            <div class="content">
              <h3>Welcome to Akroot is a Spe- cialized Design Agency.</h3>
              <span>5 MIN READ</span>
            </div>
          </a>
        </div>
        <!-- Item -->
      </div>
      <!-- /.Small List Posts -->
    </div>
    <!-- /.Contents -->
  </div>
  <div class="block-style-8" v-else>
    <!-- Contents -->
    <div class="contents">
      <!-- Thumbnail -->
      <!-- Content Wrapper -->
      <div class="content-wrapper">
        <!-- Title -->
        <div class="title">
          <h2>{{ $t("noArticles") }}</h2>
        </div>
        <!-- /.Title -->
      </div>
      <!-- Content Wrapper -->
    </div>
    <!-- /.Contents -->
  </div>
</template>

<script>
import Media from "@dongido/vue-viaudio";

export default {
  name: "NewsSection02",
  props: ["subcategoryWithArticle"],
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
  height: 200px;
}
.readMore:hover {
  color: #f96d00;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
</style>
