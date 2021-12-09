import './App.css';
import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import './styles/styles.css';

function App() {

  const [persons, setPersones] = useState([]);
  const [isFetching, setFething] = useState(false);

  useEffect(() => {
    loadModes();
  }, []);

  function loadModes() {
    setFething(true)
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(response => {
        setPersones(response);
      })
      .catch(err => console.log('Failed to fetch'))
      .finally(fin => setFething(false))
  }


  if (isFetching) {
    return <p>Loading... Please, wait</p>
  }

  return (
    <>
      <MainPage persons={persons} loadModes={loadModes} />
    </>
  );

}

export default App;
