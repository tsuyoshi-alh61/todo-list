import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import CommonLink from './common/CommonLink';
import { deleteCookie } from '../../actions/authActions';

function SignedInLink(props) {
    const history = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    function logoutEvent() {
        removeCookie('name');
        props.deleteCookie();
        history('/signin');
    }

    return (
        <React.Fragment>
            <Button color='inherit' variant='outlined' className={props['styles']} onClick={() => logoutEvent()}>
                <CommonLink content={'ログアウト'}/>
            </Button>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCookie: () => dispatch(deleteCookie())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLink);