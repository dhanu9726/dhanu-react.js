import React, { useState, useEffect } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [even, setEven] = useState(false);
    const [prime, setPrime] = useState(false);

    useEffect(() => {
        //even
        setEven(counter % 2 === 0);

        //prime
        if (counter <= 1) {
            setPrime(false);
        } 
        else {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(counter); i++) {
                if (counter % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            setPrime(isPrime);
        }
    }, [counter]);

    const resetCounter = () => {
        setCounter(0);
    };

    return (
        <div className="Counter">
            <h1>Welcome to Counter</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <br />
            <button onClick={resetCounter}>Reset</button>
            <p>Counter: {counter}</p>

            <h3>This number is {even ? "even" : "odd"}</h3>
            <h3>This number is {prime ? "prime" : "not prime"}</h3>
        </div>
    );
}

export default Counter;



