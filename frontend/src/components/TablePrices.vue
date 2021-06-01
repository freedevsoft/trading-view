<template>
  <div class="text-left bg-white z-0 w-auto w-full p-10 pt-2 rounded-br-lg">
    <p>Base Currency :</p>

    <select
      name="base_currency"
      @change="onCurrencyChange($event)"
      class="form-control"
      v-model="base_currency"
    >
      <option v-for="each in base_currencies" :key="each" :value="each">
        {{ each.toUpperCase() }}
      </option>
    </select>
    <ag-grid-vue
      style="width: 100%; height: max-content"
      class="ag-theme-alpine"
      domLayout="autoHeight"
      :gridOptions="gridOptions"
      :getRowHeight="getRowHeight"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :groupMultiAutoColumn="true"
      :enableRangeSelection="true"
      :enableRangeHandle="true"
      :rowDragManaged="true"
      :enableMultiRowDragging="true"
      :animateRows="true"
      :showOpenedGroup="true"
      :frameworkComponents="frameworkComponents"
      :modules="modules"
      :rowStyle="{ border: 'none' }"
      rowSelection="multiple"
      :sideBar="true"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { AgGridVue } from "ag-grid-vue3";
import { AllCommunityModules } from "ag-grid-community";
import "ag-grid-enterprise";
import SliderFloatingFilter from "./SliderFloatingFilter.vue";

export default {
  name: "TablePrices",
  data() {
    return {
      groupHeight: this.$store.state.config.rowHeight,
        columnDefs :[
      {
        field: "symbol",
        headerTooltip: "Symbol",
        rowDrag: true,
        pivot: true,
        pinned: "left",
        enableRowGroup: true,
        filter: "agTextColumnFilter",
        filterParams: this.textFilterParams,
      },
      {
        field: "current_price",
        headerName: "Current price",
        headerTooltip: "Current price",
        pivot: true,
        type: "numericColumn",
        pinned: "left",
        width: 120,
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "weekly_high",
        headerName: "Weekly high",
        headerTooltip: "Weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "weekly_low",
        headerName: "Weekly low",
        headerTooltip: "Weekly low",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "increase_weekly_low",
        headerName: "% Increase from weekly low",
        headerTooltip: "% Increase from weekly low",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "decrease_weekly_high",
        headerName: "% Difference from weekly high",
        headerTooltip: "% Difference from weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "twofive_below_weekly_high",
        headerName: "2.5% below weekly high",
        headerTooltip: "2.5% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "five_below_weekly_high",
        headerName: "5% below weekly high",
        headerTooltip: "5% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "ten_below_weekly_high",
        headerName: "10% below weekly high",
        headerTooltip: "10% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "fifteen_below_weekly_high",
        headerName: "15% below weekly high",
        headerTooltip: "15% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "twenty_below_weekly_high",
        headerName: "20% below weekly high",
        headerTooltip: "20% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "twentyfive_below_weekly_high",
        headerName: "25% below weekly high",
        headerTooltip: "25% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "thirty_below_weekly_high",
        headerName: "30% below weekly high",
        headerTooltip: "30% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "thirtyfive_below_weekly_high",
        headerName: "35% below weekly high",
        headerTooltip: "35% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "forty_below_weekly_high",
        headerName: "40% below weekly high",
        headerTooltip: "40% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "fortyfive_below_weekly_high",
        headerName: "45% below weekly high",
        headerTooltip: "45% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "fifty_below_weekly_high",
        headerName: "50% below weekly high",
        headerTooltip: "50% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "fiftyfive_below_weekly_high",
        headerName: "55% below weekly high",
        headerTooltip: "55% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "sixty_below_weekly_high",
        headerName: "60% below weekly high",
        headerTooltip: "60% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "sixtyfive_below_weekly_high",
        headerName: "65% below weekly high",
        headerTooltip: "65% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "seventy_below_weekly_high",
        headerName: "70% below weekly high",
        headerTooltip: "70% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "seventyfive_below_weekly_high",
        headerName: "75% below weekly high",
        headerTooltip: "75% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "eighty_below_weekly_high",
        headerName: "80% below weekly high",
        headerTooltip: "80% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "eightyfive_below_weekly_high",
        headerName: "85% below weekly high",
        headerTooltip: "85% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "ninety_below_weekly_high",
        headerName: "90% below weekly high",
        headerTooltip: "90% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "ninetyfive_below_weekly_high",
        headerName: "95% below weekly high",
        headerTooltip: "95% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "ninetynine_below_weekly_high",
        headerName: "99% below weekly high",
        headerTooltip: "99% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
    ],
      rowData: null,
      gridOptions: null,
      gridApi: null,
      domLayout: "autoHeight",
      defaultColDef: null,
      frameworkComponents: null,
      modules: AllCommunityModules,
      textFilterParams: null,
      base_currency: "usd",
      base_currencies: ["usd", "btc", "eth"],
    };
  },
  computed: mapState(["config"]),
  beforeDestroy() {
    this.unwatch();
  },
  watch: {
    "$store.state.config.rowHeight": {
      deep: true,
      handler(newVal) {
        this.groupHeight = newVal;
        this.gridApi.resetRowHeights();
      },
    },
    "$store.state.config.pivot": {
      deep: true,
      handler(newVal) {
        this.gridColumnApi.setPivotMode(newVal);
      },
    },
    "$store.state.config.toolPanel": {
      deep: true,
      handler(newVal) {
        this.gridApi.setSideBarVisible(newVal);
      },
    },
  },

  components: {
    AgGridVue,
  },
  beforeMount() {
    this.textFilterParams = {
      debounceMs: 50,
    };
    this.gridOptions = {};
    // this.gridOptions = {
    //   pagination: true,
    //   paginationPageSize: 10,
    // };
    this.columnDefs = [
      {
        field: "symbol",
        headerTooltip: "Symbol",
        rowDrag: true,
        pivot: true,
        pinned: "left",
        enableRowGroup: true,
        filter: "agTextColumnFilter",
        filterParams: this.textFilterParams,
      },
      {
        field: "current_price",
        headerName: "Current price",
        headerTooltip: "Current price",
        pivot: true,
        type: "numericColumn",
        pinned: "left",
        width: 120,
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "weekly_high",
        headerName: "Weekly high",
        headerTooltip: "Weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "weekly_low",
        headerName: "Weekly low",
        headerTooltip: "Weekly low",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "increase_weekly_low",
        headerName: "% Increase from weekly low",
        headerTooltip: "% Increase from weekly low",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "decrease_weekly_high",
        headerName: "% Difference from weekly high",
        headerTooltip: "% Difference from weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "twofive_below_weekly_high",
        headerName: "2.5% below weekly high",
        headerTooltip: "2.5% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "five_below_weekly_high",
        headerName: "5% below weekly high",
        headerTooltip: "5% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "ten_below_weekly_high",
        headerName: "10% below weekly high",
        headerTooltip: "10% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "fifteen_below_weekly_high",
        headerName: "15% below weekly high",
        headerTooltip: "15% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "twenty_below_weekly_high",
        headerName: "20% below weekly high",
        headerTooltip: "20% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "twentyfive_below_weekly_high",
        headerName: "25% below weekly high",
        headerTooltip: "25% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "thirty_below_weekly_high",
        headerName: "30% below weekly high",
        headerTooltip: "30% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "thirtyfive_below_weekly_high",
        headerName: "35% below weekly high",
        headerTooltip: "35% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "forty_below_weekly_high",
        headerName: "40% below weekly high",
        headerTooltip: "40% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "fortyfive_below_weekly_high",
        headerName: "45% below weekly high",
        headerTooltip: "45% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "fifty_below_weekly_high",
        headerName: "50% below weekly high",
        headerTooltip: "50% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "fiftyfive_below_weekly_high",
        headerName: "55% below weekly high",
        headerTooltip: "55% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "sixty_below_weekly_high",
        headerName: "60% below weekly high",
        headerTooltip: "60% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "sixtyfive_below_weekly_high",
        headerName: "65% below weekly high",
        headerTooltip: "65% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "seventy_below_weekly_high",
        headerName: "70% below weekly high",
        headerTooltip: "70% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "seventyfive_below_weekly_high",
        headerName: "75% below weekly high",
        headerTooltip: "75% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "eighty_below_weekly_high",
        headerName: "80% below weekly high",
        headerTooltip: "80% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "eightyfive_below_weekly_high",
        headerName: "85% below weekly high",
        headerTooltip: "85% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "ninety_below_weekly_high",
        headerName: "90% below weekly high",
        headerTooltip: "90% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "ninetyfive_below_weekly_high",
        headerName: "95% below weekly high",
        headerTooltip: "95% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
      {
        field: "ninetynine_below_weekly_high",
        headerName: "99% below weekly high",
        headerTooltip: "99% below weekly high",
        pivot: true,
        type: "numericColumn",
        floatingFilterComponent: "sliderFloatingFilter",
        floatingFilterComponentParams: {
          maxValue: 500,
          suppressFilterButton: true,
        },
        filter: "agNumberColumnFilter",
        suppressMenu: false,
      },
    ];
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 120,
      filter: true,
      floatingFilter: true,
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
    };

    this.frameworkComponents = { sliderFloatingFilter: SliderFloatingFilter };

    this.rowSelection = "multiple";
  },

  mounted() {
    this.groupHeight = this.$store.state.rowHeight;
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
    this.gridColumnApi.setPivotMode(this.$store.state.config.pivot);

    this.groupHeight = this.$store.state.config.rowHeight;
    this.gridApi.resetRowHeights();
    this.gridApi.setSideBarVisible(this.$store.state.config.toolPanel);
  },
  methods: {
    getGridRowData: async function () {
      fetch(
        `http://localhost:8000/api/getCoingeckoInfo?base_currency=${this.base_currency}`
      )
        .then((result) => result.json())
        .then((rowData) => {
          this.rowData = rowData.map((each) => {
            return {
              ...each,
              symbol: each.symbol.toUpperCase(),
              weekly_high: `${(each.weekly_high * 1.0).toFixed(8)}`,
              weekly_low: `${(each.weekly_high * 1.0).toFixed(8)}`,
              decrease_weekly_high: this.tweakDecreaseWeeklyHigh(
                each.decrease_weekly_high_one,
                each.decrease_weekly_high_two
              ),
            };
          });
        });
    },

    onCurrencyChange(event) {
      this.base_currency = event.target.value;
      this.getGridRowData();
    },

    tweakDecreaseWeeklyHigh(one, two) {
      if (two > 0) {
        return `-${two}`;
      } else if (two < 0) {
        return `+${two * -1.0}`;
      } else if (one > 0) {
        return `-${one}`;
      } else if (one < 0) {
        return `+${one * -1.0}`;
      }
    },

    getRowHeight(params) {
      console.log("params=prices-------",params)
      console.log("prices==groupHeight="+this.groupHeight)
      return this.groupHeight;
    },
  },

  async created() {
    await this.getGridRowData();
  },
};
</script>
