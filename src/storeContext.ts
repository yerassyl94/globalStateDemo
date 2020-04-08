import Root from "./reducers/state/root";
import {createContext} from "react";
import {Action} from "./reducers/action";

export const defaultState: Root = {
    app: {name: '', country: '', age: 0},
    gender: {gender: ''}
};

export default createContext<[Root, (action: Action) => void]>([
    defaultState,
    () => {}
]);