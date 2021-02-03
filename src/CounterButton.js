import React, { useEffect } from 'react'
import { DangerButton } from './Button';

export const CounterButton = ({onIncrement, numberOfClicks}) => {
    useEffect(() => {
        //effect
        return () => {
            console.log("test");
        }
    }, [numberOfClicks])

    return (
        <>
            <p>You have clicked the button {numberOfClicks} times.</p>
            <DangerButton onClick={onIncrement}>Click Me!</DangerButton>
        </>
    );
}