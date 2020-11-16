<template>
  <div id="section-slider" class="slider01" v-if="lastArticle != null">
    <!-- Slider Content -->
    <div class="slider-content">
      <div class="container">
        <div class="row">
          <!-- Left -->
          <div class="left">
            <h4>
              {{ lastArticle.article_subcategory.article_category.name }}
            </h4>
            <router-link
              :to="{
                name: 'article',
                params: { id: lastArticle.id }
              }"
            >
              <h1>
                {{ lastArticle.title }}
              </h1>
            </router-link>
            <div class="list-users-01" style="display: none">
              <ul class="images">
                <li>
                  <img src="../../assets/images/list_user1.jpg" alt="Zola" />
                </li>
                <li>
                  <img src="../../assets/images/list_user2.jpg" alt="Zola" />
                </li>
                <li>
                  <img src="../../assets/images/list_user3.jpg" alt="Zola" />
                </li>
                <li>
                  <img src="../../assets/images/list_user4.jpg" alt="Zola" />
                </li>
                <li>
                  <img src="../../assets/images/list_user5.jpg" alt="Zola" />
                </li>
              </ul>
              <p><span>Dany, Fredd</span> and 23 more liked this</p>
              <div class="comment-share">
                <div class="comment">
                  <svg
                    enable-background="new 0 0 488 488"
                    version="1.1"
                    viewBox="0 0 488 488"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m415.7 90.4c-46-40.3-106.9-62.5-171.7-62.5s-125.7 22.2-171.7 62.5c-46.6 40.9-72.3 95.4-72.3 153.6 0 45.9 16.7 90.9 47.2 127.8-6 11.7-14.2 21-24.6 27.8-8.6 5.6-12.7 15.7-10.4 25.7 2.2 9.9 10.2 17.1 20.2 18.5 20.6 2.9 60.8 4.3 98.1-18 8.5-5.1 11.3-16.2 6.2-24.7s-16.2-11.3-24.7-6.2c-15.6 9.3-32.1 13.1-46.4 14.2 8.2-9.8 14.7-21.3 19.5-34.3 2.4-6.4 0.9-13.5-3.6-18.5-29.8-32.2-45.5-71.1-45.5-112.3 0-99.3 93.3-180.1 208-180.1s208 80.8 208 180.1-93.3 180.1-208 180.1c-16.6 0-33.2-1.7-49.2-5.1-9.7-2.1-19.3 4.2-21.3 13.9-2.1 9.7 4.2 19.3 13.9 21.3 18.5 3.9 37.5 5.9 56.7 5.9 64.7 0 125.7-22.2 171.7-62.5 46.5-40.9 72.2-95.4 72.2-153.6s-25.7-112.7-72.3-153.6z"
                    />
                    <circle cx="243.9" cy="244" r="23.6" />
                    <circle cx="317.5" cy="244" r="23.6" />
                    <circle cx="170.3" cy="244" r="23.6" />
                  </svg>
                  532
                </div>
                <div class="share">
                  <svg
                    enable-background="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m426 340c-26.583 0-50.387 12.124-66.174 31.131l-66.919-33.283c-9.889-4.916-21.895-0.89-26.813 9.001-4.919 9.89-0.889 21.895 9.001 26.813l67.022 33.333c-1.386 6.117-2.117 12.477-2.117 19.005 0 47.421 38.58 86 86 86s86-38.579 86-86-38.58-86-86-86zm0 132c-25.364 0-46-20.636-46-46 0-6.29 1.269-12.288 3.565-17.754 0.491-0.728 0.941-1.496 1.343-2.304 0.427-0.858 0.786-1.733 1.081-2.618 7.917-13.917 22.886-23.324 40.011-23.324 25.364 0 46 20.636 46 46s-20.636 46-46 46z"
                    />
                    <path
                      d="m426 0c-47.42 0-86 38.579-86 86 0 6.627 0.754 13.081 2.179 19.281l-190.34 95.45c-15.788-18.777-39.444-30.731-65.84-30.731-47.42 0-86 38.579-86 86s38.58 86 86 86c26.282 0 49.848-11.851 65.635-30.488l32.293 16.435c2.906 1.479 6.003 2.18 9.055 2.18 7.286 0 14.31-3.995 17.841-10.933 5.01-9.845 1.092-21.886-8.753-26.896l-32.377-16.477c1.508-6.365 2.306-13.002 2.306-19.821 0-6.709-0.772-13.241-2.233-19.511l190.24-95.401c15.788 18.882 39.512 30.912 65.992 30.912 47.42 0 86-38.579 86-86s-38.58-86-86-86zm-340 302c-25.364 0-46-20.636-46-46s20.636-46 46-46 46 20.636 46 46-20.636 46-46 46zm340-170c-25.364 0-46-20.636-46-46s20.636-46 46-46 46 20.636 46 46-20.636 46-46 46z"
                    />
                  </svg>
                  103
                </div>
              </div>
            </div>
          </div>
          <!-- /.Left -->
          <!-- Right -->
          <div class="right" style="display: none">
            <!-- Item -->
            <div class="item">
              <div class="header">
                <span class="progress"></span>
                <svg
                  enable-background="new 0 0 490.442 490.442"
                  version="1.1"
                  viewBox="0 0 490.44 490.44"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m270.42 245.34 42-42c7.3-7.1 7.3-18.5 0.2-25.5-7-7-18.4-7-25.5 0l-42 42-42-42c-7-7-18.4-7-25.5 0-7 7-7 18.4 0 25.5l42 42-42 42c-7 7-7 18.4 0 25.5 3.5 3.5 8.1 5.3 12.7 5.3s9.2-1.8 12.7-5.3l42-42 42 42c3.5 3.5 8.1 5.3 12.7 5.3s9.2-1.8 12.7-5.3c7-7 7-18.4 0-25.5l-42-42z"
                  />
                  <path
                    d="m418.62 71.842c-7-7-18.4-7-25.4 0l-56 55.9c-7 7-7 18.4 0 25.5 7 7 18.4 7 25.5 0l42.7-42.7c69.2 82.1 65.1 205.3-12.2 282.6-39.5 39.5-92.1 61.3-148 61.3s-108.4-21.7-148-61.2c-81.6-81.6-81.6-214.3 0-295.9 50.1-50.1 121.6-71.4 191.1-56.8 9.7 2 19.3-4.2 21.3-13.9s-4.2-19.3-13.9-21.3c-81.4-17.2-165.1 7.7-223.9 66.5-46.3 46.3-71.8 107.9-71.8 173.4s25.5 127.1 71.8 173.4 107.9 71.8 173.4 71.8 127.1-25.5 173.4-71.8 71.8-107.9 71.8-173.4-25.5-127.1-71.8-173.4z"
                  />
                </svg>
              </div>
              <div class="content">
                <p>A dawn with growth in the global economy</p>
                <span>5 MIN READ</span>
              </div>
            </div>
            <!-- /.Item -->
            <!-- Item -->
            <div class="item">
              <div class="header">
                <span class="progress"></span>
                <svg
                  enable-background="new 0 0 490.442 490.442"
                  version="1.1"
                  viewBox="0 0 490.44 490.44"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m270.42 245.34 42-42c7.3-7.1 7.3-18.5 0.2-25.5-7-7-18.4-7-25.5 0l-42 42-42-42c-7-7-18.4-7-25.5 0-7 7-7 18.4 0 25.5l42 42-42 42c-7 7-7 18.4 0 25.5 3.5 3.5 8.1 5.3 12.7 5.3s9.2-1.8 12.7-5.3l42-42 42 42c3.5 3.5 8.1 5.3 12.7 5.3s9.2-1.8 12.7-5.3c7-7 7-18.4 0-25.5l-42-42z"
                  />
                  <path
                    d="m418.62 71.842c-7-7-18.4-7-25.4 0l-56 55.9c-7 7-7 18.4 0 25.5 7 7 18.4 7 25.5 0l42.7-42.7c69.2 82.1 65.1 205.3-12.2 282.6-39.5 39.5-92.1 61.3-148 61.3s-108.4-21.7-148-61.2c-81.6-81.6-81.6-214.3 0-295.9 50.1-50.1 121.6-71.4 191.1-56.8 9.7 2 19.3-4.2 21.3-13.9s-4.2-19.3-13.9-21.3c-81.4-17.2-165.1 7.7-223.9 66.5-46.3 46.3-71.8 107.9-71.8 173.4s25.5 127.1 71.8 173.4 107.9 71.8 173.4 71.8 127.1-25.5 173.4-71.8 71.8-107.9 71.8-173.4-25.5-127.1-71.8-173.4z"
                  />
                </svg>
              </div>
              <div class="content">
                <p>A dawn with growth in the global economy</p>
                <span>5 MIN READ</span>
              </div>
            </div>
            <!-- /.Item -->
            <!-- Item -->
            <div class="item">
              <div class="header">
                <span class="progress"></span>
                <svg
                  enable-background="new 0 0 490.442 490.442"
                  version="1.1"
                  viewBox="0 0 490.44 490.44"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m270.42 245.34 42-42c7.3-7.1 7.3-18.5 0.2-25.5-7-7-18.4-7-25.5 0l-42 42-42-42c-7-7-18.4-7-25.5 0-7 7-7 18.4 0 25.5l42 42-42 42c-7 7-7 18.4 0 25.5 3.5 3.5 8.1 5.3 12.7 5.3s9.2-1.8 12.7-5.3l42-42 42 42c3.5 3.5 8.1 5.3 12.7 5.3s9.2-1.8 12.7-5.3c7-7 7-18.4 0-25.5l-42-42z"
                  />
                  <path
                    d="m418.62 71.842c-7-7-18.4-7-25.4 0l-56 55.9c-7 7-7 18.4 0 25.5 7 7 18.4 7 25.5 0l42.7-42.7c69.2 82.1 65.1 205.3-12.2 282.6-39.5 39.5-92.1 61.3-148 61.3s-108.4-21.7-148-61.2c-81.6-81.6-81.6-214.3 0-295.9 50.1-50.1 121.6-71.4 191.1-56.8 9.7 2 19.3-4.2 21.3-13.9s-4.2-19.3-13.9-21.3c-81.4-17.2-165.1 7.7-223.9 66.5-46.3 46.3-71.8 107.9-71.8 173.4s25.5 127.1 71.8 173.4 107.9 71.8 173.4 71.8 127.1-25.5 173.4-71.8 71.8-107.9 71.8-173.4-25.5-127.1-71.8-173.4z"
                  />
                </svg>
              </div>
              <div class="content">
                <p>A dawn with growth in the global economy</p>
                <span>5 MIN READ</span>
              </div>
            </div>
            <!-- /.Item -->
          </div>
          <!-- /.Right -->
        </div>
      </div>
    </div>
    <!-- /.Slider Content -->
    <!-- Slider Image -->
    <div class="slider-image" v-if="isVideo(lastArticle.media[0].url)">
      <img
        class="img-fluid"
        src="../../assets/images/slider_back.webp"
        alt="Zola"
      />
    </div>
    <div class="slider-image" v-else>
      <img
        class="img-fluid"
        :src="api_url + lastArticle.media[0].url"
        alt="Zola"
      />
    </div>
    <!-- /.Slider Image -->
  </div>

  <div id="section-slider" class="slider01" v-else>
    <!-- Slider Content -->
    <div class="slider-content">
      <div class="container">
        <div class="row">
          <!-- Left -->
          <div class="left">
            <h4>{{ $t("noArticles") }}</h4>
            <h1>
              {{ $t("noArticles") }}
            </h1>
          </div>
          <!-- /.Left -->
        </div>
      </div>
    </div>
    <!-- /.Slider Content -->
    <!-- Slider Image -->
    <div class="slider-image">
      <img
        class="img-fluid"
        src="../../assets/images/slider_back.webp"
        alt="Zola"
      />
    </div>
    <!-- /.Slider Image -->
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["lastArticle"],
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
.left {
  padding-left: 10% !important;
}
.slider01:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
#section-slider.slider01 {
  width: 100%;
}
</style>
