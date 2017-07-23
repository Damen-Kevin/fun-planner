import { REMOVE_ACTIVITY } from '../actions/index';
import { FETCH_ACTIVITY_LIST } from '../actions/index';

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
        console.log('remove this:')
        console.log(action.payload)
        console.log('from:')
        console.log(state)
        return state
    case "FETCH_ACTIVITY_LIST":
        return state
    default:
        return state
  }
}