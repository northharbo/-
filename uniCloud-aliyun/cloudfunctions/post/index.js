'use strict';
// 获取数据库的引用
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	// console.log(event)
	
	//event为客户端上传的参数
	const {res} = await uniCloud.httpclient.request(`${event.BASE_URL}${event.url}`, {
	    method: 'POST',
	    // contentType: 'json', // 指定以application/json发送data内的数据
	    dataType: 'json', // 指定返回值为json格式，自动进行parse
		data:JSON.stringify(event.data),
		headers:{
			Authorization:event.token,
			'Content-Type': 'application/json; charset=UTF-8'
		}
	  })
	// console.log(res)
	//返回数据给客户端
	return {
		res
	}
};