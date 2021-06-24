import React, {useState} from 'react'
import InventoryForm from './InventoryForm'
import PageHeader from '../PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell } from '@material-ui/core';
import useTable from "../../../components/useTable";
import * as InventoryService from "../../../services/inventoryService";

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

export default function Inventory() {

    const classes = useStyles();
    const [records, setRecords] = useState(InventoryService.getAllSuppliers())

    const {
        TblContainer
    } = useTable();

    return (
        <>
        <PageHeader
                title="New Stock"
                subTitle="Page Description"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <InventoryForm />
                <TblContainer>
                    <TableBody>
                        {
                            records.map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                </TableRow>)
                                )
                        }
                    </TableBody>
                </TblContainer>
            </Paper>
        </>
    )
}
