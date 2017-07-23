
import { combineReducers } from 'redux';
import ActivityList from './activity_list';

const rootReducer = combineReducers({
    activity_list: ActivityList
});

export default rootReducer;