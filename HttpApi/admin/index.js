import{post,get} from '../../utils/http/index.js'
// import{post,get} from '../../utils/localHttp/index.js'



//  获取提交任务考核列表
export const getAdminAsmList = (data)=>{
	const {page,body} = data
	console.log(page,body)
	return post(`/asmt/admin/pageList.do?curPage=${page.curPage}&pageSize=${page.pageSize}`,body)
}


//  获取提交任务考核列表
export const getAdminAsmWrokStuList = (data)=>{
	const {page,body} = data;
	return post(`/asmtWork/admin/pageList.do?curPage=${page.curPage || null}&pageSize=${page.pageSize || null}`,body)
}
