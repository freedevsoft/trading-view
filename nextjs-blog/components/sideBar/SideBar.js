import React, { useRef } from "react";
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
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import IconButton from '@material-ui/core/IconButton';
import Modal from 'react-modal';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
export default function SideBar(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div style={{height:'100%', width:'50px',height:650, backgroundColor:'white', marginTop:"35px"}}>   
      
        <IconButton className="btn" onClick={onClick}> 
            <SettingsApplicationsIcon/>
        </IconButton>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li style={{fontSize:'17px'}}>
              <span style={{fontSize:'16px',color:"black"}}>Row Height</span><br/>
              <input type="range"  min='1' max="100" />
            </li>
            <li>
            <input type="checkbox"/><span style={{fontSize:'16px',color:"black"}}>Enable pivot</span>
            </li>
            <li>
            <input type="checkbox"/><span style={{fontSize:'16px',color:"black"}}>Enable ToolPanel</span>
            </li>
          </ul>
        </nav>
        <style jsx global>{`
     
      .menu-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .menu-trigger {
        background: black;
        border-radius: 90px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 6px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        border: none;
        vertical-align: middle;
        transition: box-shadow 0.4s ease;
        margin-left: 20px; /* Strictly for positioning */
      }
      
      .menu-trigger:hover {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
      }
      .MuiIconButton-root :active {
        background-color: #4CAF50;
      }
      .MuiIconButton-root :hover {
        background-color: #4CAF50;
      }
      .menu-trigger span {
        font-weight: 700;
        vertical-align: middle;
        font-size: 12px;
        margin: 0 10px;
      }
      
      .menu-trigger img {
        border-radius: 90px;
      }
      
      .menu {
        border-radius: 8px;
        position: absolute;
        top: 114px;
        left: 50px;
        z-index:100;
        width: 260px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
      }
      
      .menu.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .menu ul {
        border-radius: 10px;
        padding: 10px!important;
        background: #333;
        list-style: none;
        padding: 0;
        margin: 0;
      }
     
      .menu li {
        padding-right: 7px;
        background: #333;
        // border-bottom: 1px solid #dddddd;
      }
      
      .menu li a {
        text-decoration: none;
        color: white;
        padding: 15px 20px;
        display: block;
      }
      input[type="range"] {
        margin-left:4px;
        width: 100%;
        height: 2px;
        border-radius: 8px;
        background: var(--color-bg-blue-400);
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
      `}</style>
      
    </div>
  );
}
