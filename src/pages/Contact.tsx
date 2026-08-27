import { EnvironmentFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import emailjs from 'emailjs-com'


export function Contact () {

    const [form] = Form.useForm();
  
    const sendEmail = (values: { name: string; email: string; message: string; }) => {
      console.log('Sending with values:', values);
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      };
      ///emailjs template data
      emailjs.send('service_6w5og6e', 'template_e37n3p4', templateParams, 'kZ5WkB9cWkrSbsnBT')
      .then(() => {
        message.success('Email sent successfully!');
        form.resetFields();
      })
      .catch((error) => {
        message.error('Failed to send email. Please try again.');
        console.error('EmailJS error:', error);
      });
    };
        return(
            <div style={{color:'#003B6F'}}>
            <Row onClick={()=>window.open('https://www.google.com/maps/place/Rruga+Egnatia,+Durr%C3%ABs,+Albania/@41.3137734,19.4469149,17z/data=!3m1!4b1!4m6!3m5!1s0x134fda4a3ff9bfef:0xd1ee706d8b7a20a7!8m2!3d41.3137694!4d19.4494898!16s%2Fg%2F1w02gxrc?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D')}>
                <img 
                src='./map.png' 
                style={{
                    marginTop:'20px',
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    cursor:'pointer'}}/>
            </Row>
            <Row justify='center' style={{fontSize:'30px',marginTop:'10px',marginBottom:'20px'}}> 
                Get in Touch
            </Row>
            <Row justify='space-around'>
                <Col>
                <Row justify='center' style={{fontSize:'25px', marginBottom:'20px', width:'300px'}}>Send Us a Message</Row>
                <Row justify="center">
                <Form form={form} layout="vertical" onFinish={sendEmail}>
                    <Form.Item
                        label="Your Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name' }]}>
                        <Input placeholder="Your name" />
                    </Form.Item>
                    <Form.Item
                        label="Your Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Enter a valid email' }]}>
                        <Input placeholder="Your email" />
                    </Form.Item>
                    <Form.Item
                        label="Your Message"
                        name="message"
                        rules={[{ required: true, message: 'Please enter your message' }]}>
                        <TextArea placeholder="Your message" rows={6} maxLength={500} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>Send</Button>
                    </Form.Item>
                 </Form>
                </Row>
                </Col> 
                <Col>
                <Row  justify='center' style={{fontSize:'25px', marginBottom:'10px'}}>Contact Info</Row>
                <Row justify='center' style={{textAlign:'center'}}>You are welcome to get in touch with us if you have any questions.</Row>
                <Row  justify='center'style={{fontSize:'18px', marginTop:'20px'}}><PhoneFilled/>+355 68 2050835</Row>
                <Row justify='center' style={{fontSize:'18px'}}><MailFilled/>albship@gmail.com</Row>
                <Row  justify='center'style={{fontSize:'18px'}}><EnvironmentFilled/>Lagjia Nr.3, Rruga Egnatia</Row>
                </Col>
            </Row>
            </div>
        )
}