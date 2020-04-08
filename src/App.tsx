import React from "react";
import {NameComponent} from "./components/nameComponent";
import {AgeComponent} from "./components/ageComponent";
import {CountryComponent} from "./components/countryComponent";
import "./App.css"
import root from "./reducers/root";
import StoreContext ,{defaultState} from "./storeContext";
import {ShowComponent} from "./components/showComponent";
import {GenderComponent} from "./components/genderComponent";

const App = () => {
    const [state, dispatch] = React.useReducer(root, defaultState)

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            <div className="main">
                <NameComponent />
                <CountryComponent />
                <GenderComponent />
                <AgeComponent />
            </div>
            <div>
                <ShowComponent />
            </div>
        </StoreContext.Provider>
    )
}

export {App}