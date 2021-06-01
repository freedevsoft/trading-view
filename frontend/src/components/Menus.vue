<template>
  <div class="font-display">
    <div
      ref="buttonRef"
      @click="toggleMenu"
      class="grid justify-items-stretch hover:bg-indigo-600 cursor-pointer py-4"
    >
      <div class="justify-self-center">
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <!-- <span class="text-sm ml-2">{{ label }}</span> -->
      </div>
    </div>
    <transition name="fade">
      <div
        v-show="isOpen"
        ref="menuRef"
        class="duration-150 ease-in-out absolute shadow-2xl top-0 left-12 w-48"
      >
        <div class="w-full bg-white rounded-xl">
          <div class="bg-indigo-100 rounded-t-lg py-4 px-4">
            <p
              class="text-base text-gray-800 font-normal leading-normal tracking-normal flex"
            >
              {{ label }}
            </p>
          </div>
          <div class="w-full h-full px-4 pt-4 pb-4">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Menus",
  props: ["label"],
  data() {
    return {
      isOpen: false,
      windowHeight: 0,
    };
  },
  methods: {
    toggleMenu: function () {
      this.isOpen = !this.isOpen;
    },
    closeMenu: function (e) {
      if (
        !this.$refs.menuRef.contains(e.target) &&
        !this.$refs.buttonRef.contains(e.target)
      ) {
        this.isOpen = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener("click", this.closeMenu);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.closeMenu);
  },
  mounted: function () {
    const padding = 15;
    this.windowHeight = window.innerHeight;
    const buttonHeight = 44;
    this.$refs.menuRef.style.display = "inline";
    const height = this.$refs.menuRef.clientHeight;
    const top = this.$refs.menuRef.getBoundingClientRect().top;
    this.$refs.menuRef.style.maxHeight = `${this.windowHeight - 2 * padding}px`;
    this.$refs.menuRef.style.overflow = "auto";
    if (top === 0) {
      this.$refs.menuRef.style.top = `${padding}px`;
    }
    if (top + height > this.windowHeight) {
      this.$refs.menuRef.style.top = "auto";
      this.$refs.menuRef.style.bottom = `${
        top + buttonHeight + padding - this.windowHeight
      }px`;
    }
    this.$refs.menuRef.style.display = "none";
  },
};
</script>

<style lang="">
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
