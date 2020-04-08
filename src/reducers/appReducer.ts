import AppState from "./state/appState";
import {Action} from "./action";

const AppReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.name};
        case "SET_COUNTRY":
            return {...state, country: action.country};
        case "SET_AGE":
            return {...state, age: action.age}
        default:
            return state
    }
}

export default AppReducer