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
submitHandler=(event)=>{
  event.preventDefault();
  alert(this.state.participate+ "Registered");
}

render(){
  return(
    <form onSubmit={this.submitHandler}>
     
      <h1>Welcome</h1>
    <p>Registered user:</p>
    
    <input type='text'  onChange={this.changeHandler}/>
   
<input type='submit'/>
    </form>
  );
}
}
ReactDOM.render(<Form/>,document.getElementById('root'));