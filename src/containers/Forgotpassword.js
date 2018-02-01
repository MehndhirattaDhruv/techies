import React from 'react';
import {Grid,Row,Col,Button,Well} from 'react-bootstrap';
class Forgotpassword extends React.Component{
render(){
return(
<div>
<Well style={{backgroundColor:'	#F0F8FF'}}>
<Grid >
<Row>
<Col xs={4} md={4}>
<label style={{color:'#000000',fontSize:'22px'}}>Enter Email</label>
</Col>
<Col xs={3} md={3}>
<input type="email" placeholder="abc@email.com"style={{color:'#000000',fontSize:'22px'}}/>
</Col>
</Row>
<br/>
<br/>
<Row>
    <Col xs={4} md={4}>
    <label style={{color :"#000000",fontSize:'22px'}}>Select Security Question</label>

      </Col>
      <Col xs={3} md={3}>
      <select style={{color :"#000000",fontSize:'22px'}} >
      <option value="Favourite Colour">Favourite Colour</option>
      <option value="Favourite City">Favourite City</option>
      <option value="Favourite Dish">Favourite Dish</option>
      </select>
      </Col>
        <Col xs={2} md={2}>
        <input type="text" placeholder="mention answer"style={{color : "#000000",fontSize:'18px'}}/>
          </Col><Row>


</Row>

          </Row>
          <br/>
          <br/>
          <Row>

         <Button  style={{marginLeft:'390px'}}type="submit" bsStyle="success">Get Password</Button>


          </Row>

</Grid>
</Well>
</div>

);
}//end of render
}//end of class
export default Forgotpassword;
