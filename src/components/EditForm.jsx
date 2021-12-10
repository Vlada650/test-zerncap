import React, { useState } from 'react'

export default function EditForm({ users, value, setValue, setShowEdit, setItalic, updateUser, deleteUser }) {

    const id = users.id;
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState({
        name: false,
        email: false,
        website: false,
        company: false
    });

    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: !e.target.value });
    }

    const cancelFunc = () => {
        setShowEdit(false);
        setValue({
            name: users.name,
            email: users.email,
            website: users.website,
            company: users.company.name,
            id: users.id
        })
    }

    const updateFunc = () => {
        updateUser(id, value);
        setItalic(true);
        setShowEdit(false);
    }

    const deleteFunc = () => {
        deleteUser(id);
        setShowEdit(false);
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

    return (
        <>
            <div className='modal'>
                <h2 className='modal__header'>Edit user!</h2>
                <input type="text" name='name' className='modal__input' placeholder='User Name' onBlur={validation} value={value.name} onChange={onChange} />
                <p className='error'><br />{error.name && error.name}</p>
                <input type="text" name='email' className='modal__input' placeholder='User Email' onBlur={validation} value={value.email} onChange={onChange} />
                <p className='error'><br />{error.email && error.email}</p>
                <input type="text" name='website' className='modal__input' placeholder='User Website' onBlur={validation} value={value.website} onChange={onChange} />
                <p className='error'><br />{error.website && error.website}</p>
                <input type="text" name='company' className='modal__input' placeholder='User Company Name' onBlur={validation} value={value.company} onChange={onChange} />
                <p className='error'><br />{error.website && error.website}</p>
                <div className='buttons'>
                    <button className={!disabled ? 'disabled-btn' : "buttons__small btn"} onClick={updateFunc}>Update</button>
                    <button className="buttons__small btn" onClick={deleteFunc}>Delete</button>
                    <button className="buttons__small btn" onClick={cancelFunc}>Cancel</button>
                </div>
            </div>
        </>
    )
}
