import React from 'react';
import { List, Typography } from 'antd';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
export default class List extends React.Component {
    render() {
        return (
            <div>
                <h2> √您的满意是对我们最好的评价，您的批评是给我们最大的改进动力，欢迎同学对千锋提出宝贵的批评和建议。</h2>
                <h3 style={{ marginBottom: 16 }}>Default Size</h3>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }

};