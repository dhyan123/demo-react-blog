import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon, Dropdown, Button, Avatar } from 'antd';
import {connect} from 'react-redux';

const MenuItem = Menu.Item;

const style = {
  menuLeft: {
    lineHeight: '64px',
    float: 'left'
  },
  menuRight: {
    lineHeight: '64px',
    float: 'right'
  }
};

const menu = (
  <Menu>
    <MenuItem>
      <Link to="/">
        <Button>用户中心</Button>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/">
        <Button>退出登录</Button>
      </Link>
    </MenuItem>
  </Menu>
);

const menuType = {
  theme: "dark",
  mode: "horizontal"
};

@connect(
  state => state.userReducer
)
class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'index'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    console.log(e.key);
    this.setState({
      current: e.key
    })
  }
  render() {
    const isLogin = (
      <Dropdown
        overlay={menu}
        placement="bottomCenter"
      >
        <div style={{float: 'right', display: 'flex', alignItems: 'center', margin: '0 30px', cursor: 'pointer'}}>
          <Avatar icon="user" />
          <h3 style={{color: '#fff', margin: 0, lineHeight: '64px', margin: '0 10px'}}>Admin</h3>
        </div>
      </Dropdown>
    );
    const unLoadin = (
      <Menu
        {...menuType}
        style={style.menuRight}
        selectedKeys={[this.state.current]}
        onClick={this.handleClick}
      >
        <MenuItem key="login">
          <Link to="/login">
            <Icon type="login" /> 登陆
          </Link>
        </MenuItem>
        <MenuItem key="register">
          <Link to="/register">
            <Icon type="user" /> 注册
          </Link>
        </MenuItem>
      </Menu>
    );
    return (
      <div>
        <Menu
          {...menuType}
          style={style.menuLeft}
          selectedKeys={[this.state.current]}
          onClick={this.handleClick}
        >
          <MenuItem key="index">
            <Link to="/">
              <Icon type="home" /> 主页
            </Link>
          </MenuItem>
          <MenuItem key="note">
            <Link to="/note">
            <Icon type="heart-o" /> 留言
            </Link>
          </MenuItem>
          <MenuItem key="serch">
            <Link to="/search">
              <Icon type="search" /> 搜索
            </Link>
          </MenuItem>
          <MenuItem key="about">
            <Link to="/about">
              <Icon type="flag" /> 关于
            </Link>
          </MenuItem>
        </Menu>
        {this.props.login ? isLogin : unLoadin}
      </div>
    );
  }

}

export default NavHeader;