/**
 *partialUpdateVpnServers.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated VpnServers. {status, message, data}
 */
const partialUpdateVpnServers = ({ VpnServersDb }) => async (params,req,res) => {
  const vpnservers = await VpnServersDb.updateOne(params.query,params.dataToUpdate);
  if (!vpnservers){
    return response.recordNotFound();
  }
  return response.success({ data:vpnservers });
};
module.exports = partialUpdateVpnServers;