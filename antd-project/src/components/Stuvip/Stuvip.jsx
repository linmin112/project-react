import React from 'react';
import {Button, Typography,Input } from 'antd';
const { Title } = Typography;
const { TextArea } = Input;
export default class Stuvip extends React.Component{
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
            <Title level={4} style={{textAlign:'center',color:'red'}}>您还不是VIP学员，填写下面表单可以申请VIP学员！</Title> 
            <span style={{color:'red'}}>学员姓名:</span>
                <input type="text" />
                <br/>
                <span style={{color:'red'}}>申请理由:</span>
                <TextArea rows={4} />     
            <Button type="primary" size={size}>
             申请
            </Button>
            <Button size={size} >返回</Button>
          </div>
        );
      }
}