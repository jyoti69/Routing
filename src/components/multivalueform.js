import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class Form extends Component{
constructor(){
  super()
  this.state={participate:"" ,
  roll_no:null,
};
}
changeHandler=(event)=>{
  let nam= event.target.name;
  let val= event.target.value;
  if(nam==="roll_no"){
    if(!Number(val)){
      alert("your roll_no must be no.");

    }
  }
  this.setState({[nam]: val});
}
render(){
  return(
    <form>
     
      <h1>Welcome {this.state.participate}</h1>
    <p>Register your name:</p>
    
    <input type='text'   name="participate" onChange={this.changeHandler}/>

    <p>Register your Roll_no: </p>

    <input type='text'  name='roll_no' onChange={this.changeHandler}/>

   <h2>your roll_no is {this.state.roll_no}</h2>
    </form>
  );
}
}
ReactDOM.render(<Form/>,document.getElementById('root'));

/*
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Form extends Component{
  constructor(){
    super()
    this.state={myTraining:"choose"}
  }


  render(){
    return(
      <form>
        <select value={this.state.myTraining}>
        <option value="React">React</option>
        <option value="Java">Java</option>
        <option value="Bigdata">Bigdata</option>
        <option value="DotNet">DotNet</option>
        </select>
      </form>
    );
  }
}
ReactDOM.render(<Form/>,document.getElementById('root'));*/