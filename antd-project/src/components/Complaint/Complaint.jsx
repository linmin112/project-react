import React from 'react';
import { Input, Button, Breadcrumb } from 'antd';
const { TextArea } = Input;
export default class Complaint extends React.Component {
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
        <Breadcrumb separator=">">
          <Breadcrumb.Item>学员后台</Breadcrumb.Item>
          <Breadcrumb.Item href="">匿名投诉</Breadcrumb.Item>
        </Breadcrumb>
        <TextArea rows={15} />
        <Button type="primary" size={size}>
          添加
        </Button>
        <Button size={size} >返回</Button>
      </div>
    );
  }
}


