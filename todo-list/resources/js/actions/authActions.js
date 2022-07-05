export const createCookie = (cookie) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_COOKIE', cookie});
    }
};

export const deleteCookie = () => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_COOKIE', cookie: ''});
    }
};