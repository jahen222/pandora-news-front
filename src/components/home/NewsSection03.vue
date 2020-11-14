<template>
  <div v-if="articles.length > 0">
    <div
      class="block-style-9"
      v-for="article in articles"
      v-bind:key="article.id"
    >
      <!-- Contents -->
      <div class="contents">
        <!-- Thumbnail -->
        <div class="thumbnail-1">
          <router-link
            :to="{
              name: 'article',
              params: { id: article.id },
            }"
          >
            <img :src="api_url + article.media[0].url" alt="Zola" />
            <div class="overlay">
              <div class="overlay-content">
                <div class="list-users-02">
                  <ul class="images" style="display: none">
                    <li>
                      <img
                        src="../../assets/images/profile_15.jpg"
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
            <h5>{{ getFormatDate(article.published_at) }}</h5>
          </div>
          <!-- /.Date -->
          <!-- Title -->
          <div class="title">
            <router-link
              :to="{
                name: 'article',
                params: { id: article.id },
              }"
            >
              <h2>
                <span v-if="getLabelNew(article.published_at) == true">NEW</span
                >{{ article.title }}
              </h2>
            </router-link>
          </div>
          <!-- /.Title -->
          <!-- Description -->
          <div class="desc">
            <p>
              {{ article.content.slice(0, 160) }}...
              <router-link
                :to="{
                  name: 'article',
                  params: { id: article.id },
                }"
                >{{ $t("readMore") }}</router-link
              >
            </p>
          </div>
          <!-- /.Description -->
        </div>
        <!-- Content Wrapper -->
        <!-- Share Post -->
        <div class="share-post" style="display: none">
          <div class="like">
            <a href="#">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 481.567 481.567"
                style="enable-background: new 0 0 481.567 481.567"
                xml:space="preserve"
              >
                <path
                  d="M424.7,55.841c-19.8-15.2-43.3-25-68.1-28.2c-42.6-5.6-84.3,7.4-115.8,35.6c-31.5-28.5-73.4-41.5-116.2-35.8
													c-24.8,3.3-48.4,13.2-68.3,28.6c-35.8,27.9-56.4,69.6-56.3,114.6c0,38.5,15.1,74.8,42.4,102.1l172.9,172.9
													c6.6,6.6,15.2,9.8,23.8,9.8c8.6,0,17.2-3.3,23.8-9.8l26.8-26.8c7-7,7-18.4,0-25.5c-7-7-18.4-7-25.5,0l-25.1,25.1l-171.2-171.3
													c-20.5-20.5-31.8-47.7-31.9-76.7c0-33.7,15.4-65.1,42.4-86.1c14.8-11.5,32.4-18.9,50.9-21.3c34.2-4.5,67.6,6.7,91.7,30.9
													l19.8,19.8l19.6-19.6c24-24.1,57.4-35.3,91.5-30.8c18.5,2.4,36,9.7,50.8,21c28.2,21.7,43.8,54.4,42.8,89.6
													c-0.8,27.7-12.9,54.6-33.9,75.7l-91.2,91.1c-7,7-7,18.4,0,25.5c7,7,18.4,7,25.5,0l91.2-91.2c27.6-27.6,43.4-63.1,44.4-100.1
													C482.9,128.041,462.2,84.641,424.7,55.841z"
                />
              </svg>
              349
            </a>
          </div>
          <div class="share">
            <a href="#">
              <svg
                enable-background="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m426 340c-26.583 0-50.387 12.124-66.174 31.131l-66.919-33.283c-9.889-4.916-21.895-0.89-26.813 9.001-4.919 9.89-0.889 21.895 9.001 26.813l67.022 33.333c-1.386 6.117-2.117 12.477-2.117 19.005 0 47.421 38.58 86 86 86s86-38.579 86-86-38.58-86-86-86zm0 132c-25.364 0-46-20.636-46-46 0-6.29 1.269-12.288 3.565-17.754 0.491-0.728 0.941-1.496 1.343-2.304 0.427-0.858 0.786-1.733 1.081-2.618 7.917-13.917 22.886-23.324 40.011-23.324 25.364 0 46 20.636 46 46s-20.636 46-46 46z"
                ></path>
                <path
                  d="m426 0c-47.42 0-86 38.579-86 86 0 6.627 0.754 13.081 2.179 19.281l-190.34 95.45c-15.788-18.777-39.444-30.731-65.84-30.731-47.42 0-86 38.579-86 86s38.58 86 86 86c26.282 0 49.848-11.851 65.635-30.488l32.293 16.435c2.906 1.479 6.003 2.18 9.055 2.18 7.286 0 14.31-3.995 17.841-10.933 5.01-9.845 1.092-21.886-8.753-26.896l-32.377-16.477c1.508-6.365 2.306-13.002 2.306-19.821 0-6.709-0.772-13.241-2.233-19.511l190.24-95.401c15.788 18.882 39.512 30.912 65.992 30.912 47.42 0 86-38.579 86-86s-38.58-86-86-86zm-340 302c-25.364 0-46-20.636-46-46s20.636-46 46-46 46 20.636 46 46-20.636 46-46 46zm340-170c-25.364 0-46-20.636-46-46s20.636-46 46-46 46 20.636 46 46-20.636 46-46 46z"
                ></path>
              </svg>
              151
            </a>
          </div>
          <div class="comment">
            <a href="#">
              <svg
                enable-background="new 0 0 488 488"
                version="1.1"
                viewBox="0 0 488 488"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m415.7 90.4c-46-40.3-106.9-62.5-171.7-62.5s-125.7 22.2-171.7 62.5c-46.6 40.9-72.3 95.4-72.3 153.6 0 45.9 16.7 90.9 47.2 127.8-6 11.7-14.2 21-24.6 27.8-8.6 5.6-12.7 15.7-10.4 25.7 2.2 9.9 10.2 17.1 20.2 18.5 20.6 2.9 60.8 4.3 98.1-18 8.5-5.1 11.3-16.2 6.2-24.7s-16.2-11.3-24.7-6.2c-15.6 9.3-32.1 13.1-46.4 14.2 8.2-9.8 14.7-21.3 19.5-34.3 2.4-6.4 0.9-13.5-3.6-18.5-29.8-32.2-45.5-71.1-45.5-112.3 0-99.3 93.3-180.1 208-180.1s208 80.8 208 180.1-93.3 180.1-208 180.1c-16.6 0-33.2-1.7-49.2-5.1-9.7-2.1-19.3 4.2-21.3 13.9-2.1 9.7 4.2 19.3 13.9 21.3 18.5 3.9 37.5 5.9 56.7 5.9 64.7 0 125.7-22.2 171.7-62.5 46.5-40.9 72.2-95.4 72.2-153.6s-25.7-112.7-72.3-153.6z"
                ></path>
                <circle cx="243.9" cy="244" r="23.6"></circle>
                <circle cx="317.5" cy="244" r="23.6"></circle>
                <circle cx="170.3" cy="244" r="23.6"></circle>
              </svg>
              1309
            </a>
          </div>
        </div>
        <!-- /.Share Post -->
      </div>
      <!-- /.Contents -->
    </div>
  </div>
  <div v-else>
    <div class="block-style-9">
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
        <!-- Content Wrapper -->
      </div>
      <!-- /.Contents -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsSection03",
  props: ["articles"],
  data() {
    return {
      api_url: process.env.API,
    };
  },
  methods: {
    getFormatDate: function (datetime) {
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
      // ":" +
      // dateTime.getSeconds()

      return formattedDate;
    },
    getLabelNew: function (datetime) {
      const articleDate = new Date(datetime);
      const todayDate = new Date();
      const diff = todayDate.getTime() - articleDate.getTime();
      if (Math.round(diff / (1000 * 60 * 60 * 24)) < 1) {
        return true;
      } else {
        return false;
      }
    },
  },
  /* computed: {
    articlesByLanguage: function () {
      var articles = this.articles.filter(
        (article) => article.language === this.$t("language")
      );

      return articles;
    },
  }, */
};
</script>
