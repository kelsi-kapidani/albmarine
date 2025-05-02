import { Col, Collapse, CollapseProps, Row } from "antd";
import { trainings } from "../db";
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export function Trainings () {

    const screen= useBreakpoint();

    const items: CollapseProps['items'] = trainings.map(training => ({
        label: <div style={{color:'#fff', fontWeight:'bold', textAlign:'center'}}>{training.title}</div>,
        children: <p style={{color:'#003B6F', fontWeight:'bold', whiteSpace: 'pre-line' }}>{training.description}</p>,
    }));
    if(screen.xs) {
        return(
            <div style={{color:'#003B6F',fontWeight:'bold'}}>
                <Row justify='center' style={{textAlign:'center', fontWeight:'bold', marginBottom:'20px', fontSize:'30px', marginTop:'20px'}}>Skipper Training Course</Row>
                <Row justify='space-around' align='middle' gutter={24} style={{marginBottom:'10px', padding: '0 20px'}}>
                    <Col span={12} xs={24}>
                    <img
                        src='./stc.jpg'
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            marginTop:'10px',
                            borderRadius: '10px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        }}/>
                    </Col>
                    <Col  span={12} xs={24}><p style={{textAlign:'center'}}>The goal of the skipper training is to enable the participants with an intensive practical revision of knowledge acquired formerly and so every 
                        further self reliant sailing trip will take place organized, professional and without any worries.Theoretic courses and practical training will be 
                        carried out by sailing with professionals, a top class sailer and an educational theorist. Each participant will do exercises for all sailing positions 
                        and tasks on the sailing boat also as a helmsman where the tasks and positions will be exchanged systematically.The acquired knowledge will surely be worth 
                        a mint and will contribute to faster and safer shipping.</p></Col>
                </Row>
                <Row justify='center' style={{textAlign:'center', fontWeight:'bold', marginBottom:'20px', fontSize:'30px', marginTop:'40px'}}>STCW Training</Row>
                <Row><Collapse accordion  expandIcon={() => null} items={items} style={{textAlign:'center',width:'100%', backgroundColor:'#003B6F'}}/></Row>
            </div>
        )
    }
    return(
        <div style={{color:'#003B6F',fontWeight:'bold'}}>
            <Row justify='center' style={{textAlign:'center', fontWeight:'bold', marginBottom:'20px', fontSize:'30px', marginTop:'20px'}}>Skipper Training Course</Row>
            <Row justify='space-around' align='middle' gutter={24} style={{marginBottom:'10px', padding: '0 20px'}}>
                <Col span={12} xs={24}>
                <img
                    src='./stc.jpg'
                    style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        marginTop:'10px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    }}/>
                </Col>
                <Col  span={12} xs={24}><p>The goal of the skipper training is to enable the participants with an intensive practical revision of knowledge acquired formerly and so every 
                    further self reliant sailing trip will take place organized, professional and without any worries.Theoretic courses and practical training will be 
                    carried out by sailing with professionals, a top class sailer and an educational theorist. Each participant will do exercises for all sailing positions 
                    and tasks on the sailing boat also as a helmsman where the tasks and positions will be exchanged systematically.The acquired knowledge will surely be worth 
                    a mint and will contribute to faster and safer shipping.</p></Col>
            </Row>
            <Row justify='center' style={{textAlign:'center', fontWeight:'bold', marginBottom:'20px', fontSize:'30px', marginTop:'40px'}}>STCW Training</Row>
            <Row><Collapse accordion  expandIcon={() => null} items={items} style={{width:'100%', backgroundColor:'#003B6F'}}/></Row>
        </div>
    )
}

