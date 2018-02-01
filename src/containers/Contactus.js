import React from 'react';
import {Well, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Contactus extends React.Component{
render(){
return(
  <div>
    <Well style={{backgroundColor:'#3f2f28'}}>
      <h1 className="Contactheading1" style={{color:'#fff'}}>Locate Us</h1>
    </Well>
    <Well style={{backgroundColor:'#0fd1e2'}}>
      <Button style={{marginLeft:'150px'}}><a href="https://www.google.co.in/maps/place/tecHindustan/@30.7110016,76.6840253,17z/data=!3m1!4b1!4m5!3m4!1s0x390fefaabc272b73:0x81a02cf789798927!8m2!3d30.710997!4d76.686214">Find Us on Google Maps</a></Button>
      <Button style={{marginLeft:'250px'}}><a href="https://www.facebook.com/techindustan/">Follow Us on Facebook</a></Button>
    </Well>
    <Well style={{backgroundColor:'#0fd1e2'}}>
      <p>
        Address: D-185, Phase 8Pm,,<br/>
        Industrial Area, Sector 74,<br/>
        Mohali, Sahibzada Ajit Singh Nagar, Punjab 160055<br/>
        Hours: Open ⋅ Closes 7PM <br/>
        Phone: 0172 668 0103
      </p>
    </Well>
  </div>
);
}
}//end of class
export default Contactus;
