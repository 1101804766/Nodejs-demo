
/*
 * GET users listing.
 */
var userDao = require('../dao/UserDao');

exports.update = function(req, res) {
	var url = req.url;
	var queryString = require('querystring');
	var queryObject = queryString.parse(url.substring(url.lastIndexOf('?') + 1));
	
	if (queryObject.id) {
		userDao.findById(queryObject.id, function(user) {
			res.render('user-edit', {title: '修改用户', user: user});
		});
	} else {
		res.render('user-edit', {title: '新增用户', user: []});
	}
};

exports.del = function(req, res) {
	var url = req.url;
	var queryString = require('querystring');
	var queryObject = queryString.parse(url.substring(url.lastIndexOf('?') + 1));

	userDao.deleteById(queryObject.id, function(result) {
		if (result.affectedRows === 1) {	// 删除成功
			userDao.getUsers(function(users) {
				res.render('index', { title: '用户列表 - 首页', userList: users });
			});
		}
	});
};

exports.save = function(req, res) {
	var requestData = req.body;
	if (requestData.id) {	// 修改
		userDao.updateUser(requestData.id, requestData, function(result) {
			console.log(result.affectedRows === 1 ? '修改成功' : '修改失败');
			userDao.getUsers(function(users) {
				res.render('index', { title: '用户列表 - 首页', userList: users });
			});
		});
	} else {	// 新增
		userDao.addUser(requestData, function(result) {
			console.log(result.affectedRows === 1 ? '添加成功' : '添加失败');
			userDao.getUsers(function(users) {
				res.render('index', { title: '用户列表 - 首页', userList: users });
			});
		});
	}
};