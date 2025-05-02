import { Card, Col, Row } from 'antd'
import { services } from '../db'
import { useNavigate } from 'react-router'
import '../index.css'

const { Meta } = Card;

export function Home () {
    
    const navigate = useNavigate();

    const scrollToService = (sectionId: number) => {
      navigate('/shipping_services');
      window.scrollTo({left: 0,top:sectionId*400});
    };

    return (
        <div>
        <Row className="image-wrapper">
            <img src='./mainwp.jpg' style={{width: '100%' , height: 'auto'}}/>
            <div className="image-text">Leader in maritime services and trainings in Albania</div>
        </Row>
        <Row justify='center'style={{fontSize:'16px',backgroundColor:'#003B6F',color:'#fff', textAlign: 'center', width: '100%', marginBottom:'20px', paddingTop:'20px', paddingBottom:'20px', fontWeight:'bold' }}>
        Providing full agency, husbandry and protective agency services in all ALBANIAN ports means your can always have an ALBMARINE ships agent taking care of your interests
        </Row>
        <Row justify='center'style={{fontSize:'30px' , backgroundColor:'#fff',color:'#003B6F', width: '100%', marginTop: '20px', marginBottom:'20px', paddingTop:'20px', paddingBottom:'20px', fontWeight:'bold' }}>
        Our Services
        </Row>
        <Row gutter={[24,32]} style={{marginBottom:'50px',  padding: '0 20px'}} >
        {services.map(service=>(
             <Col lg={8} md={12} sm={12}>
             <div onClick={() => scrollToService(service.index)}>
               <Card
                 hoverable
                 style={{
                   width: '100%',
                   borderRadius: '10px',
                   height: '480px',
                   backgroundColor: '#003B6F',
                   border:'none'
                 }}
                 cover={<img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}/>
                 }>
                <Meta
                    title={<div style={{ whiteSpace: 'normal', wordWrap: 'break-word', textAlign: 'center' , height: '30px' , color: '#ffffff'}}>{service.title}</div>}
                    description={<div style={{ whiteSpace: 'normal', wordWrap: 'break-word', textAlign: 'center' , minHeight: '200px' , color: '#dcdcdc'}}>{service.description}</div>}
                />
               </Card>
             </div>
           </Col>
        ))}
        </Row>
        </div>
    )
}