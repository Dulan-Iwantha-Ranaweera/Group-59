import { Layout, Menu } from "antd";
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
import { BsBoxFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import './styel/dashboard.css';

import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./styel/dashboard";
import Profile from "./styel/profile";
import Previous  from "./styel/previousfines";
import Emergency from "./styel/emergencyreport";
import About  from "./styel/aboutus";
// import click from "./styel/addfine";
import {  Badge } from 'antd'



const { Header, Sider, Content } = Layout;
// const { Search } = Input;

function Fine() {
  return (
    <Layout className="main-outer">
      <Header className="header">
        <div className="brand">
          Fine<b><b>p</b></b>ay
        </div>
        {/* <div className="search">
          <Search placeholder="License Number" type="number"/>
        </div>  */}
      </Header>

      <Layout>
        <Sider theme="light" className="sider ">
          <Menu className="menu ">


            <Menu.Item icon={<IoMdHome  />}>
              <Link to='/' style={{textDecoration:"none"}}>Home</Link>
            </Menu.Item>

            <Menu.Item icon={<CgProfile />}>
              <Link to='/profile' style={{textDecoration:"none"}}>Profile</Link>
            </Menu.Item>

            <Menu.Item icon={<BsBoxFill />}>
              <Link to='/previous-fines' style={{textDecoration:"none"}}><Badge count={9} size="small">Previous Fines</Badge></Link>
            </Menu.Item>
             
            <Menu.Item icon={<FiAlertTriangle />}>
              <Link to='/emergency-report' style={{textDecoration:"none"}}>Emergency Report</Link>
            </Menu.Item>

            <Menu.Item icon={<FaBook />}>
              <Link to='/aboutus' style={{textDecoration:"none"}}>About Us</Link>
            </Menu.Item>


          </Menu>
        </Sider>
        
        <Content className="content" >
          <Routes>

            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/previous-fines' element={<Previous Fines/>}></Route>
            <Route path='/emergency-report' element={<Emergency Report/>}></Route>
            <Route path='/aboutus' element={<About Us/>}></Route>
            {/* <Route path='/addfine' element={<Click here/>}></Route> */}


          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Fine;
