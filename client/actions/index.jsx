// possibility for ajax calls: https://www.npmjs.com/package/redux-api-middleware#installation
import axios from 'axios';

const ROOT_URL = "/api/activities"

export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY"
export const FETCH_ACTIVITY_LIST = "FETCH_ACTIVITY_LIST"


export function removeActivity(activity) {
    return {
        type: REMOVE_ACTIVITY,
        payload: activity
    }
}

export const fetchActivityList = (data) => {
    return {
      type: FETCH_ACTIVITY_LIST,
      payload: data
    }
}

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
