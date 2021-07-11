import React from 'react'
import Location from './Location'
import axios from "axios";

export default function LocationList() {

    const locationAPI = (url = '') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    const addOrEdit = (formData, onSuccess) => {
        locationAPI().create(formData)
        .then(res => {
            onSuccess();
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">Add locations</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Location 
                addOrEdit = {addOrEdit}
                />
            </div>
            <div className="col-md-8">
                <div>List of Locations</div>
            </div>
        </div>
    )
}
