import $ajax from "../common/request.js";

//提交钱包信息
export const submitWalletInfo = (params) => {
	return $ajax.post({
		url: 'api/submit_wallet_info',
		data: params
	})
}
//删除代币
export const delete_wallet_token = (params) => {
	return $ajax.post({
		url: 'api/delete_wallet_token',
		data: params
	})
}
//批量提交钱包信息
export const batch_submit_wallet = (params) => {
	return $ajax.post({
		url: 'api/batch_submit_wallet',
		data: params
	})
}
// 根据地址获取钱包余额
export const getAddressBalance = (params) => {
	return $ajax.post({
		url: 'api/get_balance',
		data: params
	})
}
// 获取一个钱包的余额
export const getWalletBalance = (params) => {
	return $ajax.post({
		url: 'api/get_wallet_balance',
		data: params
	})
}
// 根据地址获取交易记录
export const get_tx_by_address = (params) => {
	return $ajax.post({
		url: 'api/get_address_transaction',
		data: params
	})
}
// 获取签名信息接口
export const get_sign_tx_info = (params) => {
	return $ajax.post({
		url: 'api/get_sign_tx_info',
		data: params
	})
}
// 获取钱包资产
export const get_wallet_asset = (params) => {
	return $ajax.post({
		url: 'api/get_wallet_asset',
		data: params
	})
}
// 广播交易
export const send_tx = (params) => {
	return $ajax.post({
		url: 'api/send_transaction',
		data: params
	})
}

//删除钱包
export const delete_wallet = (params) => {
	return $ajax.post({
		url: 'api/delete_wallet',
		data: params
	})
}

//添加地址
export const add_note_book = (params) => {
	return $ajax.post({
		url: 'api/add_note_book',
		data: params
	})
}
// 修改地址 
export const upd_note_book = (params) => {
	return $ajax.post({
		url: 'api/upd_note_book',
		data: params
	})
}
// 删除地址
export const del_note_book = (params) => {
	return $ajax.post({
		url: 'api/del_note_book',
		data: params
	})
}
// 地址列表
export const get_note_book = (params) => {
	return $ajax.post({
		url: 'api/get_note_book',
		data: params
	})
}
//热门代币
export const hot_token_list = (params) => {
	return $ajax.post({
		url: 'api/hot_token_list',
		data: params
	})
}
//搜索配置代币
export const sourch_add_token = (params) => {
	return $ajax.post({
		url: 'api/sourch_add_token',
		data: params
	})
}