
const axios = require('axios')

const httpClientPlugin = {
    get: async(url) => {
        const {data} = await axios.get()
        return data;
    }
}

module.exports = getUser
