import React from "react";
import storeContext from "../storeContext";

const ShowComponent = () => {
    const [{app: {name, country, age}, gender: {gender}}] = React.useContext(storeContext)

    return (
        <div>
            <p>Name: {name ? name : "not set"}</p>
            <p>Country: {country ? country: "country not set"}</p>
            <p>Gender: {gender ? gender : "gender not set"}</p>
            <p>Age: {age}</p>
        </div>
    )
};

export {ShowComponent}