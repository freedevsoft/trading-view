<template>
  <!-- ****  ****  ****  ****  
NAVBAR
****  ****  ****  **** -->
  <nav
    class="h-16 flex items-center lg:items-stretch justify-between bg-white shadow-md relative z-10 px-8"
  >
    <!-- ****  ****  ****  ****  
TAB: HOME (0)
****  ****  ****  **** -->
    <div class="h-full w-28 flex items-center justify-center">
      <div class="relative">
        <router-link to="/">
          <div
            class="flex items-center cursor-pointer font-body font-medium text-red-50 text-xs md:text-sm pl-2 py-2 hover:text-green-50"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span class="ml-2">Prices</span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- ****  ****  ****  ****  
TAB: HOME (1)
****  ****  ****  **** -->
    <div class="h-full w-28 flex items-center justify-center">
      <div class="relative">
        <router-link to="/markets">
          <div
            class="flex items-center cursor-pointer font-body font-medium text-red-50 text-xs md:text-sm pl-2 py-2 hover:text-green-50"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span class="ml-2">Markets</span>
          </div>
        </router-link>
      </div>
    </div>
    <!-- ****  ****  ****  ****  
CONTAINER (FULL)
****  ****  ****  **** -->
    <div class="flex w-full">
      <!-- ****  ****  ****  ****  
CONTAINER-RIGHT (LG)
****  ****  ****  **** -->
      <div class="w-11/12 hidden lg:flex">
        <div class="w-full flex items-center justify-end">
          <!-- ****  ****  ****  ****  
SEARCH
****  ****  ****  **** -->
          <div class="rounded relative w-8/12" />
          <!-- ****  ****  ****  ****  
WALLET
****  ****  ****  **** -->
          <!-- ****  ****  ****  ****  
THEME SWITCHER
****  ****  ****  **** -->
          <div class="h-full w-20 flex items-center justify-center">
            <div class="relative">
              <select
                class="w-36 h-12 bg-white text-black"
                @change="handleChangeTheme"
              >
                <option
                  v-for="theme in themes"
                  :key="theme.id"
                  :value="theme.id"
                  :selected="theme.id === this.selectedTheme"
                >
                  {{ theme.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        { id: "light", text: "Light theme" },
        { id: "dark", text: "Dark theme" },
      ],
      selectedTheme: null,
    };
  },
  mounted() {
    let theme = window.localStorage.getItem("theme");
    this.selectedTheme = theme || "light";
  },
  methods: {
    handleChangeTheme(e) {
      let container = document.documentElement;
      window.localStorage.setItem("theme", e.target.value);
      let theme = window.localStorage.getItem("theme");

      // remove all class names on html tags
      container.classList.remove("theme-light");
      container.classList.remove("theme-dark");

      // add the class name of theme that you want
      switch (theme) {
        case "light":
          container.classList.add("theme-light");
          break;
        case "dark":
          container.classList.add("theme-dark");
          break;
        default:
          break;
      }
    },
  },
};
</script>
