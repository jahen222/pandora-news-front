<template>
  <div class="block-style-1" v-if="authors.length > 0">
    <!-- Block Title 1 -->
    <div class="block-title-1">
      <h3>{{ $t("authors") }}</h3>
    </div>
    <!-- /.Block Title 1 -->
    <!-- Block Content -->
    <div class="block-content" v-for="author in authors" :key="author.id">
      <div class="block-content_header">
        <p>{{ author.name }} {{ author.last_name }}</p>
      </div>
      <div class="block-content_thumbnail">
        <img class="resize" :src="api_url + author.photo.url" alt="Zola" />
      </div>
      <div class="block-content_text">
        <h4>Alias: {{ author.admin_user.username }}</h4>
        <p>
          {{ author.about_me }}
        </p>
      </div>
    </div>
    <!-- /.Block Content -->
  </div>
  <div class="block-style-1" v-else>
    <!-- Block Title 1 -->
    <div class="block-title-1">
      <h3>{{ $t("authors") }}</h3>
    </div>
    <!-- /.Block Title 1 -->
    <!-- Block Content -->
    <div class="block-content">
      <div class="block-content_text">
        <h4>{{ $t("noAuthors") }}</h4>
      </div>
    </div>
    <!-- /.Block Content -->
  </div>
</template>

<script>
export default {
  name: "Authors",
  props: ["authors"],
  data() {
    return {
      api_url: process.env.API
    };
  }
};
</script>

<style scoped>
.resize {
  width: 100%;
  height: 267px;
}
</style>
