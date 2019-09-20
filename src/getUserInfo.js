import React, { Component} from 'react';
import axios from 'axios';
const getUserInfo = (id) => {
    return new Promise((resolve,reject) => {
        axios.get(`https://reqres.in/api/users/${id}`).then(res => {
            if(res.status > 300) {
                reject("eror")
            }else{
                resolve(res.data)
            }
        })
        .catch(e => reject(e))
             
    }
)
}

/*class GetUserInfo extends Component{
    render(){
        const x = this.props.match.params.id
        return(
            <div>
            <h1>hello</h1>
            <h1>{x}</h1>
            </div>
        )
    }
}*/
export default getUserInfo;