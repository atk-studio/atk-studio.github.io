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
        data-bs-target=".gonna-collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse gonna-collapse">
        <div>
          <terminal :title="title" class="my-lg-0 my-4" />
        </div>
      </div>

      <div class="switch collapse gonna-collapse d-flex">
        <div id="themeSwitchWrapper">
          <img
            v-if="checked"
            src="@/assets/images/light.png"
            height="18"
            id="light-icon"
          />
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="themeSwitch"
              v-model="checked"
              @change="switchTheme"
            />
          </div>
          <img
            v-if="!checked"
            src="@/assets/images/dark.png"
            height="18"
            id="dark-icon"
          />
        </div>
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
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    switchTheme() {
      if (this.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    },
  },
  created() {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "light") this.checked = true;
    }
  },
};
</script>

<style>
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
    margin-left: 50;
    margin-right: 50;
    pointer-events: none;
  }
}

#themeSwitch {
  height: 25px;
  width: 50px;
}

#themeSwitchWrapper {
  display: flex;
  flex-direction: "row";
  align-items: center;
  position: relative;
}

#light-icon {
  position: absolute;
  z-index: 999;
  pointer-events: none;
  left: 4px;
  top: 8px;
}

#dark-icon {
  position: absolute;
  z-index: 999;
  pointer-events: none;
  right: 4px;
  top: 8px;
}

@media (max-width: 992px) {
  .switch.collapse.show {
    display: block !important;
  }
  .switch.collapse {
    display: none !important;
  }
}
</style>
