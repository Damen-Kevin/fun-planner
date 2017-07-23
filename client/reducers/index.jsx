
import { combineReducers } from 'redux';
import ActivityList from './activity_list';
import ActivityInfo from './activity_info';

const rootReducer = combineReducers({
    activity_list: ActivityList,
    activity_info: ActivityInfo
});

export default rootReducer;