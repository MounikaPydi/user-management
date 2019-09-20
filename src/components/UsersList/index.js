import React, { Component } from 'react';
import getUsers from './getUsers';
import DisplayUserInfo from './displayUserInfo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class UsersList extends Component{
    constructor(){
        super();
        this.state = {
            users : []
        };
    }
componentDidMount(){
    getUsers().then(res => {
        console.log("users are"+ res.data)
        this.setState({users:res.data})
    })
}

    render(){
        return(
            <ul>
                { this.state.users.map(user => <li><Link to={`/${user.id}`}>{user.first_name}</Link></li>)}
            </ul>
        );
    }
}
export default UsersList;