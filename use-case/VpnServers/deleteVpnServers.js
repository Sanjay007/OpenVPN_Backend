
/**
 *deleteVpnServers.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted VpnServers. {status, message, data}
 */
const deleteVpnServers = ({ VpnServersDb }) => async (query,req,res) => {
  let deletedVpnServers = await VpnServersDb.deleteOne(query);
  if (!deletedVpnServers){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedVpnServers });
};

module.exports = deleteVpnServers;