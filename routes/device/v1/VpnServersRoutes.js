const express = require('express');
const router = express.Router();
const VpnServersController = require('../../../controller/device/v1/VpnServers');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/vpnservers/create').post(VpnServersController.addVpnServers);
router.route('/device/api/v1/vpnservers/list').post(VpnServersController.findAllVpnServers);
router.route('/device/api/v1/vpnservers/count').post(VpnServersController.getVpnServersCount);
router.route('/device/api/v1/vpnservers/:id').get(VpnServersController.getVpnServersById);
router.route('/device/api/v1/vpnservers/update/:id').put(VpnServersController.updateVpnServers);  
router.route('/device/api/v1/vpnservers/partial-update/:id').put(VpnServersController.partialUpdateVpnServers);  
router.route('/device/api/v1/vpnservers/softDelete/:id').put(VpnServersController.softDeleteVpnServers);
router.route('/device/api/v1/vpnservers/softDeleteMany').put(VpnServersController.softDeleteManyVpnServers);
router.route('/device/api/v1/vpnservers/delete/:id').delete(VpnServersController.deleteVpnServers);
router.route('/device/api/v1/vpnservers/deleteMany').post(VpnServersController.deleteManyVpnServers);

module.exports = router;
