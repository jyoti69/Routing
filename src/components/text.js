import React,{Component} from 'react'
import ReactDOM from 'react-dom'


class Text extends Component{

    constructor(){
        super()
        this.state={
            text:"Welcome Students"
        } }

        changeText(){
            this.setState({
                text:"here you go!"
            })
        }
    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={() =>this.changeText()}>Next</button>
            </div>

        )
    }
}

export default Text;