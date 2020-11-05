<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    :label="$t('layoutLanguageSwitcherLabel')"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 200px"
  />
</template>

<script>
export default {
  name: "languageSwitcher",
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: "en-us", label: "English" },
        { value: "es-es", label: "Español" },
      ],
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
