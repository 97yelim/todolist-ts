import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface ListProps {
    id: number,
    title: string,
    contents: string,
    date:string,
    isDone:boolean,
}
type updateProps = {
    updatecrr: boolean
}

const List= ({updatecrr}:updateProps) => {
    const [todoList, setTodoList] = useState <ListProps[]>([])
    const [update, setUdate] = useState(false)
    const getList = async() => {
        const res = await axios.get("http://localhost:3001/todo")
        setTodoList(res.data)
    }

    useEffect(()=>{
        getList()
    },[update, updatecrr])

    
    const deleteHandler = (todo_id: number) => {
        axios.delete(`http://localhost:3001/todo/${todo_id}`)
        console.log('delete')
        setUdate(!update)
    }

    const toggleHandler = (todo: ListProps) =>{
        const toggleCheck = {
            id: todo.id,
            title: todo.title,
            contents: todo.contents,
            date: todo.date,
            isDone: !todo.isDone
        }
        axios.put(`http://localhost:3001/todo/${todo.id}`, toggleCheck)
       setUdate(!update)
    }
    console.log(todoList)
    return (
        <div>
            <Title>Working</Title>
            <TodoWrap>
                {todoList?.map((todo: ListProps) => {
                    return(
                        todo.isDone === false ?
                        <div key={todo.id}>
                            <h2>{todo.title}</h2>
                            <p>{todo.contents}</p>
                            <div>
                                <div className="leftBtn">
                                    <button onClick={()=> toggleHandler(todo)}>
                                        {todo.isDone === false ? <i className='xi-check-circle'></i> : <i className="xi-minus-circle"></i>}
                                    </button>
                                    <button onClick={()=> deleteHandler(todo.id)}>
                                        <i className="xi-trash"></i>
                                    </button>
                                </div>
                                <div className="rightBtn">
                                    <p>{todo.date}</p>
                                </div>
                            </div>
                        </div>
                        : null
                    )
                })}
            </TodoWrap>
            <Title>Done</Title>
            <TodoWrap>
                {todoList?.map((todo: ListProps) => {
                    return(
                        todo.isDone === true ?
                        <div key={todo.id}>
                            <h2>{todo.title}</h2>
                            <p>{todo.contents}</p>
                            <div>
                                <div className='btn'>
                                    <button onClick={()=> toggleHandler(todo)}>
                                        {todo.isDone === true ? <i className="xi-minus-circle"></i> : <i className='xi-check-circle'></i>}
                                    </button>
                                    <button onClick={()=> deleteHandler(todo.id)}>
                                        <i className="xi-trash"></i>
                                    </button>
                                </div>
                                <div className='date'>
                                    <p>{todo.date}</p>
                                </div>
                            </div>
                        </div>
                        : null
                    )
                })}
            </TodoWrap>
        </div>
    );
};

export default List;

const Title = styled.h1`
    width: 1200px;
    margin: 0 auto;
    color: var(--font-color-3);
    font-family: 'LeferiPoint-BlackObliqueA';
    font-size: 2em;
    line-height: 2em;
`
const TodoWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--line);
  &:last-of-type{
    border: none;
    opacity: .4;
  }
  >div {
    width: 386px;
    background-color: var(--dark-3);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    margin: 10px 0;
    margin-right: 20px;
    box-shadow: var(--shadow);
    &:nth-child(3n){
      margin-right: 0;
    }
    h2 {
      color : var(--font-color-1);
      font-size: 1.3em;
      font-weight: bold;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--line);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    p {
      color: var(--font-color-3);
      padding: 10px 0;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
    div{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      button{
        background-color: transparent;
        border: none;
        i{
          font-size: 1.4em;
          transition: all .3s;
          cursor: pointer;
        }
      }
      .xi-plus-circle{
        color :var(--font-color-3);
        margin-right: 10px;
        &:hover{
          color: var(--font-color-1);
        }
      }
      .xi-check-circle {
        color: #0acb8a;
        &:hover{
          color: #29f8b2;
        }
      }
      .xi-trash{
        color:var(--font-color-3);
        &:hover{
          color: #db4545;
        }
      }
      .xi-minus-circle{
        color:var(--font-color-3);
        &:hover{
          color: #db4545;
        }
      }
    }
  }
`;