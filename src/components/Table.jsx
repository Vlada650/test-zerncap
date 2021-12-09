import React, { useState } from 'react'
import EditForm from './EditForm.jsx';

export default function Table({ persons, loadModes }) {

    const [showEdit, setShowEdit] = useState(false);
    const [italic, setItalic] = useState(false);
    const [value, setValue] = useState({
        name: persons.name,
        email: persons.email,
        website: persons.website,
        company: persons.company.name,
        id: persons.id
    });

    return (
        <>
            <div hidden={!showEdit} className='modal-edit'>
                <EditForm persons={persons} value={value} setItalic={setItalic} setValue={setValue} loadModes={loadModes} setShowEdit={setShowEdit}></EditForm></div>
            <tr className={italic ? "table italic-data" : 'table'}>
                <td className="table__cell_numb">{value.id}</td>
                <td className="table__cell">{value.name}</td>
                <td className="table__cell">{value.email}</td>
                <td className="table__cell">{value.website}</td>
                <td className="table__cell">{value.company}</td>
                <td className="table__cell">
                    <button className="table__button" onClick={() => setShowEdit(true)}>Edit</button>
                </td>
            </tr>
        </>)

}