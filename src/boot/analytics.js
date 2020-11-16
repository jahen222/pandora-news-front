import VueAnalytics from "vue-analytics";

export default async ({ Vue, router }) => {
  Vue.use(VueAnalytics, {
    id: "UA-XXXXXX-1",
    router
  });
};
