import React from 'react';
import {Grid,Row,Col,form,Button,Well} from 'react-bootstrap';
class Careers extends React.Component{

render()
{
  return(
    <div>
    <Well style={{backgroundColor:'#F0F8FF'}}>
    <Grid>
      <Row>
          <Col xs={6} md={6}>
          <label style={{color :"#000000",fontSize:'22px'}}>FirstName</label>

            </Col>
            <Col xs={6} md={6}>
              <input type="text" style={{color : "#000000",fontSize:'18px'}} placeholder="john" />
              </Col>
        </Row>

        <Row>
            <Col xs={6} md={6}>
            <label style={{color :"#000000",fontSize:'22px'}}>LastName</label>

              </Col>
              <Col xs={6} md={6}>
                <input type="text" style={{color : "#000000",fontSize:'18px'}} placeholder="carlos" />
                </Col>
          </Row>

          <Row>
              <Col xs={6} md={6}>
              <label style={{color :"#000000",fontSize:'22px'}}>Email</label>

                </Col>
                <Col xs={6} md={6}>
                  <input type="email" style={{color : "#000000",fontSize:'18px'}} placeholder="name@network.com" />
                  </Col>
            </Row>

            <Row>
                <Col xs={6} md={6}>
                <label style={{color :"#000000",fontSize:'22px'}}>Phone</label>

                  </Col>
                  <Col xs={6} md={6}>
                    <input type="number" style={{color : "#000000",fontSize:'18px'}} placeholder="123456789" />
                    </Col>
              </Row>

              <Row>
                  <Col xs={6} md={6}>
                  <label style={{color :"#000000",fontSize:'22px'}}>gender</label>

                    </Col>
                    <Col xs={6} md={6}>
                    <input type="radio" value="male" name="radio"/>Male
                    <input type="radio" value="Female" name="radio"/>Female
                    </Col>
                </Row>



                <Row>
                    <Col xs={6} md={6}>
                    <label style={{color :"#000000",fontSize:'22px'}}>Date of birth</label>

                      </Col>
                      <Col xs={6} md={6}>
                        <input type="date" style={{color : "#000000",fontSize:'18px'}}  />
                      </Col>
                  </Row>

                  <Row>
                      <Col xs={6} md={6}>
                      <label style={{color :"#000000",fontSize:'22px'}}>Interested In</label>

                        </Col>
                        <Col xs={6} md={6}>
                        <select style={{color :"#000000",fontSize:'22px'}} >
                        <option value="App development">App development</option>
                        <option value="web development">web development</option>
                        <option value="react development">ecommerce development</option>
                        </select>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={6}>
                        <label style={{color :"#000000",fontSize:'22px'}}>Experience in Years</label>

                          </Col>
                          <Col xs={6} md={6}>
                            <input type="number" style={{color : "#000000",fontSize:'18px'}} placeholder="eg.2 years"  />
                          </Col>
                      </Row>

                      <Row>
                          <Col xs={6} md={6}>
                          <label style={{color :"#000000",fontSize:'22px'}}>Attach your CV</label>

                            </Col>
                            <Col xs={6} md={6}>
                              <input type="file" style={{color : "#000000",fontSize:'18px'}} placeholder="eg.2 years"  />
                            </Col>
                        </Row>


                      <br/>
                      <br/>
                      <br/>

                      <Row>
                          <Col xs={6} md={6} xsOffset={5}>

                        <Button bsStyle="success">Submit</Button>

                            </Col>
                              </Row>

    </Grid>
    </Well>
      </div>

);
}//end of render
}//emd of class
export default Careers;
