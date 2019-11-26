import React from 'react';
import {Button, Input } from 'antd';
const { TextArea } = Input;
export default class Weekly extends React.Component{
    state = {
        size: 'default',
      };
      handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };
      render() {
        const { size } = this.state;
        return (
          <div>             
            <span style={{color:'red',marginTop:'10px'}}>学员姓名:</span>
                <input type="text" style={{marginTop:'10px'}}/>
                <br/>
                <span style={{color:'red',marginTop:'10px'}}>周报主题:</span>
                <input type="text" style={{marginTop:'10px'}}/>
                <br/>
                <span style={{color:'red',marginTop:'10px'}}>周报内容:</span>
                <TextArea rows={4} />     
            <Button type="primary" size={size}>
             添加
            </Button>
            <Button size={size} >返回</Button>
          </div>
        );
      }
}