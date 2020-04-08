import React from "react";
import storeContext from "../storeContext";

const CountryComponent = () => {
    const [, dispatch] = React.useContext(storeContext)
    const countryRef = React.useRef<HTMLInputElement | null>(null)
    const setCountry = React.useCallback(() => {
        if (countryRef.current !== null && countryRef.current.value){
            dispatch({
                type: "SET_COUNTRY",
                country: countryRef.current.value
            })
        }
    }, [dispatch])

    return (
        <div>
            <form onSubmit={setCountry}>
                <input ref={countryRef}/>
                <button>Set country</button>
            </form>
        </div>
    )
};

export {CountryComponent}