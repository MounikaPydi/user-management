import React, { Component } from 'react';
import getUsers from './getUsers';
class Search extends Component {
    constructor(){
        super();
        this.state = {
            totalData : [],
            pattern : '',
            results : []
        }
    }

    handleChange = (e) => {
        this.setState({pattern:e.target.value},() => {
            var array = this.state.totalData.map(name => {
                if (name.includes(this.state.pattern))
                return name;
            })
            this.setState({results:array})
        }
        );
    }

    componentDidMount(){
    
        getUsers().then(res => {
            console.log("users are"+ res.data)
            var value = res.data.map(user => (user.first_name))
            console.log("only firstnames"+ value)
            this.setState({totalData:value})
    })
}
    
    render(){
        return(
            <div>
                <input type="text"
                       placeholder="search"
                       onChange={this.handleChange}
                />
                <h1>hello {this.state.pattern}</h1>
                <h1>total data {this.state.totalData}</h1>
                <h1>results {this.state.results}</h1>
            </div>
        );
    }
}
export default Search;