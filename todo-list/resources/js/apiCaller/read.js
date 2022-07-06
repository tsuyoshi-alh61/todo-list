import React from "react";
import axios from "axios";


export async function callGetTodoAll() {
    return await axios.get(window.location.origin + '/api/todo/all');
}

export async function callGetTodoByIdApi(id) {
    return await axios.get(window.location.origin + '/api/todo/' + id);
}