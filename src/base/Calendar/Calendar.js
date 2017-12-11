import React, { Component } from 'react';
import {Calendar} from 'antd';

class SideCalendar extends Component {

  render() {
    return (
      <div style={{ width: '90%', margin: '0 auto', border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} />
      </div>
    );
  }

}

export default SideCalendar;