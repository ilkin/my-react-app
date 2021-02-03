import React, { useState, useEffect } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulatationsMessage';
import { DisplayIf } from '../DisplayIf';
import { usePersistenceState } from '../usePersistenceState';

export const CounterButtonPage = () => {

  const [numberOfClicks, setNumberOfClicks] = usePersistenceState('numberOfClicks', 0 , Number);
  const [hideMessage, setHideMessage] = useState(false);

  
  
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <>
        <h1>The Counter Button Page</h1>
        <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
          <CongratulationsMessage threshold={10} onHide={()=>setHideMessage(true)}/>  
        </DisplayIf>

        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
    </>
  );
}