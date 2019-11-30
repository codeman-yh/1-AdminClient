/*
    包含n个接口请求函数的模块
 */

 import ajax from './ajax'
 //import qs from 'qs'


 //登陆
 export const reLogin = (username,password) => ajax.post('/login',{username,password})


/*  export  function reLogin (username,password){
    return ajax({
         method:'post'
         url:'http://localhost:3000/login2',
         data:{
             username,
             password
         }
     })
 }
 */
/*  const name = 'admin'
 const pwd = 'admin'
 reLogin(name,pwd).then(result=>{
     
     console.log('请求成功了',result)
 },
    error=>{
        console.log('请求失败了',error)
        alert('请求失败')
    }
) */