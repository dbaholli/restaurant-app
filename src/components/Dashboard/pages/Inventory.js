import React, {useState} from 'react'
import InventoryForm from './InventoryForm'
import PageHeader from '../PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../../components/useTable";
import * as inventoryService from "../../../services/inventoryService";
import Controls from "../../controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "../../../components/Notification";
import ConfirmDialog from '../../ConfirmDialog';

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    },
    searchInput: {
        width:'75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))

const headCells = [
    {id: 'name',label: 'Supplier Name'},
    {id: 'email',label: 'Email Address'},
    {id: 'mobile',label: 'Mobile Number'},
    {id: 'department',label: 'Department' },
    {id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Inventory() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(inventoryService.getAllSuppliers())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({isOpen:false, message: '', type:''})
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.name.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (supplier, resetForm) => {
        if (supplier.id == 0)
            inventoryService.insertSupplier(supplier)
        else 
            inventoryService.updateSupplier(supplier)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(inventoryService.getAllSuppliers())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = id => {
            setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
            inventoryService.deleteSupplier(id);
            setRecords(inventoryService.getAllSuppliers())
            setNotify({
                isOpen: true,
                message: 'Deleted Successfully',
                type: 'error'
            })
    }

    return (
        <>
        <PageHeader
                title="New Stock"
                subTitle="Page Description"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                
                <Toolbar>
                    <Controls.Input
                        label = "Search Suppliers"
                        className = {classes.searchInput}
                            InputProps= {{
                                startAdornment: (<InputAdornment position="start">
                                    <Search />
                                </InputAdornment>)
                            }}
                            onChange = {handleSearch}
                    />
                    <Controls.Button
                    text = "Add New"
                    variant = "outlined"
                    startIcon = {<AddIcon />}
                    className = {classes.newButton}
                    onClick = {() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick = {() => {openInPopup(item)}}>
                                        <EditOutlinedIcon fontSize="small"/>
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure to delete this record ?',
                                                    subTitle: "You can't undo this operation",
                                                    onConfirm: () => { onDelete(item.id) }
                                                }) 
                                            }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                                )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title = "Inventory Form"
                openPopup = {openPopup}
                setOpenPopup={setOpenPopup}
            >
                <InventoryForm
                recordForEdit = {recordForEdit} 
                addOrEdit={addOrEdit}/>
            </Popup>
            <Notification 
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog 
            confirmDialog = {confirmDialog}
            setConfirmDialog = {setConfirmDialog}
            />
        </>
    )
}
