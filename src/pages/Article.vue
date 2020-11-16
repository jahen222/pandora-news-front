<template>
  <q-page padding>
    <!-- Section Contents -->
    <div id="section-contents">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="row">
              <div class="col-12">
                <!-- Block Style 16 -->
                <div class="block-style-16">
                  <h6>
                    <span>{{
                      article.article_subcategory.article_category.name.toUpperCase()
                    }}</span>
                    {{ getFormatDate(article.created_at) }}
                  </h6>
                  <h1>
                    {{ article.title }}
                  </h1>
                  <div class="list-users-05">
                    <ul class="images" style="display: none">
                      <li>
                        <img src="../assets/images/list_user1.jpg" alt="Zola" />
                      </li>
                      <li>
                        <img src="../assets/images/list_user2.jpg" alt="Zola" />
                      </li>
                    </ul>
                    <p>
                      {{ $t("by") }}:
                      <span>{{ article.admin_user.username }}</span>
                    </p>
                    <div class="item-wrapper" style="display: none">
                      <div class="item">
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
                      </div>
                      <div class="item">
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
                      </div>
                      <div class="item">
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
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.Block Style 16 -->
                <!-- Block Style 17 -->
                <div
                  class="block-style-17 text-center"
                  v-if="article.media.length === 1"
                >
                  <span class="bg-orange">{{
                    article.article_subcategory.name
                  }}</span>
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
                    class="img-fluid"
                    :src="api_url + article.media[0].url"
                    alt="Zola"
                    v-else
                  />
                </div>
                <div class="block-style-17" v-else>
                  <span class="bg-orange">{{
                    article.article_subcategory.name
                  }}</span>
                  <Carousel
                    v-bind:medias="article.media ? article.media : []"
                  />
                </div>
                <!-- /.Block Style 17 -->
                <!-- Block Style 18 -->
                <div class="block-style-18">
                  <div class="no-format" v-html="formatContent"></div>
                </div>
                <!-- /.Block Style 18 -->
                <!-- Block Style 19 -->
                <div class="block-style-19" style="display: none">
                  <div class="content-wrapper">
                    <div class="like">
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
                    </div>
                    <div class="share">
                      <div class="item"><i class="fa fa-facebook"></i> 62</div>
                      <div class="item"><i class="fa fa-twitter"></i> 73</div>
                      <div class="item"><i class="fa fa-instagram"></i> 11</div>
                      <div class="item"><i class="fa fa-pinterest"></i> 5</div>
                    </div>
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
                        ></path>
                        <circle cx="243.9" cy="244" r="23.6"></circle>
                        <circle cx="317.5" cy="244" r="23.6"></circle>
                        <circle cx="170.3" cy="244" r="23.6"></circle>
                      </svg>
                      1.3k Comments
                    </div>
                  </div>
                </div>
                <!-- /.Block Style 19 -->
                <!-- Block Style 20 -->
                <div class="block-style-20" v-if="relatedArticles.length > 0">
                  <div class="heading">
                    <h1>{{ $t("relatedPosts") }}</h1>
                  </div>
                  <div class="content-wrapper">
                    <!-- Item -->
                    <div
                      class="item"
                      v-for="article in relatedArticles.slice(0, 3)"
                      v-bind:key="article.id"
                    >
                      <router-link
                        :to="{ name: 'article', params: { id: article.id } }"
                        target="_blank"
                      >
                        <div class="thumbnail">
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
                            class="img-responsive resize"
                            :src="api_url + article.media[0].url"
                            alt="Zola"
                            v-else
                          />
                        </div>
                        <div class="description">
                          <h6>{{ article.article_tags[0].name }}</h6>
                          <h3>
                            {{ article.title }}
                          </h3>
                          <p>
                            {{ article.content.slice(0, 128) }}
                          </p>
                        </div>
                      </router-link>
                    </div>
                    <!-- /.Item -->
                  </div>
                </div>
                <!-- Block Style 20 -->
              </div>

              <div class="ts-space25"></div>
              <FacebookComments />
            </div>
          </div>
          <!-- Block Style 3, 4, 5 -->
          <div class="col-12 col-lg-4">
            <div class="block-style-10" v-if="articles.length > 0">
              <div class="block-title-1">
                <h3>{{ $t("recentNews") }}</h3>
              </div>
              <div class="small-list-posts">
                <!-- Item -->
                <div class="item" v-for="article in articles" :key="article.id">
                  <div class="thumbnail-img">
                    <img
                      class="resizeMini"
                      :src="api_url + article.media[0].url"
                      alt="Zola"
                      v-if="!isVideo(article.media[0].url)"
                    />
                  </div>
                  <div class="content">
                    <router-link
                      :to="{
                        name: 'article',
                        params: { id: article.id }
                      }"
                      target="_blank"
                    >
                      <h3>{{ article.title }}</h3>
                    </router-link>
                    <span>{{ getFormatDate(article.created_at) }}</span>
                  </div>
                </div>
                <!-- Item -->
              </div>
            </div>
            <div class="block-style-10" v-else>
              <div class="block-title-1">
                <h3>{{ $t("recentNews") }}</h3>
              </div>
              <div class="small-list-posts">
                <!-- Item -->
                <div class="item">
                  <div class="content">
                    <h3>{{ $t("noArticles") }}</h3>
                  </div>
                </div>
                <!-- Item -->
              </div>
            </div>
            <div class="ts-space50"></div>
            <div class="block-style-4">
              <a href="#">
                <img
                  class="img-fluid"
                  src="../assets/images/ads_01.jpg"
                  alt="Zola"
                />
              </a>
            </div>
            <div class="ts-space50"></div>
            <OurSponsors />
            <div class="ts-space50"></div>
            <div class="block-style-4">
              <a href="#">
                <img
                  class="img-fluid"
                  src="../assets/images/ads_01.jpg"
                  alt="Zola"
                />
              </a>
            </div>
          </div>
          <!-- /.Block Style 3, 4, 5 -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import gql from "graphql-tag";
import marked from "marked";
import FacebookComments from "../components/article/FacebookComments";
import Carousel from "../components/article/Carousel";
import Media from "@dongido/vue-viaudio";
import OurSponsors from "../components/home/OurSponsors";

export default {
  name: "Article",
  components: {
    FacebookComments,
    Carousel,
    Media,
    OurSponsors
  },
  data() {
    return {
      articleId: this.$route.params.id,
      article: null,
      api_url: process.env.API,
      tagArticleslimit: 3,
      lang: this.$i18n.locale,
      articles: [],
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
  apollo: {
    article: {
      query: gql`
        query article($article_id: ID!, $tagArticleLimit: Int!) {
          article(id: $article_id) {
            id
            title
            content
            published_at
            created_at
            media {
              url
            }
            article_subcategory {
              id
              name
              article_category {
                id
                name
              }
            }
            article_tags {
              id
              name
              articles(limit: $tagArticleLimit) {
                id
                title
                content
                media {
                  id
                  url
                }
                article_tags {
                  id
                  name
                }
              }
            }
            admin_user {
              username
            }
          }
        }
      `,
      variables() {
        return {
          article_id: this.articleId,
          tagArticleLimit: this.tagArticleslimit
        };
      }
    },
    articles: {
      query: gql`
        query articles($limit: Int!, $start: Int!, $acronym: String!) {
          articles(
            limit: $limit
            start: $start
            where: {
              article_subcategory: {
                article_category: { language: { acronym_contains: $acronym } }
              }
            }
            sort: "created_at:DESC"
          ) {
            id
            title
            media {
              id
              url
            }
            created_at
            article_subcategory {
              id
              article_category {
                id
                language {
                  id
                  acronym
                }
              }
            }
            admin_user {
              username
            }
          }
        }
      `,
      variables() {
        return {
          acronym: this.$i18n.locale,
          start: 0,
          limit: 10
        };
      }
    }
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
    shuffle: function(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    isVideo: function(urlMedia) {
      const format = urlMedia.split(".")[1];
      return this.videoFormats.includes(format);
    }
    /* handleTimeupdateEvent: function(componentId) {
      var video = document.getElementById(componentId);
      video.addEventListener(
        "timeupdate",
        function() {
          if (this.currentTime >= 5) {
            this.pause();
          }
        },
        false
      );
    } */
  },
  computed: {
    relatedArticles: function() {
      var tagsArticles = [];

      const tagArticles = this.article.article_tags;
      for (let index = 0; index < tagArticles.length; index++) {
        const articles = tagArticles[index].articles;
        for (let index2 = 0; index2 < articles.length; index2++) {
          const article = articles[index2];
          if (article.id !== this.articleId) {
            tagsArticles.push(article);
          }
        }
      }

      return this.shuffle(tagsArticles).slice(0, 4);
    },
    formatContent: function() {
      return marked(
        this.article.content.replace(/\/uploads\//g, this.api_url + "/uploads/")
      )
        .replace(
          /<img/g,
          '<img style="margin-left: auto;margin-right: auto; display: block; width: 100%;"'
        )
        .replace(/\/p>/g, "/p><br />");
    }
  },
  beforeUpdate() {
    if (this.article.language === "spanish") {
      this.$i18n.locale = "es-es";
    } else if (this.article.language === "english") {
      this.$i18n.locale = "en-us";
    }
  }
};
</script>

<style scoped>
.resize {
  width: 100%;
  height: 150px;
}
.resizeMini {
  width: 75px;
  height: 75px;
}
</style>
