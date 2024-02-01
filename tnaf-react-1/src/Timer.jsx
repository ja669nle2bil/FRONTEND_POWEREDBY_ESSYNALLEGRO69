import React, { useState, useEffect } from 'react';

function CountdownTimer(props) {
    const [seconds, setSeconds] = useState(props.start);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        if(seconds === 0){
            setSeconds(props.start);
        }
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(props.start);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        if (seconds === 0) {
            clearInterval(interval);
            setIsActive(false); //toggle button when time's done
        }
        return () => clearInterval(interval);   //to prevent console 'cyk' multiplying.
    }, [isActive, seconds]);

    return (
        <div>
            {/*{seconds === 0 ? (*/}
            {/*    <p>End of time</p>*/}
            {/*) : (*/}
            {/*    <p>Remaining {seconds} Seconds</p>*/}
            {/*)}*/}
            <p>Remaining {seconds} Seconds</p>
            {seconds === 0 && <p>End of time!!!</p>}
            <button onClick={toggle}>{isActive && seconds !== 0 ? 'Stop' : 'Start'}</button>
            <button onClick={reset}>Reset</button>
            {/*<button onClick={toggle}>{isActive ? 'Stop' : 'Start'}</button>*/}
            {/*<button onClick={reset}>Reset</button>*/}
        </div>
    );
}
export default CountdownTimer;
