import * as ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  displayBackdrop: false,
};

const uiState = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SHOW_BACKDROP:
            return {
            ...state,
            displayBackdrop: true
            };
        case ACTION_TYPES.HIDE_BACKDROP:
            return {
            ...state,
            displayBackdrop: false
            };
        default:
            return state;
    }
};
export default uiState;

export const showBackdrop = () => {
    return {
        type: ACTION_TYPES.SHOW_BACKDROP
    };
};
  
export const hideBackdrop = () => {
    return {
        type: ACTION_TYPES.HIDE_BACKDROP
    };
};
