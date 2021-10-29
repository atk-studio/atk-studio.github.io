<template>
  <nav-bar title="~" />
  <div class="container my-5">
    <div class="display-4">Welcome to</div>
    <h1 class="display-1">ATK Dev Studio</h1>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
