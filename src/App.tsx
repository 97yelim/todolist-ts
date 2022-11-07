import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios';
import './App.css';
import GlobalStyle from './GlobalStyle';

interface ListProps {
  update: boolean
}


function App() {
  
  const [update, setUpdate] = useState(false)

  const onSubmit = (todo: {id: number, title: string, contents: string, date: string, isDone: boolean}) => {
    axios.post("http://localhost:3001/todo", todo)
    setUpdate(!update)
    console.log(update)
  };
  return(
    <div className="App">
      <div>
        <Form onSubmit={onSubmit} />
        <List/>
        <GlobalStyle/>
      </div>
    </div>
  );
}

export default App;
