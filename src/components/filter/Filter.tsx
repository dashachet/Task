import React, {useState} from "react";
import {FilterValue} from "../../App";

export type MoneyProps = {
    currentMoney: Money[],
    changeFilter: (filter: FilterValue) => void

}
export type Money = {
    banknots: string,
    value: number,
    number: string
}
export const NewComponent = ({currentMoney, changeFilter}: MoneyProps) => {

    const changeFilterMoney = (filter:FilterValue) => {
        changeFilter(filter);

    }

    return (
        <>
            {currentMoney.map((objMoney, index)=> {
                return (
                    <li key={index}>
                        <span>{objMoney.banknots}</span>
                        <span>{objMoney.number}</span>
                        <span>{objMoney.value}</span>
                    </li>
                )
            })}
            <button onClick={() =>changeFilterMoney('all')}>All </button>
            <button onClick={()=>changeFilterMoney('ruble')}>Ruble</button>
            <button onClick={() => changeFilterMoney('dollar')}>Dollar</button></>
    )
}