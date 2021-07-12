import React, { useState, useEffect } from 'react'
import Location from './Location'
import axios from "axios";

export default function LocationList() {

    const [locationList, setLocationList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshLocationList();
    }, [])

    const locationAPI = (url = 'https://localhost:5001/api/Location/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshLocationList() {
        locationAPI().fetchAll()
            .then(res => {
                setLocationList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('locationID') == "0")
            locationAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshLocationList();
                })
                .catch(err => console.log(err))
            else
                locationAPI().update(formData.get('locationID'), formData)
                    .then(res => {
                        onSuccess();
                        refreshLocationList();
                    })
                    .catch(err => console.log(err))
    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if(window.confirm('Are you sure you want to delete ?'))
        locationAPI().delete(id)
        .then(res => refreshLocationList())
        .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h5>{data.locationName}</h5>
                <span>{data.description}</span> <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.locationID))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )

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
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                            [...Array(Math.ceil(locationList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(locationList[3 * i])}</td>
                                    <td>{locationList[3 * i + 2] ? imageCard(locationList[3 * i + 1]) : null}</td>
                                    <td>{locationList[3 * i + 2] ? imageCard(locationList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
