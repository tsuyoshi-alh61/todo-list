import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import Dashboard from "./dashboard/Dashboard";
import TodoDetails from "./todos/TodoDetails";
import SignIn from "./authentication/Signin";
import SignUp from "./authentication/Signup";

export default function RootContents() {
    return (
        <BrowserRouter>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item sm={2} />
                        <Grid item xs={12} sm={8}>
                            <Routes>
                                <Route exact path='/' element={<Dashboard />} />
                                <Route path='/todo/:id' element={<TodoDetails />} />
                                <Route path='/signin' element={<SignIn />} />
                                <Route path='/signup' element={<SignUp />} />
                            </Routes>
                        </Grid>
                    <Grid item sm={2} />
                </Grid>
            </Grid>
        </BrowserRouter>
    )
}