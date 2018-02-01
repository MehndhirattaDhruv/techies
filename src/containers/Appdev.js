import React from 'react';
import {Carousel,Well} from 'react-bootstrap';
class Appdev extends React.Component
{
render(){
return(
<div>
<h1 style={{color:'#000000',marginLeft:'37%'}}>App Development</h1>
<h1 style={{color:'#18b1db',marginLeft:'17%'}}>Our Recent Projects</h1>
<div className="container">
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://lh3.googleusercontent.com/mKPo-JCTv3L72CFdoM0kflV2-1tsajILVItxAildfVYdxnMpcVdsc7_I_Fjv2f2hUg=h310" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://i.amz.mshcdn.com/tp4bfZS2_9VNGwSs86BK0uEKiP0=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fandroid-apps%2FBest%2520Media%2520Syncing%2520App%2520doubleTwist.png" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>

      <img width={900} height={500} alt="900x500" src="https://www.naspers.com/NaspersPortal/media/Naspers/News/swiggy2.jpg?ext=.jpg" />

  </Carousel>

    </div>
    <Well>
    <p style={{color:'#000',marginTop:'50px'}}>Looking for app developers to build customized enterprise apps for businesses or consumer apps for the market? Softway Solutions, is a mobile app development company in Houston that delivers innovative mobile solutions. Our apps can boost branding and engagement, cut costs, improve productivity and generate new revenue for your business.

We house top mobile application developers whose development skills are backed by expertise in mobile app strategy creation and customized mobile phone programming for both consumers and enterprises. Let’s take a brief look at the difference between consumer and enterprise apps and how Softway’s mobile app services adapt to each approach.

.</p>
</Well>

</div>

);
}//end of render
}//end of class
export default Appdev;
