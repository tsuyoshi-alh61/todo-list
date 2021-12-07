import React, { Component } from "react";
import axios from 'axios';
import Todos from './dashboard/Todos';
import Post from './dashboard/Post';
import Update from './dashboard/Update';

class Example extends Component {
  state = {
    todos: [
      // {id: 1, title: 'test', dead_line: new Date(), priority: 3},
      // {id: 2, title: 'study', dead_line: new Date(), priority: 2},
      // {id: 3, title: 'study', dead_line: null, priority: null},
      // {id: 4, title: 'work', dead_line: new Date(), priority: 1}
    ],
    editMode: false,
    targetData: []
  }
  componentDidMount() {
    this.getTodos()
  }
  getTodos = () => {
    axios.get('http://127.0.0.1:8000/api/todos')
    .then(res => {
      this.setState({
        todos: res.data
      })
    })
  }
  /*
  * ToDoリストの追加
  */
  addTodo = (todo) => {
    todo['dead_line'] = this.getStringFromDate(todo['dead_line'])
    axios.post('http://127.0.0.1:8000/api/post', todo)
    .then(res => {
      console.log(res);
      console.log("Success")
      this.setState({
        todos: [...this.state.todos, res.data]
      })
    })
    .catch((e) => {
      console.log(e)
    })
  }
  /*
  * ToDoリストの削除
  */
  deleteTodo = (id) => {
    var data = {'data':{'id': id}};
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    axios.delete('http://127.0.0.1:8000/api/delete', data)
    .then(res => {
      console.log(res);
      console.log("Success")
      this.getTodos()
    })
    .catch((e) => {
      console.log(e)
    })
  }
  /*
  * ToDoリストの編集
  */
  updateTodo = (todo) => {
    todo['dead_line'] = this.getStringFromDate(todo['dead_line'])
    axios.post('http://127.0.0.1:8000/api/update', todo)
    .then(res => {
      console.log(res);
      console.log("Success")
      this.getTodos()
      this.setState({
        editMode: !this.state.editMode,
        targetData: []
      })
    })
    .catch((e) => {
      console.log(e)
    })
  }
  getStringFromDate(date) {
    if(date) {
      var year_str = date.getFullYear();
      var month_str = 1 + date.getMonth();
      var day_str = date.getDate();
  
      var format_str = 'YYYY-MM-DD';
      format_str = format_str.replace(/YYYY/g, year_str);
      format_str = format_str.replace(/MM/g, month_str);
      format_str = format_str.replace(/DD/g, day_str);
      return format_str;
    }
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

export default Example;