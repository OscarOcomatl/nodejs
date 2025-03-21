// archivo de barril para exportar todos los plugins

const {getAge} = require('../plugins/get-age.pugin') 
const {getUuid: getUUID} = require('../plugins/get-id.plugin')
const {http} = require('./http-client.plugin')

module.exports = {
    getAge,
    getUUID,
    http
}



