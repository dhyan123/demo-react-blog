import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import UserCard from '../UserCard/UserCard.js';
import Calendar from '../Calendar/Calendar.js';

const { Sider } = Layout;
const style = {
  siderContent: {
    backgroundColor: '#fff', 
    marginLeft: 20,
    overflow: 'hidden',
    padding: '20px 0',
    boxSizing: 'borderBox'
  }
};

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }
  handleCollapse(collapsed){
    this.setState({collapsed})
  }
  render() {
    let {collapsed} = this.state;
    return (
      <Sider
        width={300}
        style={{...style.siderContent, height: collapsed ? '140px' : '720px'}}
        breakpoint="lg"
        onCollapse={this.handleCollapse}
        reverseArrow={false}
      >
        {
          collapsed ?
          <Menu mode="inline">
            <Menu.Item key="1">
              <Icon type='user' />
              <span className="nav-text">写文章</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">用户中心</span>
            </Menu.Item>
          </Menu> :
          <div>
            <UserCard/>
            <Calendar/>
          </div>
        }
      </Sider>
    );
  }

}

export default SideBar;