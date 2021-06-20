import React from 'react'
import InventoryForm from './InventoryForm'
import PageHeader from '../PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

export default function Inventory() {

    const classes = useStyles();

    return (
        <>
        <PageHeader
                title="New Stock"
                subTitle="Page Description"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <InventoryForm />
            </Paper>
        </>
    )
}
