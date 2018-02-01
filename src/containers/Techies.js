import React from 'react';
import {Carousel,Well}from 'react-bootstrap';
class Techies extends React.Component{
render(){
return(
<div>
<div className="container">
<Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="http://business.aib.ie/content/dam/aib/business/images/homepage/business-homepage.jpg" />
    <Carousel.Caption>
      <h3 style={{color:'#000',backgroundColor:'#fff'}}>Our Heritage </h3>
      <p style={{color:'#000'}}>We focus on delivering the innovative and best-in-class IT services and Business Solutions.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="http://teenzonemagazine.co.za/wp-content/uploads/2017/09/Business-in-Bihar-2.jpg" />
    <Carousel.Caption>
      <h3 style={{color:'#000'}}>Our Belief</h3>
      <p style={{color:'#000',backgroundColor:'#fff'}}>We believe in the leading change, excellence, learning new technologies and sharing it worldwide.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="https://image.shutterstock.com/display_pic_with_logo/91282/125338145/stock-photo-image-of-business-partners-discussing-documents-and-ideas-at-meeting-125338145.jpg" />
    <Carousel.Caption>
      <h3 style={{color:'#000'}}>Our Core Values</h3>
      <p style={{color:'#000',backgroundColor:'#fff'}}>Working with us; makes it a joy for the stakeholders.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="http://craftypioneer.com/wp-content/uploads/2016/01/businessMeeting.jpg" />
    <Carousel.Caption>
      <h3 style={{color:'#000'}}>Working Style</h3>
      <p style={{color:'#000',backgroundColor:'#fff'}}>Hire us today to avail your very own Product or Website at reckon-able rates</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>
<Well style={{backgroundColor:'#1789b3'}}>
<h1>Welcome to Techies - DESIGN| DEVELOPMENT | DEPLOY</h1>

</Well>
<br/>
<br/>
<Well style={{backgroundColor:'#f5f5f5'}}>
<h1>Our Milestones</h1>
<ul>
  <li>We hold grasp at global client base & we are serving in more than 15 countries like Australia, Germany, Japan, Sweden, United States, and United Kingdom.</li>

  <li>We occupy a major place amongst all the well known organizations in the suburb.
We are recognized as the leading career growth provider.</li>
  <li>We are recognized as the leading career growth provider.</li>

</ul>
</Well>

</div>
);
}//end of render
}//end of class
export default Techies;
