import React from 'react';

const Todos = ({todos, deleteTodo, changeEditMode}) => {
    const sortByPriority = todos.sort((prev, next) => next.priority - prev.priority);
    function priorityLabel(priority) {
        switch(priority) {
            case 3:
                return "高い"
            case 2:
                return "普通"
            case 1:
                return "低い"
            default:
                return "なし"
        }
    }
    function customDate(dead_line, format) { // Dateオブジェクトの変換
        const date = new Date(dead_line)
        if(dead_line) {
            format = format.replace(/YYYY/, date.getFullYear());
            format = format.replace(/MM/, date.getMonth() + 1);
            format = format.replace(/DD/, date.getDate());
            return format;
        }
        return "なし";
    }
    function deadLine(dead_line) {
        const date = new Date(dead_line)
        if(date) {
            return (
                <span>
                    <span>{customDate(dead_line, 'YYYY年MM月DD日')}</span>
                    <span>
                        {date.getDate() - 1　=== new Date().getDate() && (
                            <span className="yellow-text"> : 期限が近いです！</span>
                        )}
                    </span>
                    <span>
                        {date.getDate() === new Date().getDate() && (
                            <span className="red-text"> : 期日です！</span>
                        )}
                    </span>
                </span>
            )
        } else {
            return (
                <span>なし</span>
            )
        }
    }
    const todoList = todos.length ? (
        sortByPriority.map(todo  => {
            function prioTextColor() {
                switch(todo.priority) {
                    case '3':
                        return 'red-text'
                }
            }
            return (
                <div className="row" key={todo.id}>
                    <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{todo.title}</span>
                        <p>完了期限：{deadLine(todo.dead_line)}</p>
                        </div>
                        <div className="card-action">
                            <a href="#" onClick={() => changeEditMode(todo.id)}>UPDATE</a>
                            <a href="#" onClick={() => deleteTodo(todo.id)}>DELETE</a>
                            <a href="#" className={prioTextColor()}>優先度：{priorityLabel(todo.priority)}</a>
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