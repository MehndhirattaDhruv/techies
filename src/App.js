import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
    <div>
<h1 className ="container">
     TECHINDUSTAN
</h1>
<div style={{width:'50%', textAlign:'justify' ,float:'left'}}>
<p className="paragraph">

To attain optimum performance, we create responsive projects fulfilling the customer’s attributes. Our IT solutions are credible and trusted offering full customer satisfaction. We ensure our customers of a defined growth in their business.
<br/>Our team is highly dedicated, well experienced and passionate which is our valuable asset. We respond with quick delivery of satisfactory results via our efficient team and your collectible experience.
</p>
</div>
<img class="image" src="https://timedotcom.files.wordpress.com/2014/07/best-websites-2014.jpg" alt="image not found" style={{width:300,height:200}}/>
<div className="subscribe">
<h1>Subscribe Me</h1>

<form class="form">
<input type="email" placeholder="name@email.com"/>
</form>
<button  type="submit" name="button">subscribe me</button>
</div>
<footer>

<p className="copy">Copyrights of the techies</p>

</footer>
     </div>
    );
  }
}
