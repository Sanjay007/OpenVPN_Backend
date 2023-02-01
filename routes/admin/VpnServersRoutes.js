const express = require('express');
const router = express.Router();
const VpnServersController = require('../../controller/admin/VpnServers');
const { auth, } = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant'); 

router.route('/admin/vpnservers/create').post(VpnServersController.addVpnServers);
router.route('/admin/vpnservers/addBulk').post(VpnServersController.bulkInsertVpnServers);
router.route('/admin/vpnservers/list').post(VpnServersController.findAllVpnServers);
router.route('/admin/vpnservers/count').post(VpnServersController.getVpnServersCount);
router.route('/admin/vpnservers/:id').get(VpnServersController.getVpnServersById);
router.route('/admin/vpnservers/update/:id').put(VpnServersController.updateVpnServers);  
router.route('/admin/vpnservers/partial-update/:id').put(VpnServersController.partialUpdateVpnServers);  
router.route('/admin/vpnservers/updateBulk').put(VpnServersController.bulkUpdateVpnServers);
router.route('/admin/vpnservers/softDelete/:id').put(VpnServersController.softDeleteVpnServers);
router.route('/admin/vpnservers/softDeleteMany').put(VpnServersController.softDeleteManyVpnServers);
router.route('/admin/vpnservers/delete/:id').delete(VpnServersController.deleteVpnServers);
router.route('/admin/vpnservers/deleteMany').post(VpnServersController.deleteManyVpnServers);

module.exports = router;
