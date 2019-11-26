import React from 'react';
import {Input} from 'antd';
const { TextArea } = Input;
export default class Problem extends React.Component {
    render() {
        return (
            <div>
                <span style={{color:'red'}}>学员姓名:</span>
                <input type="text" />
                <br/>
                <span style={{color:'red'}}>问题内容:</span>
                <TextArea rows={4} />
            </div>

        );
    }
}