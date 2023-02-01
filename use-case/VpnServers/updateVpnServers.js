/**
 *updateVpnServers.js
 */

const  VpnServersEntity = require('../../entities/VpnServers');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated VpnServers. {status, message, data}
 */
const updateVpnServers = ({
  VpnServersDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let vpnservers = VpnServersEntity(dataToUpdate);
  vpnservers = await VpnServersDb.updateOne(query,vpnservers);
  if (!vpnservers){
    return response.recordNotFound();
  }
  return response.success({ data:vpnservers });
};
module.exports = updateVpnServers;