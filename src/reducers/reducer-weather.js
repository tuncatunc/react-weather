import FETCH_WEATHER from '../actions/index'

const ReducerWeatherInitialState = []
const ReducerWeather = (state = ReducerWeatherInitialState, action) => {
    console.log('Action Reduced', action);
    switch (action.type) {
        case 'FETCH_WEATHER':
            return [ action.payload.data, ...state ]
            break;
        default:
            return state;
    }
    return state;
}

export default ReducerWeather;