import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { withCookies } from "react-cookie";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import CommonLink from './common/CommonLink';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { createCookie } from '../../actions/authActions';

const useStyles = makeStyles(() => ({
    root: {
        flex: 1
    }
}));

function Navbar(props) {
    const { cookies } = props;
    const classes = useStyles();

    useEffect(() => {
        if(_.isEmpty(props.auth)) {
            props.createCookie(cookies['cookies']['name']);
        }
    }, [])

    const links = !_.isEmpty(props.auth.cookie) ? (
        <SignedInLinks styles={'buttonSpacing'} />
    ) : (
        <SignedOutLinks styles={'buttonSpacing'} />
    );

    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography variant='h6' component='div' className={classes.root}>
                    <CommonLink to='/' content={'To-Doリスト'}/>
                </Typography>
                {links}
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCookie: (cookie) => dispatch(createCookie(cookie))
    }
}

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Navbar));