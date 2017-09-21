/**
 * Mocking client-server processing
 */
import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'https://api.github.com'
// axios.defaults.headers.common['Authorization'] = `token ${TOKEN}`
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


// POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    let URL = config.url.split(config.baseURL)
    return config
  }, (error) => {
    return Promise.reject(error)
  })
  
  // 返回状态判断
  axios.interceptors.response.use((res) => {
      //console.log(res)
    // 拦截器配置
    // if (res.data.success) {
    //   Tool.toast(res.data.msg)
    //   Tool.close()
    //   return Promise.reject(res)
    // }
    return res
  }, (error) => {
    return Promise.reject(error)
  })


  //封装获取数据
export const oGet = (url, params) => {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(res => {
          resolve(res.data)
        }, err => {
          reject(err)
        })
        .catch(err => {
          reject(err)
        })
    })
  };
  
  
  //封装发送数据
  export const oPost = (url, params) => {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(res => {
          resolve(res.data)
        }, err => {
          reject(err)
        })
        .catch(err => {
          reject(err)
        })
    })
  }


const _products = [
    { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
    { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
];

export default {
    getProducts(cb) {
        setTimeout(() => cb(_products), 100)
    },

    buyProducts(products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ?
            cb(): errorCb()
        }, 100)
    },
    
   //请求数据
    List () {
        //调用get方法
        return oGet(`https://www.easy-mock.com/mock/5926ae2191470c0ac1fde242/api/frontendguide/list`);
    },
    //简单的封装
    Get (link) {
         return oGet(link)
    }
}




