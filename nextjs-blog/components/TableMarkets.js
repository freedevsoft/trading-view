import SideBar from "../components/sideBar/SideBar"
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MenuModule } from '@ag-grid-enterprise/menu';
import {ModuleRegistry} from '@ag-grid-community/core';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import React, {useState} from 'react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

ModuleRegistry.registerModules([
    ServerSideRowModelModule,
    MenuModule
  ]);
function TableMarkets() {
   
    const [state,setState]=useState({
        columnDefs: [  
            {
              field: "token.time",
              headerName: "Time",
              sortable: true,
              filter: 'agTextColumnFilter',
            },
            {
              headerName: "Factory",
              marryChildren: true,
              children: [
                {
                  field: "factory.id",
                  sortable: true,
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
          ],
        defaultColDef : {
            flex: 1,
            minWidth: 120,
            enableValue: true,
            enableRowGroup: true,
            enablePivot: true,
            sortable: true,
            filter: 'agTextColumnFilter',
            resizable: true,
          },
          rowSelection : "multiple",
          rowModelType: 'serverSide',
          paginationPageSize: 20,
          cacheBlockSize: 20,
    })
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        if(gridApi)gridApi.setSideBarVisible(true)
        params.api.setServerSideDatasource(datasource);
      };
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
   
  return (
    <div  style={{height:650,display:'flex'}}>
      <SideBar/>
      <div style={{height:650,width:'90%'}}>
        <div style={{width:'90%',marginTop:'40px',marginLeft:'25px' }}>
             <h1>Markets</h1>   
        </div>
        <div id="myGrid" className="ag-theme-alpine-dark" style={{height: 600, width: '100%',marginLeft:'25px'}}>
                <AgGridReact
                    groupMultiAutoColumn={true}
                    enableRangeSelection={true}
                    enableRangeHandle={true}
                    rowDragManaged={true}
                    enableMultiRowDragging={true}
                    animateRows={true}
                    showOpenedGroup={true}
                    serverSideStoreType={'partial'}
                    sideBar={true}
                    columnDefs={state.columnDefs}
                    defaultColDef={state.defaultColDef}
                    rowModelType={state.rowModelType}
                    pagination={true}
                    paginationPageSize={state.paginationPageSize}
                    cacheBlockSize={state.cacheBlockSize}
                    onGridReady={onGridReady}
                    >
                </AgGridReact>
        </div>
      </div>
    </div>
  )
}

export default TableMarkets