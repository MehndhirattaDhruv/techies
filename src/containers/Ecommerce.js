import React from 'react';
import {Carousel,Well} from 'react-bootstrap';
class Ecommerce extends React.Component
{
render(){
return(
<div>
<h1 style={{width:'150px',height:'100px',color:'#000000',marginLeft:'37%'}}>Ecommerce</h1>
<h1 style={{color:'#18b1db',marginLeft:'17%'}}>Our Recent Projects</h1>
<div className="container">
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="http://www.businessnewsdaily.com/images/i/000/012/249/original/best-ecommerce-software.jpg?1472064375" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://assets.entrepreneur.com/content/3x2/1300/20180110145745-ecommerce.jpeg?width=750&crop=16:9" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://assets.entrepreneur.com/content/3x2/1300/20160727062438-ecommerce-1.jpeg" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://www.disruptordaily.com/wp-content/uploads/2017/09/AI-In-eCommerce.jpg" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


    </div>
    <h1 style={{color:'#02fff2'}}>Why Serious eCommerce Brands Need a Content Strategy?</h1>
<Well >
    <p style={{color:'#fc9937',marginTop:'50px'}} >The importance of content marketing for eCommerce brands has been significantly growing. Content marketing is one of the most effective ways for retail brands to market themselves, namely because the customer chooses only to interact with the content that interests them, as opposed to traditional marketing. To illustrate: if you’ve never heard of LemonStand before reading this post, well, you have now because of our content strategy.

    In fact, statistically speaking, content marketing can increase your conversion rate to almost 6 times. The average conversion rate of sites with content marketing is 2.9%, compared to the average of sites without a content strategy, 0.5%. That reason alone is enough to adopt (and perfect) a content strategy, but it’s not the only reason. Every day, content marketing becomes more and more crucial to a brand’s success, especially in the eCommerce sector. Tech and digital marketing guru Marsha Collier summed up why the strategy works:

    Content-based marketing gets repeated in social media and increases word-of-mouth mentions; it’s the best way to gather buzz about a product.

    That’s why we recently enhanced the LemonStand eCommerce platform with integrated content marketing capabilities and unique features for bringing merchandise and content together that will help retailers grow faster. After all, the amount of time adults spend on digital media is steadily rising, and has almost doubled from 2.7 hours in 2008 to 5.6 hours in 2015. It’s easy to leverage some of that time into content from eCommerce stores.

    This post is the first in a series of articles we’ll be publishing on how to build and execute the best content marketing strategy for repeatable growth — geared specifically for online retailers. To start things off</p>
</Well>
</div>

);
}//end of render
}//end of class
export default Ecommerce;
