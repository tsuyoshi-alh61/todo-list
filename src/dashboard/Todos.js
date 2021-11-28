import React from 'react';

const Todos = ({todos, deleteTodo, changeEditMode}) => {
    const reversedArr = todos.reduceRight((prev, next) => [...prev, next], []) // 配列の反転
    const byPriority = reversedArr.sort(function(prev, next) {
        if (prev.priority.value >= next.priority.value) {
            return 1;
        } else {
            return -1;
        }
    });
    function customDate(date, format) { // Dateオブジェクトの変換
        if(date) {
            format = format.replace(/YYYY/, date.getFullYear());
            format = format.replace(/MM/, date.getMonth() + 1);
            format = format.replace(/DD/, date.getDate());
            return format;
        }
    }
    const todoList = todos.length ? (
        byPriority.map(todo  => {
            function prioTextColor() {
                switch(todo.priority.value) {
                    case '1':
                        return 'red-text'
                }
            }
            return (
                <div className="row" key={todo.id}>
                    <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{todo.title}</span>
                        <p>{todo.content}</p>
                        <p>完了期限：{customDate(todo.date, 'YYYY年MM月DD日')} 
                            {todo.date.getDate() - 1　=== new Date().getDate() && (
                                <span className="yellow-text"> : 期限が近いです！</span>
                            )}
                            {todo.date.getDate() === new Date().getDate() && (
                                <span className="red-text"> : 期日です！</span>
                            )}
                        </p>
                        </div>
                        <div className="card-action">
                            <a href="#" onClick={() => changeEditMode(todo.id)}>UPDATE</a>
                            <a href="#" onClick={() => deleteTodo(todo.id)}>DELETE</a>
                            <a href="#" className={prioTextColor()}>優先度：{todo.priority.label}</a>
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