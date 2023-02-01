/**
 *softDeleteManyVpnServers.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete multiple records from database by ids;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : number of deactivated documents. {status, message, data}
 */
const softDeleteManyVpnServers = ({ VpnServersDb }) => async (params, req, res) => {
  let updatedVpnServers = await VpnServersDb.updateMany(params.query, params.dataToUpdate);
  if (!updatedVpnServers){
    return response.recordNotFound();
  }
  return response.success({ data:{ count : updatedVpnServers } });
};
module.exports = softDeleteManyVpnServers;
