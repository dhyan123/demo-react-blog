import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';

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

const menuType = {
  theme: "dark",
  mode: "horizontal"
};

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'index'
    };
  }
  render() {
    return (
      <div>
        <Menu
          {...menuType}
          style={style.menuLeft}
        >
          <MenuItem key="index">
            <Link to="/">
              <Icon type="home" /> 主页
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/note">
            <Icon type="heart-o" /> 留言
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/search">
              <Icon type="search" /> 搜索
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">
              <Icon type="flag" /> 关于
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          {...menuType}
          style={style.menuRight}
        >
          <MenuItem>
            <Link to="/longin">
              <Icon type="login" /> 登陆
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register">
              <Icon type="user" /> 注册
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }

}

export default NavHeader;