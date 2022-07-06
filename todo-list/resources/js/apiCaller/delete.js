import React from "react";
import axios from "axios";

/**
 * 
 * @param {*} todo 
 */
export async function callDeleteTodoApi(todo) {
  await axios.delete(window.location.origin + '/api/todo/delete', {'data': todo})
    .then(res => {
      console.log(res);
      console.log("Success")
    })
    .catch((e) => {
      console.log(e)
    })
}