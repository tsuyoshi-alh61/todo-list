import React from 'react';

const Todos = ({todos, deleteTodo, changeEditMode}) => {
    const reversedArr = todos.reduceRight((p, c) => [...p, c], []) // 配列の反転
    const todoList = todos.length ? (
        reversedArr.map(todo  => {
            return (
                <div className="row" key={todo.id}>
                    <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{todo.title}</span>
                        <p>{todo.content}</p>
                        </div>
                        <div className="card-action">
                            <a href="#" onClick={() => changeEditMode(todo.id)}>UPDATE</a>
                            <a href="#" onClick={() => deleteTodo(todo.id)}>DELETE</a>
                        </div>
                    </div>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="center">タスクがありません。</p>
    )
    return (
        <div className="todos">
            {todoList}
        </div>
    )
}

export default Todos