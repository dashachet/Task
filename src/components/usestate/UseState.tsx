import React, { useCallback, useState } from "react";
import { Buttonn } from "../Button";

type UseStateType = {
    name: string;
    callBack: () => void;
}



export const State = () => {


    let [a, setA]=useState(1);
    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }


    


    return (
        <div>
            <button onClick={onClickHandler}>UseState </button>


        </div>

    )
};