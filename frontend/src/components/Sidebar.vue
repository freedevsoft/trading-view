<template>
  <div
    class="w-12 z-10 flex-shrink-0 relative bg-indigo-100 rounded-tl-lg rounded-bl-lg flex-col justify-between sm:flex transition duration-300 ease-in-out"
    id="sidebarContainer"
  >
    <!-- LINKS -->
    <div class="flex justify-between flex-col">
      <div>
        <Link />
      </div>
    </div>
  </div>
</template>

<script>
import Link from "./Link.vue";

export default {
  name: "Sidebar",
  components: {
    Link,
  },
  data() {
    return {};
  },
};
</script>
