<template>
  <nav-bar title="about-us" />
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">About us</li>
      </ol>
    </nav>
    <h1>About us</h1>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
