import React from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () =>{
return(
<div >
<Grid>


<Row>
<Col xs={3} md={3}>
<label className="footerlabel1">Subscribe Me</label>
</Col>
 <Col xs={3} md={3}>
<input className="footerinput1" type="email" placeholder="name@email.com" style={{color:'#000000',fontSize:'18px'}}/>

</Col>

<Col xs={3} md={3}>
<Button className="footerbutton1" bsStyle="success">Subscibe</Button>

</Col>

<Col xs={3} md={3}>
<Button className="footerbutton1" bsStyle="info"><Link to ="/contactus">Contact us</Link></Button>

</Col>

</Row>


</Grid>
</div>





);


}
export default Footer;
