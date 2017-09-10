import { CALL_API } from 'redux-api-middleware';

const ROOT_URL = "/api/activities";

export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const DISPLAY_ACTIVITY_INFO = "DISPLAY_ACTIVITY_INFO";
export const FETCH_ACTIVITY_LIST_REQUEST = "FETCH_ACTIVITY_LIST_REQUEST";
export const FETCH_ACTIVITY_LIST_SUCCESS = "FETCH_ACTIVITY_LIST_SUCCESS";
export const FETCH_ACTIVITY_LIST_FAILURE = "FETCH_ACTIVITY_LIST_FAILURE";


export function removeActivity(activity) {
    return {
        type: REMOVE_ACTIVITY,
        payload: activity
    }
}

export const displayActivityInfo = (activity) => {
    return {
        type: DISPLAY_ACTIVITY_INFO,
        payload: activity
    }
}

export const fetchActivityList = () => ({
  [CALL_API]: {
    types: [
        FETCH_ACTIVITY_LIST_REQUEST,
        FETCH_ACTIVITY_LIST_SUCCESS,
        FETCH_ACTIVITY_LIST_FAILURE
        ],
    endpoint: ROOT_URL,
    method: 'GET',
  }
});