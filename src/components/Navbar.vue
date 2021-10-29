<template>
  <div class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand center">
        <a href="/" class="navbar-brand">ATK Dev Studio</a>
      </span>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        style="z-index: 0"
        data-bs-target="#navbarContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <terminal />
      </div>
    </div>
  </div>
</template>

<script>
import Terminal from "./Terminal.vue";
export default {
  name: "NavBar",
  props: {},
  components: { Terminal },
};
</script>

<style>
.navbar {
  background-color: #252627 !important;
}

.navbar-toggler {
  border: none;
}

.navbar-brand.center {
  z-index: 1;
}

@media (min-width: 992px) {
  .navbar-brand.center {
    position: absolute;
    left: 0;
    text-align: center;
    width: 100%;
  }
}
</style>
