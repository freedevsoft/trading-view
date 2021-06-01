<template>
  <div class="md:px-10 px-5 py-2">
    <div class="container pt-8 mx-auto">
      <div class="flex flex-col lg:flex-row mx-auto w-full gap-8">
        <div class="flex flex-col mx-auto w-full bg-white shadow-md rounded-lg">
          <TableMarketsContainer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableMarketsContainer from "../components/TableMarketsContainer.vue";

export default {
  name: "Markets",
  components: {
    TableMarketsContainer,
  },
};
</script>
