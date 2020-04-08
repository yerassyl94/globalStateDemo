import GenderState from "./state/genderState";
import {Action} from "./action";

const GenderReducer = (state: GenderState, action: Action) : GenderState => {
    return action.type === "SET_GENDER" ? {...state, gender: action.gender} : state
}

export default GenderReducer