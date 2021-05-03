import User from "./components/array";
import {useState} from 'react';

let usersWithAddress = [
    {name: 'vasya', age: 31, isMarried: false, address: 'Kyiv'},
    {name: 'petya', age: 30, isMarried: true, address: 'Rivne'},
    {name: 'kolya', age: 29, isMarried: true, address: 'Lviv'},
    {name: 'olya', age: 28, isMarried: false, address: 'Rivner'},
    {name: 'max', age: 30, isMarried: true, address: 'Lviv'},
    {name: 'anya', age: 31, isMarried: false, address: 'Lviv'},
    {name: 'oleg', age: 28, isMarried: false, address: 'Kyiv'},
    {name: 'andrey', age: 29, isMarried: true, address: 'Lviv'},
    {name: 'masha', age: 30, isMarried: true, address: 'Kyiv'},
    {name: 'max', age: 31, isMarried: true, address: 'Rivne'}

];


function App() {

    let [users, setUsers] = useState(usersWithAddress);
    const deleteUser = () => {
        users.pop();
        setUsers([...users])
    }

    let [counter, setCounter] = useState(0)
    const increment = () => {
        counter++;
        setCounter(counter);
    }

    const decrement = () => {
        counter--;
        setCounter(counter);
    }

    const reset = () => {
        counter = 0;
        setCounter(counter);
    }

    const  incPlus100 = () =>{
        counter+=100;
        setCounter(counter);
    }

    const incMinus100 = () =>{
        counter-=100;
        setCounter(counter);
    }



    return (


        <div>

            <div>
                value = {counter}
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
                <button onClick={incPlus100}>incPlus100</button>
                <button onClick={incMinus100}>incMinus100</button>

            </div>

            <div>{users.map((value, index) =>
                <User
                    key={index}
                    {...value}
                    name={value.name}
                    age={value.age}
                    isMarried={value.isMarried}
                />
            )}
                <button onClick={deleteUser}>delete</button>
            </div>

        </div>
    );
}

export default App;
