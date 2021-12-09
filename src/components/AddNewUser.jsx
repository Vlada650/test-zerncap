import React, { useState, useEffect } from 'react'

export default function AddNewUser({ setShowAdd }) {

    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: !e.target.value })
    }

    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState({
        name: false,
        email: false,
        website: false,
        company: false
    });
    const [value, setValue] = useState({
        name: '',
        email: '',
        website: '',
        company: ''
    });

    const cancelFunc = () => {
        setShowAdd(false);
        setValue({
            name: '',
            email: '',
            website: '',
            company: ''
        })
    }

    const saveFunc = () => {
        setValue({
            name: '',
            email: '',
            website: '',
            company: ''
        })

        //funcAddNew();
    }

    const validation = () => {
        if (value.name === '') {
            setError({ ...error, name: 'Field cannot be empty' })
        }
        else if (value.email === '') {
            setError({ ...error, email: 'Field cannot be empty' })
        }
        else if (value.website === '') {
            setError({ ...error, website: 'Field cannot be empty' })
        }
        else if (value.company === '') {
            setError({ ...error, company: 'Field cannot be empty' })
        }
        else (setDisabled(true))
    }
    /*const funcAddNew = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: '',
                name: value.name,
                username: "",
                email: value.email,
                address: {
                    street: "",
                    suite: "",
                    city: "",
                    zipcode: "",
                    geo: {
                        lat: "",
                        lng: ""
                    }
                },
                phone: "",
                website: value.website,
                company: {
                    name: value.company,
                    catchPhrase: "",
                    bs: ""
                }
            })onClick={funcAddNew}
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong...');
                }
            })
        }*/
    return (<>

        <div className='add'>
            <h2 className='add__header'>Add new user!</h2>
            <input type="text" name='name' className='add__input' placeholder='User Name' onBlur={validation} value={value.name} onChange={onChange} />
            <p className='error'><br />{error.name && error.name}</p>
            <input type="text" name='email' className='add__input' placeholder='User Email' onBlur={validation} value={value.email} onChange={onChange} />
            <p className='error'><br />{error.email && error.email}</p>
            <input type="text" name='website' className='add__input' placeholder='User Website' onBlur={validation} value={value.website} onChange={onChange} />
            <p className='error'><br />{error.website && error.website}</p>
            <input type="text" name='company' className='add__input' placeholder='User Company Name' onBlur={validation} value={value.company} onChange={onChange} />
            <p className='error'><br />{error.website && error.website}</p>
            <div className='add__buttons-container'>
                <button className={!disabled ? 'disabled-btn' : "add__buttons-btn"} onClick={saveFunc} disabled={!disabled} >Save</button>
                <button className="add__buttons-btn" onClick={cancelFunc} >Cancel</button>
            </div>
        </div>
    </>
    )
}