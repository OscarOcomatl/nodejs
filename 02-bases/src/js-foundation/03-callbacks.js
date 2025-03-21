

const users = [
    {
        id:1,
        name:'Tony'
    },
    {
        id:2,
        name:'Steve'
    }
];


function getUsersById( id, callback ){
    const user = users.find( function(user){
        return user.id === id;
    });
    if( !user ){
        return callback(`User not found with id`,{id})
    }
    return callback( null, user )
}

module.exports = {
    getUsersById
}