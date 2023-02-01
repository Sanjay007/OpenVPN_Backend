
/**
 *bulkInsertVpnServers.js
 */

const  VpnServersEntity = require('../../entities/VpnServers');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created VpnServerss. {status, message, data}
 */

const bulkInsertVpnServers = ({ VpnServersDb }) => async (dataToCreate,req,res) => {
  let vpnserversEntities = dataToCreate.map(item => VpnServersEntity(item));
  let createdVpnServers = await VpnServersDb.create(vpnserversEntities);
  return response.success({ data:{ count:createdVpnServers.length || 0 } });
};
module.exports = bulkInsertVpnServers;