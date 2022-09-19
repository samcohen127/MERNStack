import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'

function App() {
  const [state, setState] = useState([])

  //CRUD OPERATIONS: 
  //Create, Read, Update, Delete

  //HTTP VERBS:
  //Post, Get, Put, Delete



  // useEffect(() => {
  //   axios.get('https://reqres.in/api/users')
  //     .then((res) => {
  //       console.log(res)
  //       setState([res.data.data])
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  // }, [])

  const makeCall = async () => {
    try {
      const results = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1200')
      setState(results.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    makeCall()
  }, [])


  return (
    <div className="App">
      <Header />
      {
        state.map((pokemon, index) => (
            <li style={{textTransform:'capitalize'}} key={index}>{pokemon.name}</li>))
      }
    </div>
  );
}

export default App;
