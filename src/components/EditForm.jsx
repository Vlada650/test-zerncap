import React from 'react'

export default function EditForm({ users, setShowEdit, value, setValue, setItalic, updateUser, deleteUser }) {

    const id = users.id;
    const onSearchChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
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

    return (
        <>
            <div className='add'>
                <h2 className='add__header'>Edit user!</h2>
                <input type="text" name='name' className='add__input' value={value.name} onChange={onSearchChange} />
                <input type="text" name='email' className='add__input' value={value.email} onChange={onSearchChange} />
                <input type="text" name='website' className='add__input' value={value.website} onChange={onSearchChange} />
                <input type="text" name='company' className='add__input' value={value.company} onChange={onSearchChange} />
                <div className='add__buttons-container'>
                    <button className="add__buttons-btn" onClick={updateFunc}>Update</button>
                    <button className="add__buttons-btn" onClick={deleteFunc}>Delete</button>
                    <button className="add__buttons-btn" onClick={cancelFunc} >Cancel</button>
                </div>
            </div>
        </>
    )
}
