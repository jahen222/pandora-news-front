<template>
  <q-page class="flex flex-center">
    <!-- Section Slider 01 -->
    <Slider v-bind:lastArticle="articles[0] ? articles[0] : null" />
    <!-- /.Section Slider 01 -->
    <!-- Section Contents -->
    <div id="section-contents" class="homepage-01">
      <div class="container">
        <div class="row">
          <!-- Block Style 1 -->
          <div class="col-12 col-lg-3">
            <EditorPicks
              v-bind:editorsPicks="editorsPicks ? editorsPicks : []"
            />
          </div>
          <!-- /.Block Style 1 -->
          <!-- Block Style 2 -->
          <div class="col-12 col-lg-5">
            <Pinned
              v-bind:articlesPinned="articlesPinned ? articlesPinned : []"
            />
            <NewsSection01
              v-bind:articles="articles ? articles.slice(0, 3) : []"
            />
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
            <TagNews
              v-bind:tagsWithArticle="articleTags ? shuffle(articleTags).slice(0, 6) : []"
            />
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
              <div
                class="col-12 col-lg-6"
                v-for="index in 4"
                v-bind:key="index"
              >
                <NewsSection02
                  v-bind:subcategoryWithArticle="
                    articleSubcategories[index]
                      ? shuffle(articleSubcategories)[index]
                      : null
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
              <!-- Block Style 6 & 4 -->
            </div>
          </div>
        </div>
        <div class="ts-space70"></div>
        <div class="row">
          <!-- Block Style 1 -->
          <div class="col-12 col-lg-3">
            <TagNews
              v-bind:tagsWithArticle="articleTags ? shuffle(articleTags) : []"
            />
          </div>
          <!-- /.Block Style 1 -->
          <!-- Block Style 9 -->
          <div class="col-12 col-lg-5">
            <NewsSection03
              v-bind:articles="articles ? articles.slice(3) : []"
            />
            <div class="load-more-btn" v-if="articles.length > 0">
              <a @click="moreArticles()" class="btn">{{ $t("loadMore") }}</a>
            </div>
            <div class="ts-space30"></div>
          </div>
          <!-- /.Block Style 9 -->
          <!-- Block Style 10, 11 -->
          <div class="col-12 col-lg-4">
            <Authors v-bind:authors="authors ? authors : []" />
            <div class="ts-space50"></div>
            <RecentComments style="display: none" />
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
import Pinned from "../components/home/Pinned";
import NewsSection01 from "../components/home/NewsSection01";
import StayConnected from "../components/home/StayConnected";
import OurSponsors from "../components/home/OurSponsors";
import NewsSection02 from "../components/home/NewsSection02";
import TwitterFeed from "../components/home/TwitterFeed";
import EditorPicks from "../components/home/EditorPicks";
import NewsSection03 from "../components/home/NewsSection03";
import TagNews from "../components/home/TagNews";
import Authors from "../components/home/Authors";
import RecentComments from "../components/home/RecentComments";
import gql from "graphql-tag";

export default {
  name: "PageIndex",
  components: {
    Slider,
    Pinned,
    NewsSection01,
    StayConnected,
    OurSponsors,
    NewsSection02,
    TwitterFeed,
    EditorPicks,
    NewsSection03,
    TagNews,
    Authors,
    RecentComments
  },
  data() {
    return {
      limit: 5,
      articles: [],
      articleSubcategories: [],
      editorsPicks: [],
      articleTags: [],
      articlesPinned: [],
      authors: []
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
            sort: "created_at:DESC"
          ) {
            id
            title
            content
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
          limit: this.limit
        };
      }
    },
    articleSubcategories: {
      query: gql`
        query articlesSubcategories($limit: Int!, $acronym: String!) {
          articleSubcategories(
            where: {
              article_category: { language: { acronym_contains: $acronym } }
              articles_gt: 0
            }
          ) {
            id
            name
            article_category {
              id
              name
              language {
                id
                acronym
              }
            }
            articles(limit: $limit, sort: "created_at:DESC") {
              id
              title
              content
              created_at
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
          limit: 1
        };
      }
    },
    editorsPicks: {
      query: gql`
        query editorsPicks(
          $limit: Int!
          $acronym: String!
          $editor_pick: Boolean!
        ) {
          articles(
            limit: $limit
            where: {
              article_subcategory: {
                article_category: { language: { acronym_contains: $acronym } }
              }
              editor_pick: $editor_pick
            }
            sort: "created_at:DESC"
          ) {
            id
            title
            content
            editor_pick
            created_at
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
          editor_pick: true,
          limit: 5
        };
      },
      update: data => data.articles
    },
    articleTags: {
      query: gql`
        query articleTags(
          $limit_tags: Int!
          $limit_articles: Int!
          $acronym: String!
        ) {
          articleTags(
            limit: $limit_tags
            where: { language: { acronym_contains: $acronym }, articles_gt: 0 }
          ) {
            id
            name
            language {
              id
              acronym
            }
            articles(limit: $limit_articles, sort: "created_at:DESC") {
              id
              title
              created_at
              media {
                id
                url
              }
            }
          }
        }
      `,
      variables() {
        return {
          acronym: this.$i18n.locale,
          limit_articles: 1,
          limit_tags: 20
        };
      }
    },
    articlesPinned: {
      query: gql`
        query articlesPinned(
          $limit: Int!
          $acronym: String!
          $pinned: Boolean!
        ) {
          articles(
            limit: $limit
            where: {
              article_subcategory: {
                article_category: { language: { acronym_contains: $acronym } }
              }
              pinned: $pinned
            }
            sort: "created_at:DESC"
          ) {
            id
            title
            content
            pinned
            created_at
            media {
              id
              url
            }
            article_subcategory {
              id
              article_category {
                id
                name
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
          pinned: true,
          limit: 1
        };
      },
      update: data => data.articles
    },
    authors: {
      query: gql`
        query authors {
          authors{
            id
            name
            last_name
            about_me
            created_at
            photo {
              id
              url
            }
            admin_user {
              username
            }
          }
        }
      `,
      variables() {
      },
    },
  },
  methods: {
    moreArticles: function() {
      this.limit = this.limit + 5;
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
    }
  },
};
</script>
