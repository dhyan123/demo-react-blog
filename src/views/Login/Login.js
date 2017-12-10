import React, { Component } from 'react';
import axios from 'axios';
import {Layout, Form, Input, Icon, Button, Checkbox} from 'antd';

const {Content}  = Layout;
const FormItem = Form.Item;

const style = {
  container: {
    height: '100%',
    padding: '10px 5%'
  },
  content: {
    backgroundColor: '#fff',
    padding: '80px 0',
    fontSize: '16px'
  },
  formContainer: {
    margin: '0 auto',
    width: '20%',
    minWidth: 360
  },
  title: {
    textAlign: 'center',
    margin: '20px 0'
  },
  submitBtn: {
    width: '100%'
  },
  loginForm: {
    width: '100%;'
  },
  forgot: {
    float: 'right'
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.userLogin = this.userLogin.bind(this);
  }
  userLogin(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout style={style.container}>
        <Content style={style.content}>
          <div style={style.formContainer}>
            <h1 style={style.title}>用户登录</h1>
            <Form onSubmit={this.userLogin} style={style.loginForm}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名/手机号/邮箱" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="账户密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(
                  <Checkbox>记住我</Checkbox>
                )}
                <a style={style.forgot} href="">忘记密码？</a>
                <Button type="primary" htmlType="submit" style={style.submitBtn}>
                  登录
                </Button>
                没有账号？ <a href="">现在注册!</a>
              </FormItem>
            </Form>
          </div>
        </Content>
      </Layout>
    );
  }

}

export default Form.create()(Login);