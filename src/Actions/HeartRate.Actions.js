import { setHeartRateData } from "../Reducers/HeartRate.Reducer";

export const fetchHeartRateData = () => {
    return async dispatch => {
        const response = await fetch("/heartrate");
        const data = await response.json();
        dispatch(setHeartRateData(data));
    }
}