<template>
  <div class="mb-4">
    <label for="" class="text-black">{{ this.label }}</label>
    <input type="range" :value="value" :min="min" :max="max" />
  </div>
</template>
<script>
export default {
  name: "Slider",
  props: {
    label: [String, Number],
    value: {
      type: Number,
      default: 10,
    },
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="">
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  border-radius: 8px;
  background: var(--color-bg-blue-400);
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

input[type="range"]:hover {
  opacity: 1;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  /* background: #03a9f4; */
  background: var(--color-bg-purple-300);
  border-radius: 10px;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  /* background: #03a9f4; */
  background: var(--color-bg-purple-300);
  border-radius: 10px;
  cursor: pointer;
}
</style>
