import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Child from './components/child';

const Parent =()=>{
  
    return(
      <div>
      <Child dataFromParent="Hii edureka"/>;
      </div>
    );
  
}
ReactDOM.render(<Parent/>,document.getElementById('root'));