import AppState from "./appState";
import GenderState from "./genderState";

export default interface Root {
    readonly app: AppState
    readonly gender: GenderState
}