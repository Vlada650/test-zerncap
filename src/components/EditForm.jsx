import React from 'react'

export default function EditForm({ persons, setShowEdit, value, setValue, setItalic, loadModes }) {

    //const id = persons.id;
    const onSearchChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    const cancelFunc = () => {
        setShowEdit(false);
        setValue({
            name: persons.name,
            email: persons.email,
            website: persons.website,
            company: persons.company.name,
            id: persons.id
        })
    }

    const updateFunc = () => {
        //updateUser();
        setItalic(true);
        setShowEdit(false);
    }

    const deleteFunc = () => {
        //deleteUser();
        setShowEdit(false);
    }

    /*const updateUser = () => {
        debugger
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name: value.name,
                email: value.email,
                website: value.website,
                company: {
                    name: value.company,
                }
            })
        })
            .then(response => {  
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так');
                }
                //console.log('edited')
            })
            .then(loadModes)
    }*/
    /*const deleteUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('removed');
                } else {
                    throw new Error('Что-то пошло не так');
                }
            })
    };*/

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
