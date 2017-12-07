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
  body: {
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
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    };
    this.checkUserName = this.checkUserName.bind(this);
    this.checkConfirm = this.checkConfirm.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
  }
  userRegister(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        
      }
    });
  }
  checkUserName(rule, value, cb){
    if(!value) return cb();
    value = value.trim();
    if(!value) return cb('好好起名行不');
    axios.post('/api/search/username', {userName: value})
    .then((res) => {
      if(res.status === 200 && res.code === 0){
        cb();
      }else{
        cb(res.data.msg);
      }
    });
  }
  checkConfirm(rule, value, cb){
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    cb();
  }
  checkPassword(rule, value, cb){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      cb('两次输入的密码不一致!');
    } else {
      cb();
    }
  }
  handleConfirmBlur(e){
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout style={style.container}>
        <Content style={style.content}>
          <div style={style.body}>
            <h1 style={style.title}>欢迎注册我的博客</h1>
            <Form onSubmit={this.userRegister}>
              <FormItem label={'用户名'}>
                {
                  getFieldDecorator('userName', {
                    rules: [
                      {required: true, message: '用户名必须输入!'},
                      {validator: this.checkUserName}
                    ]
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                  )
                }
              </FormItem>
              <FormItem label={'密码'}>
                {
                  getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: '密码必须输入!'
                      },
                      {
                        validator: this.checkConfirm
                      }
                    ]
                  })(
                    <Input
                      type="password"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      onBlur={this.handleConfirmBlur}
                    />
                  )
                }
              </FormItem>
              <FormItem label={'确认密码'}>
                {
                  getFieldDecorator('confirm', {
                    rules: [
                      {
                        required: true,
                        message: '确认密码必须输入!'
                      },
                      {
                        validator: this.checkPassword
                      }
                    ]
                  })(
                    <Input
                      type="password"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                  )
                }
              </FormItem>
              <FormItem>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>我已经阅读并且会遵守 <a href="">用户条款</a></Checkbox>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" style={style.submitBtn}>注册</Button>
              </FormItem>
            </Form>
          </div>
        </Content>
      </Layout>
    );
  }

}

export default Form.create()(Register);