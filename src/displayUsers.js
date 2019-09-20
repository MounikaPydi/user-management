import React, { Component } from 'react';
import getUsers from './getUsers';
import DisplayUserInfo from './displayUserInfo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DisplayUsers extends Component{
    constructor(){
        super();
        this.state = {
            array1 : [],
            array2 : [],
            pattern : '',
            ascending : true 
        }
    }

    componentDidMount(){
        getUsers().then(res => {
            this.setState({array1:res.data,array2:res.data})
            }
        )
    }

    handleChange = (e) => {
        const searchWord = e.target.value
        const {array1,array2} = this.state
        const result = array1.filter(user => (
            user.first_name.includes(searchWord)    
        ))
        this.setState({array2:result})
    }

    handleClick = () =>{
            const exp = this.state.ascending
            function compare(a, b) { 
                if(exp){
                if (a.first_name > b.first_name) 
                    return -1; 
                if (a.first_name < b.first_name) 
                    return 1; 
                return 0; }
                else{
                    if (a.first_name < b.first_name) 
                    return -1; 
                if (a.first_name > b.first_name) 
                    return 1; 
                return 0; 
                }
            } 
            const result = this.state.array2.sort(compare)
            this.setState({array2:result,ascending:!this.state.ascending})
    
    
}

    render(){
        const {array2} = this.state
        console.log("value of ascending:"+this.state.ascending)
        return(
            <ul>
                <input type = "text"
                       placeholder = "search here"
                       onChange = {this.handleChange}
                />
                {array2.map(user => { 
                    const  { id, last_name, first_name } = user;
                    return(<Link to={`/${id}`}><li>{`${last_name}-${first_name}`}</li></Link>)
                })}
                <button onClick = {this.handleClick}>Sort</button>
            </ul>
        )
    }
}

export default DisplayUsers;

