import React, { useState, useEffect } from 'react'
import { Grid, } from "@material-ui/core";
import Controls from "../../controls/Controls"
import { useForm, Form } from "../../../components/useForm";
import * as inventoryService from "../../../services/inventoryService";

const availabilityItems = [
    { id: 'yes', title: 'yes'},
    { id: 'no', title: 'no'},
]

const initialFValues = {
    id: 0,
    name: '',
    email: '',
    mobile: '',
    city: '',
    availability: 'yes',
    departmentId: '',
    orderDate: new Date(),
    isPermanent: false,
}

export default function InventoryForm() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="name"
                        label="Name"
                        value={values.Name}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid> 
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="availability"
                        label="Availability"
                        value={values.availability}
                        onChange = {handleInputChange}
                        items={availabilityItems}
                    />
                    <Controls.Select
                    name="departmentId"
                    label="Department"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={inventoryService.getDepartmentCollection()}
                    />
                    
                </Grid>   
            </Grid>
        </Form>
    )
}
