<template>
  <div class="relative flex flex-no-wrap">
    <div class="w-full">
      <div class="sticky top-0 z-20">
        <Navbar />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
  mounted() {
    var theme = window.localStorage.getItem("theme") || "light";
    var container = document.documentElement;
    container.classList.add(`theme-${theme}`);
  },
};
</script>
