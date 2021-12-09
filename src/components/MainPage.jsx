import React, { useState } from 'react';
import Table from './Table';
import AddNewUser from './AddNewUser.jsx';
import { observer, inject } from "mobx-react";

const MainPage = inject(['AppStore'])(observer(({ AppStore, users }) => {

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
                        {users.map((users) => {
                            return (
                                <Table key={users.id} users={users} />)
                        })}
                    </div>
                </div>
                <div className="main__btn-container">
                    <button className="main__button" onClick={() => setShowAdd(true)}>Add new user</button></div>
                <div hidden={!showAdd} className='modal-add'>
                    <AddNewUser setShowAdd={setShowAdd} funcAddNew={AppStore.funcAddNew} onClick={() => setShowAdd(true)}></AddNewUser></div>
            </div>
        </div>)
}))

export default MainPage;
