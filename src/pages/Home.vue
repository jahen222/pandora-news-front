<template>
  <q-page class="flex flex-center">
    <!-- Section Slider 01 -->
    <Slider v-bind:lastArticle="lastArticle ? lastArticle : null" />
    <!-- /.Section Slider 01 -->
    <!-- Section Contents -->
    <div id="section-contents" class="homepage-01">
      <div class="container">
        <div class="row">
          <!-- Block Style 1 -->
          <div class="col-12 col-lg-3">
            <MostRead />
          </div>
          <!-- /.Block Style 1 -->
          <!-- Block Style 2 -->
          <div class="col-12 col-lg-5">
            <TopComments />
          </div>
          <!-- /.Block Style 2 -->
          <!-- Block Style 3, 4, 5 -->
          <div class="col-12 col-lg-4">
            <StayConnected />
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
          </div>
          <!-- /.Block Style 3, 4, 5 -->
        </div>
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="row">
              <!-- Block Style 7 -->
              <div class="col-12">
                <div class="ts-space25"></div>
                <div class="block-style-7">
                  <a href="#"
                    ><img
                      class="img-fluid"
                      src="../assets/images/ads_06.png"
                      alt="Zola"
                  /></a>
                </div>
                <div class="ts-space95"></div>
              </div>
              <!-- /.Block Style 7 -->
              <!-- Block Style 8 -->
              <div class="col-12 col-lg-6">
                <NewsSection01
                  v-bind:subcategoryWithArticle01="
                    subcategoryWithArticle01 ? subcategoryWithArticle01 : null
                  "
                />
              </div>
              <div class="col-12 col-lg-6">
                <NewsSection02
                  v-bind:subcategoryWithArticle02="
                    subcategoryWithArticle02 ? subcategoryWithArticle02 : null
                  "
                />
              </div>
              <!-- /.Block Style 8 -->
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="row">
              <!-- Block Style 6 & 4 -->
              <div class="col-12">
                <div class="ts-space50"></div>
                <TwitterFeed />
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
              </div>
              <!-- Block Style 6 & 4 -->
            </div>
          </div>
        </div>
        <div class="ts-space70"></div>
        <div class="row">
          <!-- Block Style 1 -->
          <div class="col-12 col-lg-3">
            <EditorPicks
              v-bind:articleEditorsPicks="
                articleEditorsPicks ? articleEditorsPicks : []
              "
            />
          </div>
          <!-- /.Block Style 1 -->
          <!-- Block Style 9 -->
          <div class="col-12 col-lg-5">
            <NewsSection03 v-bind:articles="articles ? articles : []" />
            <div class="load-more-btn" v-if="articles.length > 0">
              <a @click="moreArticles()" class="btn">{{ $t("loadMore") }}</a>
            </div>
            <div class="ts-space30"></div>
          </div>
          <!-- /.Block Style 9 -->
          <!-- Block Style 10, 11 -->
          <div class="col-12 col-lg-4">
            <TerndingNews />
            <div class="ts-space50"></div>
            <RecentComments style="display: none;"/>
          </div>
          <!-- /.Block Style 10, 11 -->
        </div>
      </div>
    </div>
    <!-- /.Section Contents -->
  </q-page>
</template>

<script>
import Slider from "../components/home/Slider";
import MostRead from "../components/home/MostRead";
import TopComments from "../components/home/TopComments";
import StayConnected from "../components/home/StayConnected";
import OurSponsors from "../components/home/OurSponsors";
import NewsSection01 from "../components/home/NewsSection01";
import NewsSection02 from "../components/home/NewsSection02";
import TwitterFeed from "../components/home/TwitterFeed";
import EditorPicks from "../components/home/EditorPicks";
import NewsSection03 from "../components/home/NewsSection03";
import TerndingNews from "../components/home/TerndingNews";
import RecentComments from "../components/home/RecentComments";
import gql from "graphql-tag";

export default {
  name: "PageIndex",
  components: {
    Slider,
    MostRead,
    TopComments,
    StayConnected,
    OurSponsors,
    NewsSection01,
    NewsSection02,
    TwitterFeed,
    EditorPicks,
    NewsSection03,
    TerndingNews,
    RecentComments,
  },
  data() {
    return {
      start: 0,
      limit: 5,
      articles: [],
      articleSubcategories: [],
      articleEditorsPicks: []
    };
  },
  apollo: {
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
            sort: "published_at:DESC"
          ) {
            id
            title
            content
            editor_pick
            published_at
            media {
              url
            }
            article_subcategory {
              id
              name
              article_category {
                id
                name
                language {
                  id
                  name
                  acronym
                }
              }
            }
            article_tags {
              id
              name
            }
            admin_user {
              username
            }
          }
        }
      `,
      variables() {
        return {
          limit: this.limit,
          start: this.start,
          acronym: this.$i18n.locale,
        };
      },
    },
    articleSubcategories: {
      query: gql`
        query articlesSubcategories($acronym: String!) {
          articleSubcategories(
            where: {
              article_category: { language: { acronym_contains: $acronym } }
              articles_gt: 0
            }
            sort: "published_at:DESC"
          ) {
            id
            name
            article_category {
              id
              name
              language {
                id
                name
                acronym
              }
            }
            articles(limit: 1) {
              id
              title
              content
              published_at
              media {
                id
                url
              }
              admin_user {
                username
              }
            }
          }
        }
      `,
      variables() {
        return {
          acronym: this.$i18n.locale,
        };
      },
    },
    articleEditorsPicks: {
      query: gql`
        query articleEditorsPicks($acronym: String!, $editor_pick: Boolean!) {
          articles(
            where: {
              article_subcategory: {
                article_category: { language: { acronym_contains: $acronym } }
              },
              editor_pick: $editor_pick
            }
            sort: "published_at:DESC"
          ) {
            id
            title
            content
            editor_pick
            media {
              id
              url
            }
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
          editor_pick: true
        };
      },
      update: data => data.articles
    },
  },
  methods: {
    moreArticles: function () {
      this.limit = this.limit + 5;
    },
    shuffle: function (array) {
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
  },
  computed: {
    lastArticle: function () {
      return this.articles[0];
    },
    subcategoryWithArticle01: function () {
      return this.shuffle(this.articleSubcategories)[0];
    },
    subcategoryWithArticle02: function () {
      return this.shuffle(this.articleSubcategories)[0];
    },
  },
};
</script>
