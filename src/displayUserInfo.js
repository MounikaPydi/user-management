import React,{ Component } from 'react';
import getUserInfo from './getUserInfo';
class DisplayUserInfo extends Component{
    constructor(){
        super();
        this.state = {
            user : [],
            
        };
    }
    componentDidMount(){
        getUserInfo(this.props.match.params.id).then(res => (this.setState({user:res.data})))
    }

    
    render(){
        return(
            <div>
                {this.state.user.first_name}
            </div>
        )
    }
}
export default DisplayUserInfo;