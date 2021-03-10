let axios = require('axios');
let defaults = require('./default');
const url = 'api/'

module.exports = {
    users: ()=>{
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'users'
        })
    },
    products: ()=>{
        return axios({
            ...defaults,
            method: 'GET',
            url: url + 'products'
        })
    }
}

