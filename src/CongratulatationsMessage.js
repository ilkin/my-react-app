import React from 'react';
import { Button } from './Button';

export const CongratulationsMessage = ({ threshold, onHide }) => {
    /*useEffect(() => {
        return () => console.log("Congratulation unmounting");
    }, [])*/

    return  (
        <>
            <h1>Congratulations! You have reached {threshold} number of clicks</h1> 
            <Button onClick={onHide}>Hide</Button>
        </>
    );
}