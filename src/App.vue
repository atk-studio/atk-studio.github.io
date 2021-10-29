<template>
  <nav-bar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";

export default {
  mounted() {
    document.body.id = "body";
  },
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap");

#body {
  background-color: rgb(41, 42, 45);
  color: rgb(187, 187, 187);
  font-family: "Roboto Slab", serif;
}
</style>
