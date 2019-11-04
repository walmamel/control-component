import React, { Component } from 'react'
import Input from './Input';
import './App.css';

export default class AppClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            todo:"",
        }
    }
    handelInputChange = (e)=>{
       this.setState({
           todo: e.target.value,
       }) 
    }
    handelSubmit = (e)=> {
        e.preventDefault();
        alert(`the task is: ${this.state.todo}`);
    }
    isValid = ()=>{
        if(this.state.todo ===''){
            return false;
        }
        return true;
    }
    render() {
        return (
            <div className="App">
                <h2> Controlled Component whit React </h2>
                <form onSubmit={this.handelSubmit}>
                    <Input onChange={this.handelInputChange} id="todo" type="text" 
                    errorMessage={this.isValid() ? '' : 'This field is required'}
                    placeholder="write some text" value={this.state.todo} />
                  
                    {/* <Input type="submit" value="Submit the form"/> */}
                    <button className="btn btn-secondary" disabled={!this.isValid()}  type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

