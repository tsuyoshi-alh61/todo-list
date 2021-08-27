import React, { Component } from "react";
import Todos from './dashboard/Todos';
import Post from './dashboard/Post';
import Update from './dashboard/Update';

class App extends Component {
  state = {
    todos: [
      {id: 1, title: 'test', content: 'first test'},
      {id: 2, title: 'study', content: 'first study'}
    ],
    editMode: false,
    targetData: []
  }
  /*
  * ToDoリストの追加
  */
  addTodo = (todo) => {
    const lastElement = this.state.todos.slice(-1)[0];
    todo.id = lastElement.id + 1;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  /*
  * ToDoリストの削除
  */
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  /*
  * ToDoリストの編集
  */
  updateTodo = (todo) => {
    let todos = this.state.todos
    for(let i=0;i<todos.length;i++) {
      if(todos[i].id === todo.id) {
        Object.assign(todos[i], todo)
      }
    }
    this.setState({
      todos,
      editMode: !this.state.editMode,
      targetData: []
    })
  }
  /*
  * 特定のToDoリストを編集モードで更新を可能にする
  */
  changeEditMode = (id) => {
    let targetData = []
    for(let i=0;i<this.state.todos.length;i++) {
      if(this.state.todos[i].id === id) {
        targetData = this.state.todos[i]
      }
    }
    this.setState({
      ...this.state,
      editMode: !this.state.editMode,
      targetData
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">ToDoリスト</h1>
        {this.state.editMode ? (
          <Update
            todos={this.state.todos}
            targetData={this.state.targetData}
            updateTodo={this.updateTodo}
          />
        ) : (
          <>
            <Post 
              addTodo={this.addTodo}
            />
            <Todos 
              todos={this.state.todos}
              changeEditMode={this.changeEditMode}
              deleteTodo={this.deleteTodo}
            />
          </>
        )
        }
      </div>
    );
  }
}

export default App;
