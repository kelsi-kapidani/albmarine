import { Col, Row } from "antd";
import { services } from "../db";
import { Grid } from 'antd';
import { useEffect } from "react";
import { useLocation } from "react-router";

const { useBreakpoint } = Grid;

export function Services () {

    const location = useLocation();
    const sectionId = location.state?.sectionId;
  
    useEffect(() => {
      window.scrollTo(0,0);
      if (sectionId !== undefined) {
        const scrollY = [0, 400, 800, 1200, 1550, 1550][sectionId] || 0;
  
        const timeout = setTimeout(() => {
          window.scrollTo({ top: scrollY, behavior: 'smooth' });
        }, 200);
        return () => clearTimeout(timeout);
      }
    }, [sectionId]);

    const screen= useBreakpoint();
    
    if (screen.xs) {
        return (
            services.map((service)=>(
                <>
                <div>
                    <Row 
                        justify='center' 
                        style={{
                            fontWeight:'bold',
                            fontSize:'30px', 
                            backgroundColor:'#fff', 
                            color:'#003B6F', 
                            textAlign:'center', 
                            marginBottom:'5px',
                            padding: '0 20px'}}>
                        {service.title}
                    </Row>
                    <Row justify='space-around' align='middle'gutter={24} style={{marginBottom:'10px', padding: '0 20px'}}> 
                    <Col span={24}><img 
                    src={service.image2}
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        marginTop: '20px'
                    }}/>
                    </Col>
                    <Col span={24} style={{color:'#003B6F', textAlign:'center', fontWeight:'bold'}}><p style={{ whiteSpace: 'pre-line' }}>{service.paragraph}</p></Col>
                    </Row>
                </div>
                </>
        ))
        )
    }
    return (
        services.map((service)=>(
            <>
            <div>
                <Row 
                    justify='center' 
                    style={{
                        fontWeight:'bold',
                        fontSize:'30px', 
                        backgroundColor:'#fff', 
                        color:'#003B6F', 
                        textAlign:'center', 
                        marginBottom:'5px',
                        marginTop:'40px',
                        padding: '0 20px'}}>
                    {service.title}
                </Row>
                <Row justify='space-around' align='middle'gutter={24} style={{marginBottom:'10px', padding: '0 20px'}}> 
                {service.index%2 ? (
                <>
                <Col span={12}><img 
                src={service.image2}
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    marginTop: '20px'
                }}/>
                </Col>
                <Col span={12} style={{color:'#003B6F', textAlign:'left', fontWeight:'bold'}}><p style={{ whiteSpace: 'pre-line' }}>{service.paragraph}</p></Col></>
                ):(
                <>
                <Col span={12} style={{color:'#003B6F', textAlign:'right', fontWeight:'bold'}}><p style={{ whiteSpace: 'pre-line' }}>{service.paragraph}</p></Col>
                <Col span={12} ><img 
                src={service.image2}
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    marginTop: '20px'
                }}/>
                </Col>
                </>
                )}
                </Row>
            </div>
            </>
    ))
    )
}