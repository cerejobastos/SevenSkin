import { setHeartRateData } from "../Reducers/HeartRate.Reducer";

export const fetchHeartRateData = () => {
    return async dispatch => {
        const response = await fetch("http://localhost:3000/heartrate");
        const data = await response.json();
        dispatch(setHeartRateData(data));
    }
}