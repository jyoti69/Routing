//componentDidUpdate()

import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class Music extends Component{
  constructor(props){
    super(props)
    this.state={instrument:'Guitar'}
  }
  componentDidMount(){
    setTimeout(()=> {
      this.setState({instrument:"Drums"})
    },1000)
  }

  componentDidUpdate(){
    document.getElementById("CON1").innerHTML="the updated " +this.state.instrument;
  }

  render(){
    return(
      <div>
      <h1>{this.state.instrument}</h1>
      <div id="CON1"></div>
      </div>
    )
  }
}

ReactDOM.render(<Music/>,document.getElementById('root'));

