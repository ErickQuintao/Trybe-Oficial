
import  React from 'react'

class Timer extends React.Component {
    constructor(){
        super();
        this.state ={
            seconds: 1,
            phases: ['Inspire','Segure','Expire'],
            phaseIndex:0
        }
    }
    componentDidMount(){
        const OneSeconds = 1000;
       this.intervalId = setInterval(() => {
            this.setState((prevState) =>({
                seconds: prevState.seconds + 1
            }))
        }, OneSeconds);
    }
    componentDidUpdate(prevState){
            const TimeMax = 5;
            if(prevState.seconds === TimeMax){
                this.setState({
                    seconds: 1,
                phaseIndex: prevState.phaseIndex === 2 ? 0 : prevState.phaseIndex + 1})
            }
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
        render(){
        const{seconds ,phases, phaseIndex} =this.state;
        return(
            <section>
                <h1>{phases[phaseIndex]}</h1>
                <h2>{seconds}</h2>
            </section>

        );
    }
}
export default Timer;
