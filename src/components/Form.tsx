import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";


type FormProps = {
    onSubmit: (todo: {id: number, title: string, contents: string, date: string, isDone: boolean}) => void;

}


const Form = ({onSubmit}: FormProps) => {
   
    const [todo, setTodo] = useState({
        id: 0,
        title:'',
        contents:'',
        date:'',
        isDone: false
    })
    const [todoId, setTodoId] = useState(0)
    const todoList = async() => {
        const res = await axios.get("http://localhost:3001/todo");
        const data = res.data
        setTodoId(data[data.length - 1]?.id) 
     }

    useEffect(()=>{
        todoList()
    },[])

    

    const { title, contents } = todo
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setTodo({
            ...todo,
            id: 1,
            [name] : value
        })
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const createDate = new Date();
        console.log(todoId)
        onSubmit({
            ...todo,
            id:todoId + 1,
            date:`${createDate.getFullYear()}/${createDate.getMonth()}/${createDate.getDate()}`
        })
        setTodo({
            id:0,
            title:'',
            contents:'',
            date:'',
            isDone: false
        })
    }
    return (
        <div> 
            <HeaderContainer>
                <div>
                    <p>MY TODO LIST</p>
                    <p>REACT+TYPESCRIPT</p>
                </div>
                <form onSubmit={submitHandler}>
                    <div>
                        <p>
                            <span>제목</span>
                            <input type="text" name='title' value={title} onChange={onChange} placeholder='제목을 입력하세요.'/>
                        </p>
                        <p>
                            <span>내용</span>
                            <input type="text" name='contents' value={contents} onChange={onChange} placeholder='내용을 입력하세요.'/>
                        </p>
                    </div>
                    <button type='submit'>
                        <i className='xi-plus-circle'></i>
                    </button>
                </form>
            </HeaderContainer>
        </div>
    );
};

export default Form;

const HeaderContainer = styled.div`
    width: 1200px;
    margin: 50px auto;
    box-shadow: var(--shadow);
    box-sizing: border-box;
    color: var(--font-color-2);
    border-radius: 20px;
    >div{
        display: flex;
        justify-content: space-between;
        background-color: var(--dark-4);
        padding: 20px 20px 20px 20px;
        line-height: 50px;
        border-radius: 20px 20px 0 0px;
        p{
            font-family: 'LeferiPoint-BlackObliqueA';
        }
    }
    form{
        background-color: var(--dark-3);
        display: flex;
        justify-content: space-between;
        padding: 20px 20px 20px 20px;
        border-radius: 0 0 20px 20px;
        >div{
            display: flex;
            p{
                margin-right: 20px;
                span{
                    margin-right: 10px;
                    color: var(--font-color-1);
                }
                input{
                    background-color: var(--dark-2);
                    border: none;
                    padding: 10px;
                    border-radius: 20px;
                    margin-right: 30px;
                    width: 400px;
                    color: var(--font-color-1);
                }
            }
        }
        button{
            border-radius: 20px;
            border: none;
            background-color: transparent;
            font-size: 2em;
            color: var(--point-color);
            transition: all .3s;
            cursor: pointer;
            &:hover {
                color: var(--point-color-hover)
            }
        }
    }
`