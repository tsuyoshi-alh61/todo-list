import React from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CommonLink from './common/CommonLink';

export default function SignedInLink({styles, cookie, setCookieState}) {
    const history = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["name"]);

    function logoutEvent() {
        removeCookie('name');
        setCookieState({});
        history('/signin');
    }

    if(cookie['name']) {
        return (
            <React.Fragment>
                <Button color="inherit" variant="outlined" className={styles} onClick={() => logoutEvent()}>
                    <CommonLink to='/' content={`ログアウト`}/>
                </Button>
            </React.Fragment>
        )
    }

    return null;
}