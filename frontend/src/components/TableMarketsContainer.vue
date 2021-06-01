<template>
  <div class="flex flex-col rounded-3xl">
    <div class="flex">
     <Sidebar />
      <div class="w-full pt-4">
        <h3 class="text-3xl text-gray-700 font-body font-bold mb-2 pl-10">
          Markets
        </h3>
        <TableMarkets />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import TableMarkets from "../components/TableMarkets.vue";

export default {
  name: "TableMarketsContainer",
  components: {
    Sidebar,
    TableMarkets,
  },
};
</script>

<style></style>
