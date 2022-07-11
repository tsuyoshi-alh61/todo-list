import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { withCookies } from "react-cookie";
import TodoList from '../todos/TodoList';
import { callGetTodoAll } from '../../apiCaller/read';
import { callAddTodoApi } from '../../apiCaller/create';
import { defaultSortTodo } from '../todos/UtilFunction';

function Dashboard(props) {
    const history = useNavigate();
    const { cookies } = props;

    // state定義
    const [todos, setTodos] = useState([]);
    const [open, setOpen] = useState(false);

    // TODO登録モーダルの開閉処理
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        if(cookies['cookies']['name']) {
            getTodos(cookies['cookies']['id']);
        } else {
            history('/signin');
        }
    }, [])

    /**
     * TODOを全件取得
     */
    function getTodos(userId) {
        callGetTodoAll(userId)
        .then(res => {
            callSetTodos(res.data);
        })
    }

    async function callSetTodos(todos) {
        await defaultSortTodo(todos).then(result => {
            setTodos(result);
        })
    }

    /**
     * TODOを登録
     * @param {object} todo 
     */
    function addTodo(todo) {
        // Todoを登録するAPI呼び出し
        callAddTodoApi(todo);
        // モーダルを閉じる
        handleClose();
        // 最新のデータを取得
        getTodos(cookies['cookies']['id']);
    }

    return (
        <TodoList 
            todos={todos}
            addTodo={(todo) => addTodo(todo)}
            open={open}
            setOpen={() => setOpen()}
            handleOpen={() => handleOpen()}
            handleClose={() => handleClose()}
        />
    )
}

export default withCookies(Dashboard);