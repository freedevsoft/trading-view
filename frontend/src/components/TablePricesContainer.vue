<template>
  <div class="flex flex-col rounded-3xl">
    <div class="flex">
      <Sidebar />
      <div class="w-full pt-4">
        <h3 class="text-3xl text-gray-700 font-body font-bold mb-2 pl-10">
          Prices
        </h3>
        <TablePrices />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import TablePrices from "../components/TablePrices.vue";

export default {
  name: "TablePricesContainer",
  components: {
    Sidebar,
    TablePrices,
  },
};
</script>

<style></style>
