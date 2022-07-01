import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import CommonLink from './common/CommonLink';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const useStyles = makeStyles(() => ({
    root: {
        flex: 1
    }
}));

function getCookie() {
    var cookies = document.cookie; //全てのcookieを取り出して
    var cookiesArray = cookies.split(';'); // ;で分割し配列に

    for(var c of cookiesArray){ //一つ一つ取り出して
        var cArray = c.split('='); //さらに=で分割して配列に
        if( cArray[0] == 'name'){ // 取り出したいkeyと合致したら
            let cookieValue = cArray[1]
            return { 'name': cookieValue};  // [key,value] 
        }
    }
}

export default function Navbar() {
    const { auth } = useSelector(state => state);
    const refCookie = useRef(auth.cookie);
    const [ cookieState, setCookieState ] = useState(getCookie() ?? {});
    const classes = useStyles();

    useEffect(() => {
        refCookie.current = auth.cookie;
    }, [auth.cookie]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // redux storeのデータを使って何かする処理
            // refUsers.currentを参照させる
            setCookieState(auth.cookie);
        }, 5000);
        return function () {
          clearInterval(intervalId);
        };
    }, []);

    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                {/*  */}
                <Typography variant='h6' component='div' className={classes.root}>
                    <CommonLink to='/' content={'To-Doリスト'}/>
                </Typography>
                {/*  */}
                <SignedInLinks styles={'buttonSpacing'} cookie={cookieState} />
                <SignedOutLinks styles={'buttonSpacing'} cookie={cookieState} />
            </Toolbar>
        </AppBar>
    )
}