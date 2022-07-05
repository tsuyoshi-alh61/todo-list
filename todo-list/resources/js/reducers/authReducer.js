const initState = {};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_COOKIE':
            return {
                ...state,
                cookie: action.cookie
            };
        case 'DELETE_COOKIE':
            return {
                ...state,
                cookie: action.cookie
            };
        default:
            return state;

    }
};

export default authReducer;