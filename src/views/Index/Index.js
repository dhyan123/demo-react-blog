import React, { Component } from 'react';
import { Layout } from 'antd';
import SideBar from '../../base/SiderBar/SideBar.js';

import { List, Avatar, Icon } from 'antd';

const { Content } = Layout;

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const pagination = {
  pageSize: 10,
  current: 1,
  total: listData.length,
  onChange: (() => {}),
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Index extends Component {
  
  render() {
    return (
      <Layout style={{height: '100%', padding: '10px 5%'}}>
        <Content style={{backgroundColor: '#fff', padding: '10px 30px'}}>
          
          <List
            itemLayout="vertical"
            size="large"
            pagination={pagination}
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              >
                <List.Item.Meta
                  title={<a href={item.href}>{item.title}</a>}
                />
                {item.content}
              </List.Item>
            )}
          />
          
          
        </Content>
        <SideBar/>
      </Layout>
    );
  }
}

export default Index;