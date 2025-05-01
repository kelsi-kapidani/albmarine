import { Menu , Row , Col , Drawer , Grid, Dropdown, Space } from 'antd'
import { useNavigate } from 'react-router'
import { DownOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import '../index.css'


const { useBreakpoint } = Grid;

const menuss = (
  <Menu>
    <Menu.Item>Shipping Agency</Menu.Item>
    <Menu.Item>Freight Forwarder</Menu.Item>
    <Menu.Item>Cargo Surveyor</Menu.Item>
    <Menu.Item>Tally Services</Menu.Item>
    <Menu.Item>ISM Ship Management</Menu.Item>
    <Menu.Item>ISPS Code</Menu.Item>
  </Menu>
)
 
const menumt = (
  <Menu>
    <Menu.Item>Skipper Training</Menu.Item>
    <Menu.Item>STCW Training</Menu.Item>
    
  </Menu>
)

const menuca = (
  <Menu>
    <Menu.Item>MarineTraffic</Menu.Item>
    <Menu.Item>MET Office</Menu.Item>
    <Menu.Item>Sea Distance</Menu.Item>
   
  </Menu>
)

export function NavBar() {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate()
    const screen = useBreakpoint();
    if (screen.xs) {
        return (
            <Row justify='space-between' align="middle" style={{ padding: '10px 20px', width: '100%' , backgroundColor:'#003B6F'}}>
            <Col className="custom-col-text" style={{fontSize: '30px' , marginLeft: '5px', cursor:'pointer' , color:'#fff' , fontWeight:'bold'}} onClick={()=>navigate('/home')}>ALBMARINE</Col>
            <Col className="custom-col-icon">
            <MenuOutlined style={{fontSize:'25px' , color:'#fff'}} onClick={()=>setOpen(true)}/>
            <Drawer width='200' style={{backgroundColor:'#003B6F'}} maskClosable={true}  closable={false} onClose={()=>setOpen(false)} open={open}>
            <Menu className="custom-menu" style={{backgroundColor:'#003B6F'}}>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=> {setOpen(false);navigate('/')}}>Home</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=> {setOpen(false);navigate('/')}}>Shipping Services</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=> {setOpen(false);navigate('/')}}>Maritime Training</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=>{setOpen(false);navigate('/')}}>Captain's Area</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=>{setOpen(false);navigate('/')}}>About Us</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=>{setOpen(false);navigate('/')}}>Contact</Menu.Item>
            </Menu>
            </Drawer>
            </Col>
            </Row>
    )
    }
    return(
        <div style={{ padding: '10px 20px', width: '100%' , backgroundColor:'#003B6F' , color:'#fff',boxSizing: 'border-box'}}>
        <Row justify='space-between' align="middle" style={{marginBottom: '10px' }}>
          <Col >ALBMARINE</Col>
          <Col><GlobalOutlined style={{ fontSize: '20px'}}/></Col>
        </Row>
        <Row justify='space-evenly' align="middle">
            <Col>Home</Col>
            <Col><Dropdown trigger='hover' overlay={menuss}  onClick={()=>{navigate('/')}}><Space>Shipping Services<DownOutlined /></Space></Dropdown></Col>
            <Col><Dropdown trigger='hover' overlay={menumt}  onClick={()=>{navigate('/')}}><Space>Maritime Traveling<DownOutlined /></Space></Dropdown></Col>
            <Col><Dropdown trigger='hover' overlay={menuca}  onClick={()=>{navigate('/')}}><Space>Captain's Area<DownOutlined /></Space></Dropdown></Col>
            <Col onClick={()=>{navigate('/')}}>About Us</Col>
            <Col onClick={()=>{navigate('/')}}>Contact</Col>
        </Row>
        </div>
    )
}
