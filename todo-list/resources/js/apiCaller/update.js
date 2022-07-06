import React from "react";
import axios from "axios";

/**
 * 
 * @param {*} todo 
 */
export async function callUpdateTodo(todo) {
    await axios.post(window.location.origin + '/api/todo/update', todo)
    .then(res => {
      console.log(res);
      console.log("Success")
    })
    .catch((e) => {
      console.log(e)
    })
}