const express = require('express');
const router = express.Router();
const userController = require('../../../controller/device/v1/user');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/user/me').get(auth(PLATFORM.DEVICE),userController.getLoggedInUserInfo);
router.route('/device/api/v1/user/create').post(userController.addUser);
router.route('/device/api/v1/user/list').post(userController.findAllUser);
router.route('/device/api/v1/user/count').post(userController.getUserCount);
router.route('/device/api/v1/user/:id').get(userController.getUserById);
router.route('/device/api/v1/user/update/:id').put(userController.updateUser);  
router.route('/device/api/v1/user/partial-update/:id').put(userController.partialUpdateUser);  
router.route('/device/api/v1/user/softDelete/:id').put(userController.softDeleteUser);
router.route('/device/api/v1/user/softDeleteMany').put(userController.softDeleteManyUser);
router.route('/device/api/v1/user/change-password').put(auth(PLATFORM.DEVICE),userController.changePassword);
router.route('/device/api/v1/user/update-profile').put(auth(PLATFORM.DEVICE),userController.updateProfile);

module.exports = router;
