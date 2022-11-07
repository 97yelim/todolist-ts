import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios';
import './App.css';
import GlobalStyle from './GlobalStyle';



function App() {
  
  const [updatecrr, setUpdatecrr] = useState(false)
  const onSubmit = (todo: {id: number, title: string, contents: string, date: string, isDone: boolean}) => {
    axios.post("http://localhost:3001/todo", todo)
    setUpdatecrr(!updatecrr)
  };
  console.log(updatecrr)
  return(
    <div className="App">
      <div>
        <Form onSubmit={onSubmit} />
        <List updatecrr={updatecrr}/>
        <GlobalStyle/>
      </div>
    </div>
  );
}

export default App;
