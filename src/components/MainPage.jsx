import React, { useState } from 'react';
import { observer, inject } from "mobx-react";
import Table from './Table';
import AddNewUser from './AddNewUser.jsx';

const MainPage = inject(['AppStore'])(observer(({ AppStore, users }) => {

    const [showAdd, setShowAdd] = useState(false);

    return (
        <main>
            <div className="main">
                <div className="main__container">
                    <div className="main__headline">
                        <p className="main__header_numb">Num</p>
                        <p className="main__header">Name</p>
                        <p className="main__header">Email</p>
                        <p className="main__header">Website</p>
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
                    <button className="main__button btn" onClick={() => setShowAdd(true)}>Add new user</button></div>
            </div>
            <div hidden={!showAdd} className='modal-popup'>
                <AddNewUser setShowAdd={setShowAdd} funcAddNew={AppStore.funcAddNew} onClick={() => setShowAdd(true)}></AddNewUser>
            </div>
        </main>)
}))

export default MainPage;
