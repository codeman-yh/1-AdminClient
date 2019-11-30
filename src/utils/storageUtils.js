import store from 'store'
const USER_KEY =  'user_key'


/*
    包含n个 local storage 的工具函数模块
*/

export default{
    /*
        保存user
    */
    saveUser(user){
        //localStore只能保存string,如果传递的是对象，会自动调动对象的toString()并保存
        //localStorage.setItem(USER_KEY,JSON.stringify(user))//保存的必须是对象的JSON串
        store.set(USER_KEY,user)
    },
    /* 
        返回一个user对象，如果没有返回一个{}
    */ 
    getUser(){
        //return JSON.parse(localStorage.getItem(USER_KEY) || '{}');
        return store.get(USER_KEY)||{}
    },
    /*
        删除保存的user
    */
    removeUser(){
       // localStorage.removeItem(USER_KEY)
       store.remove(USER_KEY)
    }
}