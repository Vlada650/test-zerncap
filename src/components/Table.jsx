import React, { useState } from 'react'
import EditForm from './EditForm.jsx';
import { observer, inject } from "mobx-react";

const Table = inject(['AppStore'])(observer(({ AppStore, users }) => {

    const [showEdit, setShowEdit] = useState(false);
    const [italic, setItalic] = useState(false);
    const [value, setValue] = useState({
        name: users.name,
        email: users.email,
        website: users.website,
        company: users.company.name,
        id: users.id
    });

    return (
        <>
            <div hidden={!showEdit} className='modal-popup'>
                <EditForm users={users} value={value} setValue={setValue} deleteUser={AppStore.deleteUser}
                    updateUser={AppStore.updateUser} setItalic={setItalic} setShowEdit={setShowEdit}></EditForm></div>
            <div className={italic ? "table edited" : 'table'}>
                <p className="table__cell_numb">{value.id}</p>
                <p className="table__cell">{value.name}</p>
                <p className="table__cell">{value.email}</p>
                <p className="table__cell_site">{value.website}</p>
                <p className="table__cell">{value.company}</p>
                <p>
                    <button className="buttons__small btn" onClick={() => setShowEdit(true)}>Edit</button>
                </p>
            </div>
        </>)

}))

export default Table;