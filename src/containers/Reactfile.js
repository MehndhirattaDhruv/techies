import React from 'react';
import {Carousel,Well} from 'react-bootstrap';
class Reactfile extends React.Component
{
render(){
return(
<div>
<h1 style={{color:'#000000',marginLeft:'37%'}}>React Development</h1>
<h1 style={{color:'#18b1db',marginLeft:'17%'}}>Our Recent Projects</h1>
<div className="container">
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://cdn-images-1.medium.com/max/2000/0*xOChN9l4yGu0pDHQ.png" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://cdn2.kode-blog.com/images/reactjs/airbnb.jpg" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://cdn-images-1.medium.com/max/1600/0*t8ko5VLYJhCZyYSU." />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://madewithreact.com/content/images/2017/08/react-spinners.jpg" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


    </div>

  <Well>  <p style={{color:'#000',marginTop:'50px'}}>Every brand has a story. How do you tell yours?
    Strong content effectively designed has the power to attract and influence the right people. To successfully target your visitors, Orbit’s conversion content experts craft compelling language into relevant topics for your audience.

    Our web content writing services combine the perfect mix of informed digital strategy with proven process, all while weaving your story into captivating content that converts visitors to customers.</p>
</Well>
</div>

);
}//end of render
}//end of class
export default Reactfile;
