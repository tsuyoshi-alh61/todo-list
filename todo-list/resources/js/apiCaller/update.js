import React from "react";
import axios from "axios";

/**
 * 
 * @param {*} todo 
 */
export async function callUpdateTodo(todo) {
    await axios.post('http://127.0.0.1:8000/api/todo/update', todo)
    .then(res => {
      console.log(res);
      console.log("Success")
    })
    .catch((e) => {
      console.log(e)
    })
}