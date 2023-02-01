const VpnServersDb = require('../../../../data-access/VpnServersDb');

const VpnServersSchema = require('../../../../validation/schema/VpnServers');

const createValidation = require('../../../../validation')(VpnServersSchema.createSchema);
const updateValidation = require('../../../../validation')(VpnServersSchema.updateSchema);
const filterValidation = require('../../../../validation')(VpnServersSchema.filterValidationSchema);
const addVpnServersUsecase = require('../../../../use-case/VpnServers/addVpnServers')({
  VpnServersDb,
  createValidation 
});
const findAllVpnServersUsecase = require('../../../../use-case/VpnServers/findAllVpnServers')({
  VpnServersDb,
  filterValidation
});
const getVpnServersCountUsecase = require('../../../../use-case/VpnServers/getVpnServersCount')({
  VpnServersDb,
  filterValidation
});
const getVpnServersUsecase = require('../../../../use-case/VpnServers/getVpnServers')({
  VpnServersDb,
  filterValidation
});
const updateVpnServersUsecase = require('../../../../use-case/VpnServers/updateVpnServers')({
  VpnServersDb,
  updateValidation 
});
const partialUpdateVpnServersUsecase = require('../../../../use-case/VpnServers/partialUpdateVpnServers')({ VpnServersDb });
const softDeleteVpnServersUsecase = require('../../../../use-case/VpnServers/softDeleteVpnServers')({ VpnServersDb });
const softDeleteManyVpnServersUsecase = require('../../../../use-case/VpnServers/softDeleteManyVpnServers')({ VpnServersDb });
const deleteVpnServersUsecase = require('../../../../use-case/VpnServers/deleteVpnServers')({ VpnServersDb });
const deleteManyVpnServersUsecase = require('../../../../use-case/VpnServers/deleteManyVpnServers')({ VpnServersDb });

const VpnServersController = require('./VpnServers');

const addVpnServers = VpnServersController.addVpnServers(addVpnServersUsecase);
const findAllVpnServers = VpnServersController.findAllVpnServers(findAllVpnServersUsecase);
const getVpnServersCount = VpnServersController.getVpnServersCount(getVpnServersCountUsecase);
const getVpnServersById = VpnServersController.getVpnServers(getVpnServersUsecase);
const updateVpnServers = VpnServersController.updateVpnServers(updateVpnServersUsecase);
const partialUpdateVpnServers = VpnServersController.partialUpdateVpnServers(partialUpdateVpnServersUsecase);
const softDeleteVpnServers = VpnServersController.softDeleteVpnServers(softDeleteVpnServersUsecase);
const softDeleteManyVpnServers = VpnServersController.softDeleteManyVpnServers(softDeleteManyVpnServersUsecase);
const deleteVpnServers = VpnServersController.deleteVpnServers(deleteVpnServersUsecase);
const deleteManyVpnServers = VpnServersController.deleteManyVpnServers(deleteManyVpnServersUsecase);

module.exports = {
  addVpnServers,
  findAllVpnServers,
  getVpnServersCount,
  getVpnServersById,
  updateVpnServers,
  partialUpdateVpnServers,
  softDeleteVpnServers,
  softDeleteManyVpnServers,
  deleteVpnServers,
  deleteManyVpnServers,
};