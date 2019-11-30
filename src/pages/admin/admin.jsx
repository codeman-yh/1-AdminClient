import React,{Component} from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';

import storageUtils from '../../utils/storageUtils.js'
import memoryUtils from '../../utils/memoryUtils.js'


import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const { Footer, Sider, Content } = Layout;
export default class Admin extends Component{
    render(){
        //读取保存的user如果不存在，直接跳转到'/login'
        //const user = JSON.parse(localStorage.getItem('user_key')||'{}')
        //const user = storageUtils.getUser();
        const user = memoryUtils.user
        if(!user._id){
            //this.props.replace('/login') //事件回调函数中进行路由跳转
            return <Redirect to="/login"/> //自动跳转到指定的路由路径
        }
        return(
            <Layout style={{height:'100%'}}>
            <Sider>
                <LeftNav/>
            </Sider>
            <Layout>
              <Header/>
              <Content style={{backgroundColor:'white'}}>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/category' component={Category}/>
                    <Route path='/product' component={Product}/>
                    <Route path='/role' component={Role}/>
                    <Route path='/user' component={User}/>
                    <Route path='/charts/bar' component={Bar}/>
                    <Route exact path='/charts/line' component={Line}/>
                    <Route path='/charts/pie' component={Pie}/>
                    <Redirect to='/home'/>
                </Switch>
              </Content>
              <Footer style={{textAlign:'center',color:'#aaaaaa'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
            </Layout>
          </Layout>
        )
    }
}