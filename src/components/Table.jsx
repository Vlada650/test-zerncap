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
            <div hidden={!showEdit} className='modal-edit'>
                <EditForm users={users} value={value} setValue={setValue}
                    deleteUser={AppStore.deleteUser} updateUser={AppStore.updateUser}
                    setItalic={setItalic} setShowEdit={setShowEdit}></EditForm></div>
            <tr className={italic ? "table edited" : 'table'}>
                <td className="table__cell_numb">{value.id}</td>
                <td className="table__cell">{value.name}</td>
                <td className="table__cell">{value.email}</td>
                <td className="table__cell">{value.website}</td>
                <td className="table__cell">{value.company}</td>
                <td className="table__cell_btn">
                    <button className="table__button" onClick={() => setShowEdit(true)}>Edit</button>
                </td>
            </tr>
        </>)

}))

export default Table;