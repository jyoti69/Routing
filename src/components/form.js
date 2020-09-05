import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class Form extends Component{
constructor(){
  super()
  this.state={participate:""}
}
changeHandler=(event)=>{
  this.setState({participate: event.target.value});
}


render(){

  let header="";
  if(this.state.participate){
    header=<h1>Thank you for Registration : {this.state.participate}</h1>
  }
  return(
    <form>
      {header}
    <p>Registered user:</p>
    
    <input type='text'  onChange={this.changeHandler}/>
    </form>

  );
}
}
ReactDOM.render(<Form/>,document.getElementById('root'));