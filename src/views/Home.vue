<template>
  <nav-bar title="~" />
  <div class="container my-5">
    <h1 class="display-1 text-center">ATK Dev Studio</h1>
    <div class="mt-5">
      <div class="card hover mb-4">
        <div class="card-body row px-3 px-sm-5">
          <div class="col-3 col-md-2 col-lg-1 d-flex align-items-center">
            <img src="@/assets/images/folder.png" class="w-100" alt="" />
          </div>
          <div
            class="
              col-9 col-md-8 col-lg-11
              fs-1
              ps-md-4
              d-flex
              align-items-center
            "
          >
            Projects
          </div>
          <a href="/#/projects" class="stretched-link"></a>
        </div>
      </div>
      <div class="card hover mb-4">
        <div class="card-body row px-3 px-sm-5">
          <div class="col-3 col-md-2 col-lg-1 d-flex align-items-center">
            <img src="@/assets/images/team.png" class="w-100" alt="" />
          </div>
          <div
            class="
              col-9 col-md-8 col-lg-11
              fs-1
              ps-md-4
              d-flex
              align-items-center
            "
          >
            Team
          </div>
          <a href="/#/team" class="stretched-link"></a>
        </div>
      </div>
      <div class="card hover mb-4">
        <div class="card-body row px-3 px-sm-5">
          <div class="col-3 col-md-2 col-lg-1 d-flex align-items-center">
            <img src="@/assets/images/open-book.png" class="w-100" alt="" />
          </div>
          <div
            class="
              col-9 col-md-8 col-lg-11
              fs-1
              ps-md-4
              d-flex
              align-items-center
            "
          >
            About
          </div>
          <a href="/#/about" class="stretched-link"></a>
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
