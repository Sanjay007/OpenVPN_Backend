const express = require('express');
const router = express.Router();
const userController = require('../../controller/admin/user');
const { auth, } = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant'); 

router.route('/admin/user/me').get(auth(PLATFORM.ADMIN),userController.getLoggedInUserInfo);
router.route('/admin/user/create').post(userController.addUser);
router.route('/admin/user/addBulk').post(userController.bulkInsertUser);
router.route('/admin/user/list').post(userController.findAllUser);
router.route('/admin/user/count').post(userController.getUserCount);
router.route('/admin/user/:id').get(userController.getUserById);
router.route('/admin/user/update/:id').put(userController.updateUser);  
router.route('/admin/user/partial-update/:id').put(userController.partialUpdateUser);  
router.route('/admin/user/softDelete/:id').put(userController.softDeleteUser);
router.route('/admin/user/softDeleteMany').put(userController.softDeleteManyUser);
router.route('/admin/user/change-password').put(auth(PLATFORM.ADMIN),userController.changePassword);
router.route('/admin/user/update-profile').put(auth(PLATFORM.ADMIN),userController.updateProfile);

module.exports = router;
