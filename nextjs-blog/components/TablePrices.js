import React from 'react';
import Head from "next/head";
import Link from "next/link";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import SideBar from "./sideBar/SideBar"
import {AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
export default function TablePrices(props) {
    
    const [rowData, setRowData] = React.useState([
        {},
    ]);
    const [state, setState] = React.useState({
        base_currency:'usd',
        color: '',
        columnDefs :[
            {
              field: "symbol",
              headerTooltip: "Symbol",
              rowDrag: true,
              pivot: true,
              pinned: "left",
              enableRowGroup: true,
              filter: "agTextColumnFilter"
            },
            {
              field: "current_price",
              headerName: "Current price",
              headerTooltip: "Current price",
              pivot: true,
              type: "numericColumn",
              pinned: "left",
              width: 120,
              
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
              
              floatingFilterComponentParams: {
                maxValue: 500,
                suppressFilterButton: true,
              },
              filter: "agNumberColumnFilter",
              suppressMenu: false,
            },
          ],
        defaultColDef : {
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
          },
      });
      React.useEffect(() => {
        if (state.color=='dark') {
          console.log('Theme color is dark');
        } else {
          console.log('Theme color is light.');
        }
      }, [state.color]);
      React.useEffect(() => {
        getRowData()
      }, [state.base_currency]);

      const handleChange = (event) => {
        const name = event.target.name;
        console.log( event.target.value)
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
      const [gridApi, setGridApi] = React.useState(null);
      const [gridColumnApi, setGridColumnApi] = React.useState(null);
      const updateData = (data) => {
        console.log("data===============",data)
        const  _rowData = data.map((each) => {
             return {
               ...each,
               symbol: each.symbol.toUpperCase(),
               weekly_high: `${(each.weekly_high * 1.0).toFixed(8)}`,
               weekly_low: `${(each.weekly_high * 1.0).toFixed(8)}`,
               decrease_weekly_high: tweakDecreaseWeeklyHigh(
                 each.decrease_weekly_high_one,
                 each.decrease_weekly_high_two
               ),
             };})
         setRowData(_rowData)
     };
      const onGridReady = (params) => {
        console.log("onGrid Ready")
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        getRowData()
      };
      const getRowData=()=>{
        fetch(
            `https://eshop.elit.sk/Catalog/Categories/39849642`
          )
          .then((resp) => resp.json())
          .then((data) =>{updateData(data)})
          .catch((err) => {
            console.log(err)
          })
          console.log(state.base_currency)
      }
      const tweakDecreaseWeeklyHigh=(one, two)=> {
        if (two > 0) {
          return `-${two}`;
        } else if (two < 0) {
          return `+${two * -1.0}`;
        } else if (one > 0) {
          return `-${one}`;
        } else if (one < 0) {
          return `+${one * -1.0}`;
        }
      };
    
    return (
        <div  style={{height:650,display:'flex'}}>   
             <SideBar/>
        <div style={{height:650,width:'90%'}}>
            <div style={{width:'90%',marginTop:'40px',marginLeft:'25px'}}>
                <h1 >Prices</h1>
                <FormControl style={{minWidth: 120}} >
                        <InputLabel>Base Currency:</InputLabel>
                        <Select
                            native
                            value={state.base_currency}
                            onChange={handleChange}
                            inputProps={{name: 'base_currency'}}>
                                <option value={'usd'}>USD</option>
                                <option value={'btc'}>BTC</option>
                                <option value={'eth'}>ETH</option>
                        </Select>
                </FormControl>
            </div>
            <div
                id="myGrid"
                style={{
                height: '500px',
                width: '100%',
                textAlign:'center',
                marginLeft:'25px'
                }}
                className="ag-theme-alpine-dark"
                >
                <AgGridReact
                    sideBar={true}
                    columnDefs={state.columnDefs}
                    defaultColDef={state.defaultColDef}
                    onGridReady={onGridReady}
                    rowData={rowData}
                >
                </AgGridReact>
                </div>
            </div>
        </div>
        
    );
}
