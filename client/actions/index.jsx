// possibility for ajax calls: https://www.npmjs.com/package/redux-api-middleware#installation
import { CALL_API } from 'redux-api-middleware';
import axios from 'axios';

const ROOT_URL = "/api/activities"

export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY"
export const FETCH_ACTIVITY_LIST_REQUEST = "FETCH_ACTIVITY_LIST_REQUEST"
export const FETCH_ACTIVITY_LIST_SUCCESS = "FETCH_ACTIVITY_LIST_SUCCESS"
export const FETCH_ACTIVITY_LIST_FAILURE = "FETCH_ACTIVITY_LIST_FAILURE"

export function removeActivity(activity) {
    return {
        type: REMOVE_ACTIVITY,
        payload: activity
    }
}

export const fetchActivityList = () => ({
  [CALL_API]: {
    types: [FETCH_ACTIVITY_LIST_REQUEST, FETCH_ACTIVITY_LIST_SUCCESS, FETCH_ACTIVITY_LIST_FAILURE],
    endpoint: ROOT_URL,
    method: 'GET',
  }
});
// export function fetchActivityList() {
//   return {
//     [CALL_API]: {
//       endpoint: ROOT_URL,
//       method: 'GET',
//       types: [FETCH_ACTIVITY_LIST_REQUEST, FETCH_ACTIVITY_LIST_SUCCESS, FETCH_ACTIVITY_LIST_FAILURE]
//     }
//   }
// }


// export function fetchActivityList() {
//     let url = `${ROOT_URL}`
//     let request = axios.get(url)
//         .catch(function(error) {
//             console.log(error)
//         })
//     return {
//         type: FETCH_ACTIVITY_LIST,
//         payload: request
//     }
// }
