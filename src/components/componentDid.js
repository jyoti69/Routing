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

  render(){
    return(
      <h1>this is my play{this.state.instrument}</h1>
    )
  }
}

ReactDOM.render(<Music/>,document.getElementById('root'));