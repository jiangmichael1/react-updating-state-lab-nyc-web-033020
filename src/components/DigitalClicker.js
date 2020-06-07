import React from 'react';

export default class DigitalClicker extends React.Component{
    state = {
        timesClicked: 0
    }

    handlerApply = () => {
        this.setState((prevState) => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render(){
        return(
            <button onClick={this.handlerApply}>
                {this.state.timesClicked}
            </button>
        )
    }
}