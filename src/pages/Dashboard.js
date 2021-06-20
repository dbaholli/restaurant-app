import { createMuiTheme, makeStyles, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import SideMenu from '../components/Dashboard/SideMenu';
import '../styles/Dashboard.css'
import Header from "../components/Dashboard/Header";
import PageHeader from '../components/Dashboard/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Inventory from '../components/Dashboard/pages/Inventory';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: "#3c44b126"
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
        overrides: {
            MuiAppBar: {
                root: {
                    transform:'translateZ(0)'
                }
            }
        },
        props: {
            MuiIconButton: {
                disableRipple:true
            }
        }
    }
})

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
})

function Dashboard() {
    const classes = useStyles();
    
    return (
        <ThemeProvider theme={theme}>
        <SideMenu />
            <div className={classes.appMain}>
                <Header />
                
            <Inventory />
        </div> 
        <CssBaseline />
    </ThemeProvider>
    )
}

export default Dashboard;