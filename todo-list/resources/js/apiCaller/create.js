import React from "react";
import axios from 'axios';

/**
 * 
 * @param {*} todo 
 */
export async function callAddTodoApi(todo) {
  await axios.post(window.location.origin + '/api/todo/post', todo)
  .then(res => {
    console.log(res);
    console.log("Todoの登録成功");
  })
  .catch((e) => {
    console.log(e)
  })
}

export async function callRegisterUserApi(user) {
  return await axios.post(window.location.origin + '/api/user/register', user);
}