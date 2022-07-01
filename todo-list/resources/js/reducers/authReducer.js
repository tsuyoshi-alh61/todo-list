const initState = {
    cookie: {}
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_COOKIE':
            state.cookie = action.cookie;
            return state;
    }
    return state;
};

export default authReducer;