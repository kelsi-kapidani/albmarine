
import {  Row } from 'antd'
import { Outlet, useLocation } from 'react-router'
import { NavBar } from './main_components/NavBar';
import { FootNote } from './main_components/FootNote';
import { Home } from './pages/Home';

function App() {

  const url = useLocation().pathname;
  if(url==='/') {
    return (
  
       <Row gutter={[0.40]} style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#fff'}}>
        <NavBar/>
        <div style={{ flex: 1 ,  paddingTop: '69px'}}>
        <Home />
        </div>
        <FootNote/>
      </Row>
  )
}
  return (
    <Row gutter={[0,40]} style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#fff'}}>
      <NavBar/>
      <div style={{ flex: 1,   paddingTop: '69px' }}>
      <Outlet/>
      </div>
      <FootNote/>
    </Row>
)
}

export default App
