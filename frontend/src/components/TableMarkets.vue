<template>
  <div class="text-left bg-white z-0 w-auto w-full p-10 pt-2 rounded-br-lg">
    <ag-grid-vue
      style="width: 100%; height: max-content"
      class="ag-theme-alpine"
      domLayout="autoHeight"
      :gridOptions="gridOptions"
      :getRowHeight="getRowHeight"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :autoGroupColumnDef="autoGroupColumnDef"
      :groupMultiAutoColumn="true"
      :enableRangeSelection="true"
      :enableRangeHandle="true"
      :rowDragManaged="true"
      :enableMultiRowDragging="true"
      :animateRows="true"
      :showOpenedGroup="true"
      :rowStyle="{ border: 'none' }"
      rowSelection="multiple"
      :sideBar="true"
      @grid-ready="onReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { AgGridVue } from "ag-grid-vue3";
// import { AllModules } from "@ag-grid-enterprise/all-modules";
import "ag-grid-enterprise";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
// import { MenuModule } from "@ag-grid-enterprise/menu";
// import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
// import { SetFilterModule } from "@ag-grid-enterprise/set-filter";

export default {
  name: "TableMarkets",
  data() {
    return {
      groupHeight: this.$store.state.config.rowHeight,
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      domLayout: "autoHeight",
      columnApi: null,
      defaultColDef: {
        resizable: true,
      },
      autoGroupColumnDef: null,
      rowGroupPanelShow: null,
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
        // this.gridOptions.api.resetRowHeights();
      },
    },
    "$store.state.config.tooltip": {
      deep: true,
     
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
    this.gridOptions = {
      pagination: true,
      rowModelType: 'serverSide',
      cacheBlockSize: 20, // you can have your custom page size
      paginationPageSize: 20, //pagesize
      // serverSideStoreType: 'full',
    };
    this.columnDefs = [
      // {
      // 	headerName: "Stake",
      // 	field: "stake",
      // 	sortable: true,
      // 	filter: 'agTextColumnFilter',
      // 	cellRenderer: this.stakeCellRenderer,
      // },

      { field: "token.time", headerName: "Time", sortable: true, filter: true },
      {
        headerName: "Factory",
        marryChildren: true,
        children: [
          {
            field: "factory.id",
            sortable: true,
            filterType: 'text',
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",

          },
          {
            field: "factory.pairCount",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "factory.totalVolumeUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "factory.totalVolumeETH",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "factory.untrackedVolumeUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "factory.totalLiquidityUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "factory.totalLiquidityETH",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "factory.txCount",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
        ],
      },
      {
        headerName: "Token",
        marryChildren: true,
        children: [
          {
            field: "token.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",
          },
          {
            field: "token.symbol",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "token.name",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "token.decimals",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "token.tradeVolume",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "token.tradeVolumeUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "token.untrackedVolumeUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "token.txCount",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "token.totalLiquidity",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "token.derivedETH",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
        ],
      },
      {
        headerName: "Pair",
        marryChildren: true,
        children: [
          {
            field: "pair.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",
          },
          {
            field: "pair.token0.name",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "pair.token1.name",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "pair.reserve0",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "pair.reserve1",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "pair.totalSupply",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "pair.reserveETH",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "pair.reserveUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "pair.trackedReserveETH",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "pair.token0Price",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "pair.token1Price",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "pair.volumeToken0",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "pair.volumeToken1",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "pair.volumeUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "pair.untrackedVolumeUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "pair.txCount",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "pair.createdAtTimestamp",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "pair.createdAtBlockNumber",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
        ],
      },
      {
        headerName: "User",
        marryChildren: true,
        children: [
          {
            field: "user.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",
          },
          {
            field: "user.usdSwapped",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
        ],
      },
      {
        headerName: "Transaction",
        marryChildren: true,
        children: [
          {
            field: "transaction.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",
          },
          {
            field: "transaction.blockNumber",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "transaction.timestamp",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
        ],
      },
      {
        headerName: "Mint",
        marryChildren: true,
        children: [
          {
            field: "mint.transaction.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",
          },
          {
            field: "mint.timestamp",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "mint.pair.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "mint.to",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "mint.liquidity",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "mint.sender",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "mint.amount0",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "mint.amount1",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "mint.logIndex",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "mint.amountUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
        ],
      },
      {
        headerName: "Burn",
        marryChildren: true,
        children: [
          {
            field: "burn.transaction.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",
          },
          {
            field: "burn.timestamp",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "burn.pair.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "burn.liquidity",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "burn.sender",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "burn.amount0",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "burn.amount1",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "burn.to",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "burn.logIndex",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "burn.amountUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "burn.needsComplete",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
        ],
      },
      {
        headerName: "Swap",
        marryChildren: true,
        children: [
          {
            field: "swap.transaction.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",
          },
          {
            field: "swap.timestamp",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "swap.pair.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "swap.sender",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "swap.amount0In",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "swap.amount1In",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "swap.amount0Out",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "swap.amount1Out",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
          {
            field: "swap.to",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "swap.logIndex",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "open",
          },
          {
            field: "swap.amountUSD",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
        ],
      },
      {
        headerName: "Bundle",
        marryChildren: true,
        children: [
          {
            field: "bundle.id",
            sortable: true,
            filter: 'agTextColumnFilter',
            columnGroupShow: "null",
          },
          {
            field: "bundle.ethPrice",
            sortable: true,
            filter: 'agTextColumnFilter',
            type: "numericColumn",
            columnGroupShow: "open",
          },
        ],
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 120,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: 'agTextColumnFilter',
      resizable: true,
    };
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
    onReady: function() {
      const datasource = {
        getRows(params) {            
          console.log(JSON.stringify(params.request, null, 1));
          fetch('http://localhost:8000/api/getUniswapInfo', {
             method: 'POST',
             body: JSON.stringify(params.request),
             headers: {"Content-Type": "application/json; charset=utf-8"}
          })
          .then(httpResponse => httpResponse.json())
          .then(response => {
            console.log(response);
            params.successCallback(response.rows, response.lastRow);
          })
          .catch(error => {
            console.error(error);
            params.failCallback();
          })
        }
      };
      this.gridOptions.api.setServerSideDatasource(datasource);
    },
    getRowHeight(params) {
      console.log("market==groupHeight="+this.groupHeight)
      return this.groupHeight;
    },
  },

};
</script>
