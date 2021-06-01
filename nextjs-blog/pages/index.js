import Link from 'next/link'
import Layout from "../components/Layout";
import SideBar from "../components/sideBar/SideBar"
import TablePrices from "../components/TablePrices"
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import React, {useState} from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function Home() {
  return (
    <Layout>
       <TablePrices/>
    </Layout>
  )
}

export default Home

