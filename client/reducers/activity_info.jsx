import { DISPLAY_ACTIVITY_INFO } from '../actions/index';

const INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case DISPLAY_ACTIVITY_INFO:
            console.log('activity info payload:', action.payload);
            return action.payload;
        default:
            return state;
    }
}