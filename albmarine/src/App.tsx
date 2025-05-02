
import {  Row , Grid } from 'antd'
import { Outlet, useLocation } from 'react-router'
import { NavBar } from './main_components/NavBar';
import { FootNote } from './main_components/FootNote';
import { Home } from './pages/Home';

const { useBreakpoint } = Grid;

function App() {

  const screen=useBreakpoint();
  const url = useLocation().pathname;
  let mts = '69px';
  if(screen.xs) {
    mts ='0px';
  }

  if(url==='/') {
    return (
       <Row gutter={[0.40]} style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#fff'}}>
        <NavBar/>
        <div style={{ flex: 1 ,  paddingTop:mts}}>
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
      <div style={{ flex: 1,   paddingTop: mts }}>
      <Outlet/>
      </div>
      <FootNote/>
    </Row>
)
}

export default App
