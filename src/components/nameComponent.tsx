import React from "react";
import storeContext from "../storeContext";

const NameComponent = () => {
    const [,dispatch] = React.useContext(storeContext)
    const nameRef = React.useRef<HTMLInputElement | null>(null)
    const onSet = React.useCallback(() => {
        if (nameRef.current !== null && nameRef.current.value){
            dispatch({
                type: "SET_NAME",
                name: nameRef.current.value
            })
        }
    }, [dispatch])

    return (
        <div>
            <label>Name</label>
            <input ref={nameRef}/>
            <button onClick={onSet}>Set name</button>
        </div>
    )
};

export {NameComponent}