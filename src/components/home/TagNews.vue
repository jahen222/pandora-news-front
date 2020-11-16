<template>
  <div class="block-style-10" v-if="tagsWithArticle.length > 0">
    <div class="block-title-1">
      <h3>{{ $t("newsByTags") }}</h3>
    </div>
    <div class="small-list-posts">
      <!-- Item -->
      <div class="item" v-for="tag in tagsWithArticle" v-bind:key="tag.id">
        <h4 class="tagTitle tagTitleSize">{{ tag.name }}</h4>
        <router-link
          :to="{
            name: 'article',
            params: { id: tag.articles[0].id }
          }"
        >
          <h6 class="tagTitle">{{ tag.articles[0].title }}</h6>
          <span>{{ getFormatDate(tag.articles[0].created_at) }}</span>
        </router-link>
      </div>
      <!-- Item -->
    </div>
  </div>
  <div class="block-style-10" v-else>
    <div class="block-title-1">
      <h3>{{ $t("newsByTags") }}</h3>
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
</template>

<script>
export default {
  name: "TagNews",
  props: ["tagsWithArticle"],
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
    }
  }
};
</script>

<style>
.tagTitle:hover {
  color: #f96d00;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.tagTitleSize {
  font-size: x-large;
}
</style>
