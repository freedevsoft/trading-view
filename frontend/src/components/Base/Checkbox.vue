<template>
  <div class="mb-4 text-left">
    <label class="text-black">
      <input type="checkbox" :checked="checked" v-on:change="handleCheck" />
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  name: "Checkbox",
  props: ["label", "checked"],
  methods: {
    handleCheck(event) {
      event.preventDefault();
      event.stopPropagation();
      this.$emit("change", event.target.checked);
    },
  },
};
</script>

<style></style>
