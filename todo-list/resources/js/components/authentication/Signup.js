import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { callRegisterUserApi } from '../../apiCaller/create';

export default function SignUp() {
    const history = useNavigate();
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    })

    function handleInputChange(e) {
        setInputValues({ ...inputValues, [e.target.id]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        callRegisterUserApi(inputValues)
        .then(res => {
            console.log(res);
            console.log('ユーザー登録成功');
            history('/');
        })
        .catch(e => {
            console.log(e);
        });
    }

    return (
        <div className='signUp mainLayout'>
            <Box
                component='form'
                autoComplete='off'
            >  
                <Typography variant="h5" component="h2">
                    サインアップ画面
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