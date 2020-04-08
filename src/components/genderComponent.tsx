import React, {useCallback, useContext, useRef} from "react";
import storeContext from "../storeContext";

const GenderComponent = () => {
    const [, dispatch] = useContext(storeContext)
    const genderRef = useRef<HTMLInputElement | null>(null)
    const setGender = useCallback(() => {
        if (genderRef.current !== null && genderRef.current.value){
            dispatch({
                type: "SET_GENDER",
                gender: genderRef.current.value
            })
        }
    }, [dispatch])

    return (
        <div>
            <input ref={genderRef}/>
            <button onClick={setGender}>Set gender</button>
        </div>
    )
};

export {GenderComponent}