import './App.css';
import "@arco-design/web-react/dist/css/arco.css";
import {Menu} from '@arco-design/web-react';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import {Layout} from '@arco-design/web-react';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
// import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
// // 导入不同页面的组件
import Home from './components/Home';
import About from './components/About';

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

// import {Router, Route, Link} from 'react-router'

function App() {
    return (
        <HashRouter>
            <div className='layout-basic-demo'>
                <Layout>
                    <Header>
                        <Menu mode='horizontal'  defaultSelectedKeys={['1']}>
                            <nav>
                                <MenuItem key='1'>
                                    <Link to="/index">首页</Link>
                                </MenuItem>
                                <MenuItem key='2'>
                                    <Link to="/about">关于</Link>
                                </MenuItem>
                            </nav>
                        </Menu>
                    </Header>
                    <Content>
                        <div>
                            <Routes>
                                <Route path="/index" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                            </Routes>
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        </HashRouter>
    );
}

export default App;
