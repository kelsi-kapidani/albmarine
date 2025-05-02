import { Col, Row } from "antd";


export function About() {

    return(
        <>
        <Row><img src='./about.jpg' style={{width: '100%',
                      height: '200px',
                      objectFit: 'cover'}}/></Row>
        <Row justify='center' style={{marginTop:'10px', fontWeight:'bold', fontSize:'25px'}}>Who Are We</Row>
        <Row justify='space-around' gutter={24} style={{padding: '0 20px'}}>
            <Col span={12}>
            <Row justify='center' style={{ fontWeight:'bold', fontSize:'20px'}}>First Class Agency</Row>
            <Row style={{textAlign:'right', marginTop:'14px'}}>ALBMARINE  ltd   provides a full range of services to owners, charterers, traders operating in all ALBANIAN ports and terminals. We have established and maintains a Quality Management System according to the standards of  ISO 9001:2008.</Row>
            </Col>
            <Col span={12}>
            <Row justify='center' style={{ fontWeight:'bold', fontSize:'20px'}}>General</Row>
            <Row style={{textAlign:'left'}}>
                <p>As a ship agent and forwarder, we can offer you wide variety of services like at high and reliable professional standards: full agency; husbandry agency; protective agency; assistance on all maritime surveys; crew change (visa arrangement); ship spares handling/spare parts clearance & delivery; cargo supervision/cargo superintend; stevedoring arrangements/hire of port handling equipments; holds cleaning and washing.</p>
                <p>We have a steady and continuous connection with some shipping companies that trust us for their ships. As a service directly related to the accompanying documentation, we guarantee the security of information through reciprocal relationships established on reliability.</p>
                <p>We are proud that we always offer services designed to meet individual needs of every client. We believe that this is our main advantage over our competitors. Our Customers can be sure that have an experienced partner that will deliver correct advice and good service.</p>
                <p>Working with us, you get solutions in our ports with local expertise through our Full Agency services. Its all about standards of operations, best pricing, and dedicated people on duty to maximize your utilization management fleet.</p>
                </Row></Col>
        </Row>
        </>
    )
}