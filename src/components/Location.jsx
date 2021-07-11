import React, { useState, useEffect } from 'react'
import { validate } from 'uuid';


const defaultImageSrc = '/img/imageLocation.png'

const initialFValues = {
    locationId: 0,
    locationName: '',
    description: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null
}

export default function Location(props) {

    const {addOrEdit} = props
    
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const showPreview = e => {
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc : x.target.result 
                })
            }
            reader.readAsDataURL(imageFile)
        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc : defaultImageSrc 
            }) 
        }
    }

    const validate = () => {
        let temp = {}
        temp.locationName = values.locationName==""?false:true;
        temp.imageSrc = values.imageSrc==defaultImageSrc?false:true;
        setErrors(temp)
        return Object.values(temp).every(x => x==true)
    }

    const resetForm = () => {
        setValues(initialFValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if(validate()){
            const formData = new FormData()
            formData.append('locationId', values.locationId)
            formData.append('locationName', values.locationName)
            formData.append('description', values.description)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData,resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field]==false)?' invalid-field':'')

    return (
        <>
        <div className="container text-center">
            <p className="lead">A location</p>
        </div>
        <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
            <div className="card">
                <img src = {values.imageSrc} className="card-img-top" />
                <div className="card-body">
                    <div className="form-group">
                        <input type="file" accept="image/*" className={"form-control-file"+applyErrorClass('imageSrc')}
                            onChange= {showPreview} id="image-uploader" />
                    </div>
                    <div className="form-group">
                        <input className={"form-control"+applyErrorClass('locationName')} placeholder="Location Name" name="locationName"
                            value={values.locationName} 
                            onChange = {handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Description" name="description"
                            value={values.description} 
                            onChange = {handleInputChange} />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-light">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}
