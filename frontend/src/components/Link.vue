<template>
  <Menus :label="'TABLE'"><Table /></Menus>
</template>

<script>
import Menus from "./Menus.vue";
import Table from "./Menu/Table.vue";
export default {
  name: "Link",
  components: {
    Menus,
    Table,
  },
};
</script>
