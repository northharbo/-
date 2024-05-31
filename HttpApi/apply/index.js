import{post,get} from '../../utils/http/index.js'
// import{post,get} from '../../utils/localHttp/index.js'

//  获取报名表 不包含type
export const getApplySignList = (data)=>{
	return get("/apply/list.do",data)
}

//    获取面试名单
export const getInterviewList = (data)=>{
	return get("/interview/getListByApplyId.do",data)
}

// 获取报名列表人员信息
export const getApplicationList = (data) =>{
	return get('/application/getList.do',data)
}

// 获取报名表 包含type
export const getAplicationManageList = (data)=>{
	return get('/apply/manageList.do',data)
}

//  创建报名 1.招新， 2 是面试
export const createApplication = (data)=>{
	return get('/apply/save.do',data)
}

//  删除报名
export const deleteApplication = (data) =>{
	return get('/apply/delete.do',data)
}

//  用户报名
export const createUserApplication = (data)=>{
	return get('/application/add.do',data)
}

//  获取班级
export const getClazzList = (data)=>{
	return get('/clazz/getList.do',data)
}