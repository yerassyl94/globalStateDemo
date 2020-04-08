import React, {useCallback, useContext, useRef} from "react";
import storeContext from "../storeContext";

const AgeComponent = () => {
    const [, dispatch] = useContext(storeContext)
    const ageRef = useRef<HTMLInputElement | null>(null)
    const setAge = useCallback(() => {
        if (ageRef.current !== null && ageRef.current.value){
            dispatch({
                type: "SET_AGE",
                age: parseInt(ageRef.current.value)
            })
        }
    }, [dispatch])

    return (
        <div>
            <input ref={ageRef} />
            <button onClick={setAge}>Set age</button>
        </div>
    )
}

export {AgeComponent}