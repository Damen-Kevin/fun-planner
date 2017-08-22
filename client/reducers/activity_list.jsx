import _ from 'underscore';

import { REMOVE_ACTIVITY } from '../actions/index';
import { 
    FETCH_ACTIVITY_LIST_REQUEST,
    FETCH_ACTIVITY_LIST_SUCCESS,
    FETCH_ACTIVITY_LIST_FAILURE 
} from '../actions/index';

const INITIAL_STATE = [
    {
        "id": 1,
        "title": "test1",
        "location": "test1",
        "category": "test1"
    },
    {
        "id": 2,
        "title": "activty2",
        "location": "location2",
        "category": "cat2"
    },
    {
        "id": 3,
        "title": "activty3",
        "location": "location3",
        "category": "cat3"
    }
]

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case REMOVE_ACTIVITY:
        return _.difference(state, [action.payload])
    case FETCH_ACTIVITY_LIST_REQUEST:
        return state; 
    case FETCH_ACTIVITY_LIST_SUCCESS:
        return action.payload;
    case FETCH_ACTIVITY_LIST_FAILURE:
        return state;
    default:
        return state
  }
}