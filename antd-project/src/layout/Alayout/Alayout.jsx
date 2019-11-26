import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Complaint from '../../components/Complaint/Complaint';
import Problem from '../../components/Problem/Problem';
import Itemupload from '../../components/Itemupload/Itemupload'
import Stuvip from '../../components/Stuvip/Stuvip'
import Weekly from '../../components/Weekly/Weekly'
import Mine from '../../components/Mine/Mine'
import MonneyDetail from '../../components/MonneyDetail/MonneyDetail'
import Exam from '../../components/Exam/Exam'
import List from '../../components/List/List'
import Inquiry from '../../components/Inquiry/Inquiry'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Acontent = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    学员后台
                    </span>
                            }
                        >
                            <Menu.Item key="1"><Link to="/nav1/option1">匿名投诉</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/nav1/option2">技术问题</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/nav1/option3">项目上传</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/nav1/option4">VIP</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/nav1/option5">学院周报</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/nav1/option6">我的资料</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/nav1/option7">交费明细</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/nav1/option8">参加考试</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/nav1/option9">学员评价</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/nav1/option10">教学评测</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="laptop" />
                                    学员考勤
                    </span>
                            }
                        >
                            <Menu.Item key="5"><Link to="/nav1/option5">学员请假</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/nav1/option6">学员违纪</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Switch>
                        <Route path="/nav1/option1">
                            <Complaint />
                        </Route>
                        <Route path="/nav1/option2">
                            <Problem />
                        </Route>
                        <Route path="/nav1/option3">
                            <Itemupload />
                        </Route>
                        <Route path="/nav1/option4">
                            <Stuvip />
                        </Route>
                        <Route path="/nav1/option5">
                            <Weekly />
                        </Route>
                        <Route path="/nav1/option6">
                            <Mine />
                        </Route>
                        <Route path="/nav1/option7">
                            <MonneyDetail />
                        </Route>
                        <Route path="/nav1/option8">
                            <Exam />
                        </Route>
                        <Route path="/nav1/option9">
                            <List />
                        </Route>
                        <Route path="/nav1/option10">
                            <Inquiry />
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Content>
    )
}


export default class Alayout extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <div style={{ width: '100%', height: '50px', backgroundColor: '#428bca' }}>
                        <img src="../../../public/logo-qf.png" alt="" style={{ width: '20px', height: '50px' }} />
                    </div>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">
                                <Link to="/nav1">学生管理</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/nav2">教学管理</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/nav3">成绩管理</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Switch>
                        <Route path="/nav1">
                            <Acontent />
                        </Route>
                        <Route path="/nav2">
                            <div>1</div>
                        </Route>
                        <Route path="/nav3">
                            <div>2</div>
                        </Route>
                    </Switch>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Router>
        )
    }
}