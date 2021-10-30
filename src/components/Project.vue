<template>
  <div class="py-4 px-3">
    <div class="row">
      <div class="col-12 col-md-5">
        <h3 class="mb-2">{{ title }}</h3>
        <div
          class="
            secondary-text
            mb-2 mb-md-0
            flex-row
            d-flex
            flex-wrap
            align-items-center
          "
        >
          <template v-for="language in languages.split('|')" :key="language">
            <div class="me-1 lang">{{ language }}</div>
            <div
              class="indicator me-3"
              v-bind:style="{ backgroundColor: colors[language.toLowerCase()] }"
            ></div>
          </template>
        </div>
      </div>
      <div
        class="col-12 col-md-7 fs-5 align-items-center d-flex secondary-text"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        typescript: "#2b7489",
        go: "#00ADD8",
        python: "#3572A5",
        javascript: "#f1e05a",
        cplusplus: "#f34b7d",
        django: "#0C4B33",
        html: "#e34c26",
        css: "#563d7c",
        vue: "#41b883",
      },
    };
  },
  props: {
    languages: String,
    title: String,
    description: String,
  },
  name: "Project",
};
</script>

<style>
.indicator {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.6rem;
}

.lang {
  font-weight: 400;
}

[data-theme="light"] .indicator {
  border-width: 2px;
  border-color: black;
  border-style: solid;
}
</style>
