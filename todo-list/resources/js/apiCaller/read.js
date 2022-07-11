import React from "react";
import axios from "axios";


export async function callGetTodoAll(userId) {
    return await axios.get(window.location.origin + '/api/todo/all/' + userId);
}

export async function callGetTodoByIdApi(id) {
    return await axios.get(window.location.origin + '/api/todo/' + id);
}