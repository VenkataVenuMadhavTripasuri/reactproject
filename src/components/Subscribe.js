import React from 'react';
export default class Subscribe extends React.Component{
    constructor(){
        super();
        this.state={
            email:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleChange(e){
        console.log(this.state.email);

        this.setState({
            email:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.email==''){
            alert('empty');
        }
        else{
            console.log("button"+this.state.email)
            return true;
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} method="Post" action='#'>
                <input type="email" value={this.state.email} onChange={this.handleChange}/>
                <input type="submit"></input>
            </form>
        );
    }
}