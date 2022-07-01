import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import CommonLink from './common/CommonLink';
import { createCookie } from '../../actions/authActions';

function SignedInLink(props) {
    const history = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    function logoutEvent() {
        removeCookie('name');
        props.createCookie({});
        history('/signin');
    }

    if(props['cookie']['name']) {
        return (
            <React.Fragment>
                <Button color='inherit' variant='outlined' className={props['styles']} onClick={() => logoutEvent()}>
                    <CommonLink content={'ログアウト'}/>
                </Button>
            </React.Fragment>
        )
    }

    return null;
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCookie: (cookie) => dispatch(createCookie(cookie))
    }
}

export default connect(null, mapDispatchToProps)(SignedInLink);