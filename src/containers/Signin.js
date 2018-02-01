import React from 'react';
import {Grid,Row,Col,Button,Well} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Signin extends React.Component
{
render(){
return(
<div>
<Well style={{backgroundColor:'	#F5F5F5'}}>
<Grid >

<Row>
<Col xs={6} md={6}>
<label style={{color:'#000000',fontSize:'22px'}}>Email Id</label>

</Col>
<Col xs={6} md={6}>
<input type="email" id="email1" name="email1"  style={{color:'#000000',fontSize:'18px'}}/>
</Col>
</Row>

<Row>
<Col xs={6} md={6}>
<label style={{color:'#000000',fontSize:'22px'}}>Password</label>

</Col>
<Col xs={6} md={6}>
<input id="password1" name="password1" type="password" style={{color:'#000000',fontSize:'22px'}} />
</Col>
</Row>
<br/>
<br/>

<Row>
<Col xs={6} md={6}>
<Button bsStyle="success" style={{color:'#000000',fontSize:'22px'}}>Login</Button>

</Col>
<Col xs={6} md={6}>
<Button bsStyle="primary" style={{color:'#fff',fontSize:'22px'}}><Link to="/forgotpassword" style={{color:'#fff'}}>Forgot Password</Link></Button>
</Col>
</Row>



</Grid>
</Well>
</div>
);
}//end of render
}//end of class
export default Signin;
