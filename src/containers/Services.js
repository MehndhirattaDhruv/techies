import React from 'react';
import {Well} from 'react-bootstrap';
class Services extends React.Component{
render(){
return(
<div>
<div>
<h1 className="HeadingS1" >Web Development</h1><br/>
<img src="https://www.eduonix.com/aDmiN_050716/public/uploads/headerimages/20170301155447.jpg" style={{width:'320px',height:'100px',marginLeft:'35%'}}/>
<br/>
<br/>
<Well>
<p style={{color : '#fc9937'}}>Web de velopment tools helps the developer to test and debug the web sites. Now a days the web development tooll come with the web browsers as add-ons. All web browsers have built in tools for this purpose.

Thsese tools allow the web developer to use HTML, CSS and JavaScript etc.. These are accessed by hovering over an item on a web page and selecting the “Inspect Element” from the context menu.

</p>
</Well>
</div>
<hr/>
<div>
<h1 className="HeadingS2" >App Development</h1>
<img src="http://blog.persquaremedia.com/wp-content/uploads/2014/11/Mobile-Application-Development.png" style={{width:'320px',height:'100px',marginLeft:'37%'}}/>
<br/>
<br/>
<Well>
<p style={{color : '#fc9937'}}>
This course is designed for students who are new to programming, and want to learn how to develop Android apps. ... You will gain an understanding of the processes that are involved in an Android developed application and you will become familiar with Android development tools and user interface.
</p>
</Well>
</div>
<hr/>
<div>
<h1 className="HeadingS3">Ecommerce</h1>
<img src="https://www.aistechnolabs.com/wp-content/uploads/2016/10/ecommerce-web-design.png" style={{width:'320px',height:'130px',marginLeft:'37%'}}/>
<br/>
<br/>
<Well>
<p style={{color : '#fc9937'}}>eCommerce web development has indeed become a necessity instead of a means to drive greater traffic. We, at Sparx IT Solutions, one of the pioneered web development companies,offer efficacious and effectual eCommerce web design, plug-in & module development solutions for small and medium level enterprises.
</p>
</Well>
</div>
<hr/>
<div>
<h1 className="HeadingS4">React Development</h1>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style={{width:'320px',height:'100px',marginLeft:'37%'}}/>
<br/>
<br/>
<Well>
<p style={{color : '#fc9937'}}>
React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.

</p>
</Well>
</div>
<hr/>
</div>
);
}//end of render
}//end of class



export default Services;
