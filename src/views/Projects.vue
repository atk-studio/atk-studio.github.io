<template>
  <nav-bar title="projects" />
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Projects</li>
      </ol>
    </nav>
    <h1 class="display-2 text-center">Projects</h1>
    <div class="mt-4">
      <div class="card p-3 mb-4">
        <h2 class="text-center mb-3">🚀 Launched</h2>
        <project languages="Python|JavaScript" title="Diary56" />
        <project languages="TypeScript" title="MathUp" />
      </div>
      <div class="card p-3 mb-4">
        <h2 class="text-center mb-3">🛠️ In development</h2>
        <project languages="Python|JavaScript|Vue" title="Diary56 2.0" />
        <project languages="Go" title="EPNM" />
      </div>
      <div class="card p-3">
        <h2 class="text-center mb-3">📑 Future plans</h2>
        <div class="text-center fs-4">
          The future is not something to predict.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import Project from "@/components/Project.vue";

export default {
  components: {
    NavBar,
    Project,
  },
};
</script>

<style></style>
