/**
 *addVpnServers.js
 */

const  VpnServersEntity = require('../../entities/VpnServers');
const response = require('../../utils/response');
/**
 * @description : create new record of VpnServers in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addVpnServers = ({
  VpnServersDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let VpnServers = VpnServersEntity(dataToCreate);
  VpnServers = await VpnServersDb.create(VpnServers);
  return response.success({ data:VpnServers });
};
module.exports = addVpnServers;