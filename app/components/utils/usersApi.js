import axios from 'axios';

export default {
    createUser: function (user) {
        console.log('user', user);
        axios.post('/api/users/create', user).then(res => {
            console.log(res);
        });
    },
    updateUser: function(user) {
        axios.patch('/api/users/update', user).then(res => {
            console.log(res); 
        });
    },
    getUser: function(id) {
        axios.get('/api/users/get', {
            params: {
                id: id
            }
        }).then(res => {
            return res;
        })
    }
}