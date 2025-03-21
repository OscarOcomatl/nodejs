

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

getUsersById2 = ( id, callback ) => {
    const user = users.find( (user) => user.id === id );

    ( user )
        ? callback( null, user)
        : callback( `User not found with id ${id}` )

    // if( !user ){
    //     return callback( `User not found with id ${id}` )
    // }
    // return callback( null, user)
}

module.exports = {
    getUsersById,
    getUsersById2
}