<template>
  <div
    class="fb-comments"
    data-href="https://songxy.com/mastering"
    data-numposts="5"
    data-colorscheme="dark"
    data-width="280px"
  ></div>
</template>

<script>
export default {
  name: "FacebookComments",
  methods: {
    init() {
      if (window.FB) {
        window.FB.init({
          appId: 2838194026425200,
          autoLogAppEvents: true,
          xfbml: true,
          version: "v8.0",
        });
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
