import axios from 'axios';

export default {
    createUser: function (user) {
        console.log('user', user);
        return axios.post('/api/users/create', user)
    },
    updateUser: function(user) {
        axios.patch('/api/users/update', user).then(res => {
            console.log(res); 
        });
    },
    getUser: function(obj) {
        console.log(`Password: ${obj.password} Email: ${obj.email}`)
        return axios.get('/api/user',{ params: { user: obj }})
    },
    getUsers: function() {
        return axios.get('/api/users');
    }
}