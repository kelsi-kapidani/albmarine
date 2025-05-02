import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

export function FootNote () {
    
    
    return(
        <Row justify='space-between' align='bottom'style={{boxSizing: 'border-box', background: '#003B6F', color: '#fff', paddingTop:'10px', paddingBottom:'20px'}}>
            <Col style={{paddingLeft:'10px'}}>
                <Row justify='start'>Contacts</Row>
                <Row><PhoneOutlined />+355 682050835</Row>
                <Row justify='space-between'><Col><MailOutlined />albship@gmail.com</Col></Row>
            </Col>
            <Col style={{paddingRight:'10px'}}>ALBMARINE SHIPPING CO ©2025</Col>
        </Row>
)
}