
import React, {MouseEvent, useState} from 'react';
import './App.css';
import { Button } from './Button';
import { Buttonn } from './components/Button';
import { State } from './components/usestate/UseState';
import {FullInput} from "./components/input/Input";
import * as string_decoder from "node:string_decoder";
import {Input} from "./components/input/Input2";
import {ButtonInput} from "./components/input/ButtonForInput";


function App() {

    let [title, setTitle] = useState('')

    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])


    let [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])        
    
    const[filter, setFilter]= useState('All') ;

    let currentMoney = money; 
    if (filter === 'Dollar') {currentMoney=money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars' ) };
    if (filter === 'Ruble') { currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS') }



    const onClickFilterHandler = (nameButton :string) => {
        console.log(nameButton);
        setFilter(nameButton);
    }


    const Button1Foo = (subscriber: string, age: number) =>
    {
        console.log(subscriber);

    }
    const Button2Foo = () => {
        console.log('Im ivan');
    }



    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage,...message ])
    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }


    return (
        <div className="App">
            <div className="Buttons">
            <Buttonn  name={"My first youtube chanel"} callBack={()=>Button1Foo('Vasya', 21)}/>
            <Buttonn name={"My second youtube chanel"} callBack={Button2Foo}/>
            <State/> 
            </div>
            <div className="Filter">
            <ul>
                {currentMoney.map((objMoney, index)=> {
                    return (
                        <li key={index}>
                            <span>{objMoney.banknots}</span>
                            <span>{objMoney.number}</span>
                            <span>{objMoney.value}</span>
                        </li>
                    )
                })}
            <button onClick={() =>onClickFilterHandler('All')}>All </button>
            <button onClick={()=>onClickFilterHandler('Ruble')}>Ruble</button>
            <button onClick={() => onClickFilterHandler('Dollar')}>Dollar</button>
            </ul>
    </div>
                {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={'title'} setTitle={setTitle}/>
            <ButtonInput name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App; 
