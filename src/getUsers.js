import axios from 'axios';
const getUsers = () => {
    return new Promise((resolve,reject) => {
        axios.get('https://reqres.in/api/users?page=2').then(res => {
            if(res.status > 300)
            {
                reject("eror")
            }
            else{
                resolve(res.data)
            }
        })
        .catch(e => {reject(e)})
             
    }
)
}
export default getUsers;
    