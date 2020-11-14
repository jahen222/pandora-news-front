<template>
  <div class="block-style-8" v-if="subcategoryWithArticle02 != null">
    <!-- Block Title 2 -->
    <div class="block-title-2">
      <h3>{{ subcategoryWithArticle02.article_category.name }}</h3>
    </div>
    <!-- /.Block Title 2 -->
    <!-- Contents -->
    <div class="contents">
      <!-- Thumbnail -->
      <div class="thumbnail-1">
        <span class="bg-red">{{ subcategoryWithArticle02.name }}</span>
        <a href="#">
          <img
            :src="api_url + subcategoryWithArticle02.articles[0].media[0].url"
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
                    subcategoryWithArticle02.articles[0].admin_user.username
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!-- /.Thumbnail -->
      <!-- Content Wrapper -->
      <div class="content-wrapper">
        <!-- Date -->
        <div class="date">
          <h5>
            {{
              getFormatDate(subcategoryWithArticle02.articles[0].published_at)
            }}
          </h5>
        </div>
        <!-- /.Date -->
        <!-- Title -->
        <div class="title">
          <router-link
            :to="{
              name: 'article',
              params: { id: subcategoryWithArticle02.articles[0].id },
            }"
          >
            <h2>{{ subcategoryWithArticle02.articles[0].title }}</h2>
          </router-link>
        </div>
        <!-- /.Title -->
        <!-- Description -->
        <div class="desc">
          <p>
            {{ subcategoryWithArticle02.articles[0].content.slice(0, 550) }}...
              <router-link
                :to="{
                  name: 'article',
                  params: { id: subcategoryWithArticle02.articles[0].id },
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
export default {
  name: "NewsSection02",
  props: ["subcategoryWithArticle02"],
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
  },
};
</script>
