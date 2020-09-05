import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class Music extends Component{
  constructor(props){
    super(props)
    this.state={instrument:"guitar"}
  }
shouldComponentUpdate(){
  return true;
}
change=()=>{
  this.setState({instrument:"Drums"});
}


  render(){
    return(
      <div>
      <h1>{this.state.instrument}</h1>
      <button type="button" onClick={this.change}>change Instrument</button>
      </div>
    );
  }
}

ReactDOM.render(<Music/>,document.getElementById('root'))