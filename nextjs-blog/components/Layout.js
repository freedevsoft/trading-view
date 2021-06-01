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
import styles from '../styles/theme.module.css'
import { useSelector, useDispatch } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const useCounter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  const handleChangeColor = (color) =>
    dispatch({
      type: 'COLOR',
      color:color
    })
  const decrement = () =>
    dispatch({
      type: 'DECREMENT',
    })
  const reset = () =>
    dispatch({
      type: 'RESET',
    })
  return { count, handleChangeColor, decrement, reset }
}


export default function Layout(props) {
  const classes = useStyles();
  const { color, handleChangeColor, decrement, reset } = useCounter()
  const [state, setState] = React.useState({
    themeColor: "dark"
  });

  React.useEffect(() => {
    handleChangeColor(state.themeColor)
    if (state.themeColor=='dark') {
      document.querySelector("nav").className =styles.dark
      document.querySelector("#myGrid").className ="ag-theme-alpine-dark"
      console.log('Theme color is dark');
    } else {
      console.log('Theme color is light.');
      document.querySelector("nav").className =styles.light
      document.querySelector("#myGrid").className ="ag-theme-alpine"
    }
  }, [state.themeColor]);
  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]:event.target.value,
    })
  };
  return (
    <div>      
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js = 💖</title>
      </Head>
      <Grid container  spacing={2}>
        <nav>
            <Grid  item xs={6} sm={2} style={{maxWidth: '10%',minWidth:'100px'}}>
                <Link href="/">
                     <a><MonetizationOnIcon style={{ fontSize: '25px' }}/><span>Prices</span></a>
                </Link>
            </Grid>
            <Grid  item xs={6} sm={2} style={{maxWidth: '11%',minWidth:'100px'}}>
                <Link href="/markets">
                    <a><AccountBalanceIcon/><span>Markets</span></a>
                </Link>
            </Grid>
            <Grid item xs={12} sm={10}></Grid>
            <Grid item xs={3} sm={1}>
                <Grid >
                     <FormControl style={{minWidth: 120}} >
                            <InputLabel>Theme color</InputLabel>
                            <Select
                                native
                                value={state.themeColor}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'themeColor'
                                }}
                            >
                            <option value={'light'}>Light Theme</option>
                            <option value={'dark'}>Dark Theme</option>
                            </Select>
                        </FormControl>
                </Grid>
            </Grid>
        </nav>
       </Grid>  
      <div id="main">{props.children}</div>

      <style jsx>{`
       
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          padding: 3.5rem 0 0;
        }
      `}</style>
    </div>
  );
}
