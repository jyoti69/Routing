//getSnapshotBeforeUpdate() --- 1>when component was mounting it rendered guitar
//2>later when component is mounted,after completion of timer the instrument value changed to drums
//3> the action trigger the update phase and getSnapshotBeforeUpdate method is called,which writes  a previous state message to the container CON1
//4> then the componentDidUpdate() method is executed which writes the current state message in the container CON2

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Music extends Component{
  constructor(props){
    super(props)
    this.state={instrument:"guitar"}
  }
componentDidMount(){
  setTimeout(() =>{this.setState({instrument:"Drums"})}, 2000)
}

getSnapshotBeforeUpdate(prevProps,prevState){

  document.getElementById("CON1").innerHTML="Befrore the  UPDATE the INSTRUMENT was " +prevState.instrument;

}
componentDidUpdate(){
  document.getElementById("CON2").innerHTML="THE UPDATED INSTRUMNET" + this.state.instrument;
}
  render(){
    return(
      <div>
      <h1>{this.state.instrument}</h1>
      <div id="CON1"></div>
      <div id="CON2"></div>
      </div>
    )
  }
}

ReactDOM.render(<Music/>,document.getElementById('root'));