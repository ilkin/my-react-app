import React from 'react';
import { CongratulationsMessageCB } from './CongratulationsMessageCB';
import { CounterButtonCB } from './CounterButtonCB';
import {  DisplayIf } from '../DisplayIf';

export class CounterButtonPageCB extends React.Component {
    render() {
        state = {
            hideMessage: false,
            numberOfClicks: 0
        };

       
        increment = () => {
            this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
        }
        return (
            const { hideMessage, numberOfClicks } = this.state;
            <>
                <h1>The Counter Button Page</h1>
                <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
                  <CongratulationsMessageCB threshold={10} onHide={()=>this.setState({ hideMessage: true })}/>  
                </DisplayIf>
        
                <CounterButtonCB onIncrement={increment} numberOfClicks={numberOfClicks} />
            </>
          );
    }
}