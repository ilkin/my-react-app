import React from 'react';

export class CounterButtonCB extends React.Component {
    render() {
        const { numberOfClicks, onIncrement } = this.props;
        return (
            <>
                <p>You have clicked the button {numberOfClicks} times.</p>
                <button onClick={onIncrement}>Click Me!</button>
            </>
        );
    }
}

