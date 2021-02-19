import { actionTypes } from "react-redux-form";
import { ADD_PARTNERS } from './ActionTypes';

export const Partners = (state = [], action) => {
    switch (action.type) {
        case ADD_PARTNERS:
            return {
                ...state,
                partners: action.payload
            }
        default:
            return state;
    }
};