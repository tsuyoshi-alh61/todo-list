import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { callUserAuthentication } from "../../apiCaller/auth";
import { createCookie } from '../../actions/authActions';

function Signin(props) {
    const history = useNavigate();
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    })
    const [cookies, setCookie] = useCookies(["name"]);

    function handleInputChange(e) {
        setInputValues({ ...inputValues, [e.target.id]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        // ユーザー認証API呼び出し
        callUserAuthentication(inputValues)
        .then(res => {
            setCookie('name', res.data.name);
            setCookie('id', res.data.id);
            props.createCookie(res.data.name);
            history('/');
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div className='signIn mainLayout'>
            <Box
                component='form'
                autoComplete='off'
            >  
                <Typography variant="h5" component="h2">
                    サインイン画面
                </Typography>
                <FormControl variant="standard" margin="dense">
                    <TextField
                        sx={{ m: 2 }}
                        id='email'
                        label='メールアドレス'
                        type='email'
                        defaultValue={inputValues.email}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl variant="standard" margin="dense">
                    <TextField
                        id='password'
                        label='パスワード'
                        type='password'
                        defaultValue={inputValues.password}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl variant="standard" margin="dense">
                    <Button color='primary' variant="contained" onClick={handleSubmit}>ログイン</Button>
                </FormControl>
            </Box>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCookie: (cookie) => dispatch(createCookie(cookie))
    }
}

export default connect(null, mapDispatchToProps)(Signin);