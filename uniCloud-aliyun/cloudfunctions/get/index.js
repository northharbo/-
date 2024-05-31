'use strict';
// 获取数据库的引用
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	// console.log(event)
	
	//event为客户端上传的参数
	const {res} = await uniCloud.httpclient.request(`${event.BASE_URL}${event.url}`, {
		method: 'GET',
		dataType: 'json' ,// 指定返回值为json格式，自动进行parse
		data:event.data,
		nestedQuerystring:true,
		headers:{
			Authorization:event.token
		}
	  })
	
	//返回数据给客户端
	return {
		
		res
	}
};