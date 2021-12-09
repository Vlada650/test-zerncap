import React, { useState } from 'react';
import Table from './Table';
import AddNewUser from './AddNewUser.jsx';

export default function MainPage({ persons, loadModes }) {

    const [showAdd, setShowAdd] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="main">
                    <div className="main__headline">
                        <p className="main__header_numb">Num</p>
                        <p className="main__header">Name</p>
                        <p className="main__header">Email</p>
                        <p className="main__header_site">Website</p>
                        <p className="main__header">Company name</p>
                    </div>
                    <div>
                        {persons.map((persons) => {
                            return (
                                <Table key={persons.id} persons={persons} loadModes={loadModes} />)
                        })}
                    </div>
                </div>
                <div className="main__btn-container">
                    <button className="main__button" onClick={() => setShowAdd(true)}>Add new user</button></div>
                <div hidden={!showAdd} className='modal-add'>
                    <AddNewUser setShowAdd={setShowAdd} onClick={() => setShowAdd(true)}></AddNewUser></div>
            </div>
        </div>)
}