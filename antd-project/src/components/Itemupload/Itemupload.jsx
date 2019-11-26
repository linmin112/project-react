import React from 'react';
import {Button, Radio, Icon } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
export default class Itemupload extends React.Component {
  state = {
    size: '',
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  render() {
    const { size } = this.state;
    return (
      <div>   
        <Title level={2} style={{textAlign:'center'}}>学生项目上传</Title>      
        <Button type="primary" size={size}>
         提交
        </Button>
        <Button size={size} >返回</Button>
      </div>
    );
  }
}


