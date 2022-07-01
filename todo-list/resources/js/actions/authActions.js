export const createCookie = (cookie) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_COOKIE', cookie});
    }
};