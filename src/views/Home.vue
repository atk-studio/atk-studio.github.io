<template>
  <nav-bar title="~" />
  <div class="container my-5">
    <h1 class="display-1 text-center">ATK Dev Studio</h1>
    <div class="row mt-5">
      <div class="col-12 col-md-4 mb-4">
        <div class="card hover">
          <img
            src="@/assets/images/folder.png"
            class="card-img-top px-5 py-4 w-100"
            alt=""
          />
          <div class="card-body">
            <h4 class="card-title text-center">Our projects</h4>
            <a href="/#/projects" class="stretched-link"></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-4">
        <div class="card hover">
          <img
            src="@/assets/images/team.png"
            class="card-img-top px-5 py-4 w-100"
            alt=""
          />
          <div class="card-body">
            <h4 class="card-title text-center">Team</h4>
            <a href="/#/team" class="stretched-link"></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-4">
        <div class="card hover">
          <img
            src="@/assets/images/open-book.png"
            class="card-img-top px-5 py-4 w-100"
            alt=""
          />
          <div class="card-body">
            <h4 class="card-title text-center">About us</h4>
            <a href="/#/about" class="stretched-link"></a>
          </div>
        </div>
      </div>
    </div>
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

<style></style>
