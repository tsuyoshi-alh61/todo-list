import React from 'react';
import axios from "axios";

export async function callUserAuthentication(user) {
    return await axios.post('http://127.0.0.1:8000/api/user/login', user);
}