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

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('name' in fieldValues)
            temp.name = fieldValues.name?"":"This field is required."
        if('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid."
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length>9?"":"Minimum 10 numbers required."
        if('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ?"":"This field is required."
        setErrors({
            ...temp
        })

        if(fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
    e.preventDefault();
    if (validate())
        inventoryService.insertSupplier(values)
        resetForm()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="name"
                        label="Name"
                        value={values.Name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Controls.Input
                        label="email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
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
                    error={errors.departmentId}
                    />
                    <Controls.DatePicker
                    name="orderDate"
                    label="Order Date"
                    value={values.orderDate}
                    onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                    name="isPermanent"
                    label="Permanent Supplier"
                    value={values.isPermanent}
                    onChange={handleInputChange}
                    />
                    
                    <div>
                        <Controls.Button
                        type="submit"
                        text="Submit" />
                        <Controls.Button
                        text="Reset"
                        color="default"
                        onClick={resetForm} />
                    </div>
                </Grid>   
            </Grid>
        </Form>
    )
}
