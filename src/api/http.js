//封装 axios请求拦截器（就是两个请求头）
import axios from "axios";

//设置基础域名
axios.defaults.baseURL = "https://m.maizuo.com/";
//请求拦截器处理，添加2个请求求 
axios.interceptors.request.use(function(config){
    console.log(config.headers.info);
    let host = "";
    let info = config.headers.info
    if(info == "film"){
        host = "mall.film-ticket.film.list";
    }
    if(info == "cinema"){
        host = "mall.film-ticket.cinema.list";
    }
    if(info == info){
        host = "mall.film-ticket.film.info";
    }


    config.headers = {
       "X-Client-Info": 
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16635554292331591716110337","bc":"310100"}',
       "X-Host":host,
       "X-Requested-With":"XMLHttpRequest",
       "X-Token":"undefined",
    }

    return config
},function(err){
    console.log(err);
})
//导出封装好的 axios 
export default axios