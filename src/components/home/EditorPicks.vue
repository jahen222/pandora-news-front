<template>
  <div class="block-style-1 v2" v-if="articleEditorsPicks.length > 0">
    <!-- Block Title 1 -->
    <div class="block-title-1">
      <h3>{{ $t("editorsPicks") }}</h3>
      <img
        src="../../assets/images/svg/more-1.svg"
        alt="Zola"
        style="display: none"
      />
    </div>
    <!-- /.Block Title 1 -->
    <!-- Block Content -->
    <div
      class="block-content"
      v-for="article in articleEditorsPicks"
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
            params: { id: article.id },
          }"
        >
          <img :src="api_url + article.media[0].url" alt="Zola" />
        </router-link>
      </div>
      <div class="block-content_text">
        <router-link
          :to="{
            name: 'article',
            params: { id: article.id },
          }"
        >
          <h4>{{ article.title }}</h4>
        </router-link>
        <p>
          {{ article.content.slice(0, 64) }}
          <router-link
            :to="{
              name: 'article',
              params: { id: article.id },
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
        <a href="#">
          <h4>{{ $t("noArticles") }}</h4>
        </a>
      </div>
    </div>
    <!-- /.Block Content -->
  </div>
</template>

<script>
export default {
  name: "EditorPicks",
  props: ["articleEditorsPicks"],
  data() {
    return {
      api_url: process.env.API,
    };
  },
};
</script>
