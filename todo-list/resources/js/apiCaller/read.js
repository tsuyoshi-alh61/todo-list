import React from "react";
import axios from "axios";


export async function callGetTodoAll() {
    return await axios.get('http://127.0.0.1:8000/api/todo/all');
}

export async function callGetTodoByIdApi(id) {
    return await axios.get('http://127.0.0.1:8000/api/todo/' + id);
}