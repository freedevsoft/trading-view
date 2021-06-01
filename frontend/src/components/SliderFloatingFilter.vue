
<template>
  <input
    type="range"
    :value="currentValue"
    min="0"
    :max="maxValue"
    step="1"
    @input="valueChanged($event)"
  />
</template>

<script>
export default {
  data() {
    return {
      maxValue: 0,
      currentValue: 0,
    };
  },
  beforeMount() {
    this.maxValue = this.params.maxValue;
  },
  mounted() {},
  methods: {
    valueChanged(event) {
      this.currentValue = event.target.value;
      let valueToUse = this.currentValue === "0" ? null : this.currentValue;
      this.params.parentFilterInstance(function (instance) {
        instance.onFloatingFilterChanged("greaterThan", valueToUse);
      });
    },

    onParentModelChanged(parentModel) {
      this.currentValue = !parentModel ? 0 : parentModel.filter;
    },
  },
};
</script>
