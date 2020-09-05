import React,{Component} from 'react';

const Child =()=>{
   
        return(
            <div>
                <h1>Darling {props.dataFromParent}</h1>
            </div>
        );
    
}
export default Child;