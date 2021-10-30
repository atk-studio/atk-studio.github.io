<template>
  <div class="card lighter p-4 mb-3">
    <div class="row">
      <h3>{{ title }}</h3>
      <div class="flex-row d-flex align-items-center">
        <template v-for="language in languages.split('|')" :key="language">
          <div class="me-1 lang">{{ language }}</div>
          <div
            class="indicator me-3"
            v-bind:style="{ backgroundColor: colors[language.toLowerCase()] }"
          ></div>
        </template>
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
  },
  name: "Project",
};
</script>

<style>
.indicator {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
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
