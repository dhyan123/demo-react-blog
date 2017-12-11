import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const btnTexts = [
  {
    icon: "edit",
    text: '写文章'
  },
  {
    icon: "user",
    text: '个人中心'
  }
];

class UserCard extends Component {

  render() {
    const btnItems = btnTexts.map((item, index) => {
      return (
        <div key={item.icon}>
          <Icon type={item.icon} /><span style={{margin: '0 5px'}}>{item.text}</span>
        </div>
      )
    })
    return (
      <Card
        style={{ width: '90%', margin: '8px auto 36px'}}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={btnItems}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    );
  }

}

export default UserCard;