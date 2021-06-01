<template>
  <div>
  <Slider
    :label="'Row height'"
    :min="20"
    :max="320"
    :value="this.rowHeight"
    @input="handleChangeRowHeight"
  />
  <Checkbox
    :label="'Enable pivot'"
    :checked="pivot"
    @change="handleChangePivot"
  />
  <Checkbox
    :label="'Enable ToolPanel'"
    :checked="toolPanel"
    @change="handleChangeToolPanel"
  />
</div>
</template>

<script>
import Slider from "../Base/Slider.vue";
import Checkbox from "../Base/Checkbox.vue";

export default {
  name: "Style",
  components: {
    Checkbox,
    Slider,
  },
  data() {
    return {
      rowHeight: this.$store.state.config.rowHeight,
      pivot: this.$store.state.config.pivot,
      toolPanel: this.$store.state.config.toolPanel,
    };
  },
  mounted() {
    this.rowHeight = this.$store.state.config.rowHeight;
  },
  methods: {
    handleChangeRowHeight(event) {
      this.$store.dispatch("handleChangeRowHeight", event.target.value * 1);
    },
    handleChangePivot(event) {
      this.$store.dispatch("handleChangePivot", event);
    },
    handleChangeToolPanel(event) {
      this.$store.dispatch("handleChangeToolPanel", event);
    },
  },
};
</script>
