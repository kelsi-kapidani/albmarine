import { Menu , Row , Col , Drawer , Grid, Dropdown, Space } from 'antd'
import { useNavigate } from 'react-router'
import { DownOutlined, GlobalOutlined, MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import '../index.css'


const { useBreakpoint } = Grid;


export function NavBar() {

    const [open, setOpen] = useState(false);
    const [nestedOpen, setNestedOpen] = useState(false);

    const navigate = useNavigate()
    const screen = useBreakpoint();
    
    const navigateNewPage = (address: string) => {
      navigate(address);
      window.scrollTo(0,0);

    }
    const scrollToService = (sectionId: number) => {
      navigate('/shipping_services', { state: { sectionId } });
    };
    
    
    const menuss = (
      <Menu>
        <Menu.Item onClick={() => scrollToService(0)}>Shipping Agency</Menu.Item>
        <Menu.Item onClick={() => scrollToService(1)}>Freight Forwarder</Menu.Item>
        <Menu.Item onClick={() => scrollToService(2)}>Cargo Surveyor</Menu.Item>
        <Menu.Item onClick={() => scrollToService(3)}>ISM Ship Management</Menu.Item>
        <Menu.Item onClick={() => scrollToService(4)}>ISPS Code</Menu.Item>
        <Menu.Item onClick={() => scrollToService(5)}>Tally Services</Menu.Item>
      </Menu>
    )
     
    const menumt = (
      <Menu>
        <Menu.Item onClick={() => navigateNewPage('/maritime_training')}>Skipper Training</Menu.Item>
        <Menu.Item onClick={() => navigateNewPage('/maritime_training')}>STCW Training</Menu.Item>
        
      </Menu>
    )
    
    const menuca = (
      <Menu>
        <Menu.Item onClick={()=> window.open('https://www.marinetraffic.com/en/ais/home/centerx:-12.0/centery:25.0/zoom:4')}>MarineTraffic</Menu.Item>
        <Menu.Item onClick={()=> window.open('https://weather.metoffice.gov.uk/specialist-forecasts/coast-and-sea/shipping-forecast')}>MET Office</Menu.Item>
        <Menu.Item onClick={()=> window.open('https://sea-distances.org/')}>Sea Distance</Menu.Item>
       
      </Menu>
    )

    if (screen.xs) {
        return (
          <div style={{boxSizing: 'border-box', 
          position: 'fixed',
          top: 0,
          width: '100%',
          left: 0,
          zIndex: '1000'}}>
            <Row justify='space-between' align="middle" style={{ padding: '10px 20px', width: '100%' , backgroundColor:'#003B6F'}}>
            <Col className="custom-col-text" style={{fontSize: '30px' , marginLeft: '5px', cursor:'pointer' , color:'#fff' , fontWeight:'bold'}} onClick={()=>navigate('/')}>ALBMARINE</Col>
            <Col className="custom-col-icon">
            <MenuOutlined style={{fontSize:'25px' , color:'#fff'}} onClick={()=>setOpen(true)}/>
            <Drawer width='200' style={{backgroundColor:'#003B6F'}} maskClosable={true}  closable={false} onClose={()=>setOpen(false)} open={open}>
            <Menu className="custom-menu" style={{backgroundColor:'#003B6F'}}>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=> {setOpen(false);navigateNewPage('/')}}>Home</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=> {setOpen(false);navigateNewPage('/shipping_services')}}>Shipping Services</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=> {setOpen(false);navigateNewPage('/maritime_training')}}>Maritime Training</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=>{setNestedOpen(true)}}>Captain's Area</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=>{setOpen(false);navigateNewPage('/about')}}>About Us</Menu.Item>
                <Menu.Item style={{color:'#FFFFFF'}} onClick={()=>{setOpen(false);navigateNewPage('/contact')}}>Contact</Menu.Item>
            </Menu>
            </Drawer>
            <Drawer
              title="Captain's Area"
              width='200'
              placement="right"
              closable
              onClose={() => setNestedOpen(false)}
              open={nestedOpen}
              style={{ position: 'fixed', backgroundColor:'#003B6F', color:'#fff' }}>
            <Menu style={{backgroundColor:'#003B6F', color:'#fff'}}>
              <Menu.Item style={{backgroundColor:'#003B6F', color:'#fff'}}onClick={()=> window.open('https://www.marinetraffic.com/en/ais/home/centerx:-12.0/centery:25.0/zoom:4')}>MarineTraffic</Menu.Item>
              <Menu.Item style={{backgroundColor:'#003B6F', color:'#fff'}}onClick={()=> window.open('https://weather.metoffice.gov.uk/specialist-forecasts/coast-and-sea/shipping-forecast')}>MET Office</Menu.Item>
              <Menu.Item style={{backgroundColor:'#003B6F', color:'#fff'}}onClick={()=> window.open('https://sea-distances.org/')}>Sea Distance</Menu.Item>
            </Menu>
            </Drawer>
            </Col>
            </Row>
            </div>
    )
    }
    return(
        <div style={{ 
          padding: '10px 20px', 
          width: '100%' , 
          backgroundColor:'#003B6F' , 
          color:'#fff',
          boxSizing: 'border-box', 
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: '1000'}}>
        <Row justify='space-between' align="middle" style={{marginBottom: '10px' }}>
          <Col >ALBMARINE</Col>
          <Col><GlobalOutlined style={{ fontSize: '20px'}}/></Col>
        </Row>
        <Row justify='space-evenly' align="middle" style={{cursor:'pointer' }}>
            <Col onClick={()=>{navigate('/')}}>Home</Col>
            <Col onClick={()=>{navigateNewPage('shipping_services')}}><Dropdown trigger={['hover']} overlay={menuss}><Space>Shipping Services<DownOutlined /></Space></Dropdown></Col>
            <Col onClick={()=>{navigateNewPage('/maritime_training')}}><Dropdown trigger={['hover']} overlay={menumt}><Space>Maritime Training<DownOutlined /></Space></Dropdown></Col>
            <Col><Dropdown trigger={['hover']} overlay={menuca}><Space>Captain's Area<DownOutlined /></Space></Dropdown></Col>
            <Col onClick={()=>{navigateNewPage('/about')}}>About Us</Col>
            <Col onClick={()=>{navigateNewPage('/contact')}}>Contact</Col>
        </Row>
        </div>
    )
}
