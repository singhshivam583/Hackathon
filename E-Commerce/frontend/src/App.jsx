import React, {useReducer, createContext } from 'react';
import './App.css';
import  { Footer, Header }  from './components';
import { Outlet } from 'react-router-dom';
import { initialState, reducer } from './reducer/useReducer.js';

export const UserContext = createContext(); 

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header/>
          <Outlet/>
        <Footer/> 
      </UserContext.Provider>
    </>
  )
}

export default App
