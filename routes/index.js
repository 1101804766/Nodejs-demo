
/*
 * GET home page.
 */

exports.index = function(req, res){
	var userDao = require('../dao/UserDao');
	userDao.getUsers(function(users) {
		res.render('index', { title: '用户列表 - 首页', userList: users });
	});
};