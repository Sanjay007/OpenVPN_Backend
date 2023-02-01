/**
 *softDeleteVpnServers.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated VpnServers. {status, message, data}
 */
const softDeleteVpnServers = ({ VpnServersDb }) => async (params,req,res) => {
  let updatedVpnServers = await VpnServersDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedVpnServers){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedVpnServers });
};
module.exports = softDeleteVpnServers;