

const httpClientPlugin = {
    get: async( url ) => {
        const response = await fetch( url );
        // data
        return await response.json()
    },
    post: async( url, body )=> {},
    put: async( url, body )=> {},
    delete: async( url )=> {},
};

module.exports = {
    http:httpClientPlugin
};


