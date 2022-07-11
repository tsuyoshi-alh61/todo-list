import React from 'react';
import axios from "axios";

export async function callUserAuthentication(user) {
    return await axios.post(window.location.origin + '/api/user/signin', user);
}