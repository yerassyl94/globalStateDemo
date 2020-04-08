import { Action } from "./action";
import Root from "./state/root";
import AppReducer from "./appReducer";
import GenderReducer from "./genderReducer";

type Reducer<S> = (state: S, action: Action) => S;

type ReducersMapObject = { [K in keyof Root]: Reducer<Root[K]> };

type StateFromReducersMapObject<M> = M extends ReducersMapObject
    ? { [P in keyof M]: M[P] extends Reducer<infer S> ? S : never }
    : never;

function combineReducers(reducers: ReducersMapObject) {
    return (
        state: StateFromReducersMapObject<typeof reducers>,
        action: Action
    ) => {
        let hasChanged = false;
        let nextState: StateFromReducersMapObject<typeof reducers> = { ...state };

        const keys = Object.keys(reducers) as ReadonlyArray<keyof typeof reducers>;
        for (const key of keys) {
            const reducer = reducers[key] as Reducer<any>;
            const previous = state[key];
            const next = reducer(previous, action);
            nextState = { ...nextState, [key]: next };
            hasChanged = hasChanged || next !== previous;
        }

        return hasChanged ? nextState : state;
    };
}

const root = combineReducers({ app: AppReducer, gender: GenderReducer });
export default root;
