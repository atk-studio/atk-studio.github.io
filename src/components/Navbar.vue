<template>
  <div class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container py-1">
      <span class="navbar-brand center">
        <a href="/" class="navbar-brand"
          ><img src="@/assets/images/logo.png" height="40" id="atk-logo"
        /></a>
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
        <terminal :title="title" class="mt-lg-0 mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
import Terminal from "./Terminal.vue";
export default {
  name: "NavBar",
  props: { title: String },
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
