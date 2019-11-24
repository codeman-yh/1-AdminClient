import React,{Component}from 'react'
import { Form, Icon, Input, Button } from 'antd';
import logo from './images/logo.png'
import './login.less'


const Item = Form.Item;

 class Login extends Component{
    handleSubmit = e => {
        e.preventDefault()
        // const form = this.props.form;
        // const values = form.getFieldsValue();
        // const username = form.getFieldValue('username');
        // const password = form.getFieldValue('password');
       // console.log(values,username,password);
       this.props.form.validateFields((err, values) => {
        if (!err) {
            //校验成功
            const {username,password} = values;
          alert(`提交登陆请求, username=${username},password=${password}`);
        }else{
            //校验失败
            alert('无法提交登陆请求');
        }
      });
      }

            /*密码进行自定义验证
            用户名/密码的的合法性要求
            1). 必须输入
            2). 必须大于4位
            3). 必须小于12位
            4). 必须是英文、数组或下划线组成
            */
           validator=(rule, value, callback)=>{
               value = value.trim();
                if(!value){
                    callback('必须输入');
                }else if(value.length<4){
                    callback('必须大于4位');
                }else if(value.length>12){
                    callback('必须小于12位');
                }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
                    callback('必须是英文、数组或下划线组成');
                }else {
                    callback();
                }
           }
    render(){
        const { getFieldDecorator} = this.props.form;
        return(
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目: 后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登陆</h1>
                 <Form onSubmit={this.handleSubmit} className="login-form">
                    <Item >
                        {
                            getFieldDecorator('username',{
                             /*对用户名进行声明性验证
                            用户名/密码的的合法性要求
                            1). 必须输入
                            2). 必须大于4位
                            3). 必须小于12位
                            4). 必须是英文、数组或下划线组成
                            */

                                rules:[{required:true,message:'请输入用户名'},
                                      {min:4,message:'必须大于4位'},
                                      {max:12,message:'必须小于12位'},
                                      {pattern:/^[a-zA-Z0-9_]+$/,message:'必须是英文、数组或下划线组成'}],
                            })( <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />)
                        }
                                         
                    </Item>
                    <Item > 
                        {
                            getFieldDecorator('password',{
                                rules:[{validator:this.validator}]
                            })( <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        />)
                        }    
                          
                    </Item>
                    
                    <Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" >
                    登 录 </Button>
                    </Item>
                </Form>
                </div>
            </div>
        ) 
       }
}            
const WrappedLoginForm = Form.create()(Login);
export default WrappedLoginForm
            


