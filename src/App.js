import './App.css';
import React, { useEffect } from 'react';
import MainPage from './components/MainPage';
import './styles/styles.css';
import { observer, inject } from "mobx-react";

const App = inject(['AppStore'])(observer(({ AppStore }) => {

  useEffect(() => {
    AppStore.loadData();
  }, []);

  if (AppStore.isFetching) {
    return <p>Loading... Please, wait</p>
  }

  return (
    <>
      <MainPage users={AppStore.users} />
    </>
  );

}))

export default App;
