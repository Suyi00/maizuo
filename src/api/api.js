//发送具体的请求
//导入需要的模块
import http from '@/api/http'
import {
    nowPlayingListUrl , 
    comingSoonListUrl ,
    moiveDetailUrl,
} from '@/config/url'

//请求 正在热映 列表数据   http导出来的就是axios，避免和没封装的 axios重名
export const nowPlayingListData = (pageNum) => {
    return http.get(nowPlayingListUrl + pageNum);
}

//请求 即将上映 列表数据
export const comingSoonListData = (pageNum) => {
    return http.get(comingSoonListUrl + pageNum);
}


export const moiveDetailDta = (filmId) => {
    http.defaults.headers.info = "info";
    return http.get(moiveDetailUrl + filmId)
}