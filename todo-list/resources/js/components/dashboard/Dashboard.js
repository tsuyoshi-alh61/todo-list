import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { withCookies } from "react-cookie";
import TodoList from '../todos/TodoList';
import { callGetTodoAll } from '../../apiCaller/read';
import { callAddTodoApi } from '../../apiCaller/create';

function Dashboard(props) {
    const history = useNavigate();
    const { cookies } = props;
    // state定義
    const [toDos, setTodos] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        if(cookies['cookies']['name']) {
            getTodos();
        } else {
            history('/signin');
        }
    }, [])

    /**
     * 
     */
    function getTodos() {
        callGetTodoAll()
        .then(res => {
            setTodos(res.data)
        })
    }

    /**
     * 
     * @param {object} todo 
     */
    function addTodo(todo) {
        // Todoを登録するAPI呼び出し
        callAddTodoApi(todo);
        // モーダルを閉じる
        handleClose();
        // 最新のデータを取得
        getTodos();
    }

    return (
        <TodoList 
            toDos={toDos}
            addTodo={(todo) => addTodo(todo)}
            open={open}
            setOpen={() => setOpen()}
            handleOpen={() => handleOpen()}
            handleClose={() => handleClose()}
        />
    )
}

export default withCookies(Dashboard);