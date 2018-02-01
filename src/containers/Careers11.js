import React from 'react';
import {Button} from 'react-bootstrap';
class Careers extends React.Component{
render(){
return(
<div>
<form>
<label className="labelclass">FirstName</label>
<input className="inputclass" type="text" placeholder="john"/>
<br/>
<label className="labelclass">LastName</label>
<input className="inputclass" type="text" placeholder="Carlos"/>
<br/>
<label className="labelclass">Email    </label>
<input className="inputclass" type="email" placeholder="abc@network.com"/>
<br/>

<label className="labelclass">Phone Number    </label>
<input className="inputclass" type="number" placeholder="123456789"/>
<br/>

<label className="labelclass">Gender</label>
<select className="inputclass">
<option value="select">select</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
</select>
<br/>
<label className="labelclass">Interested In</label>
<select className="inputclass">
<option value="App development">App development</option>
<option value="web development">web development</option>
<option value="react development">ecommerce development</option>
</select>
<br/>
<label className="labelclass">Experience in years  </label>
<input className="inputclass" type="number" placeholder="eg.2 years"/>
<br/>
<label className="labelclass">Description </label>
<input className="inputclass" type="textarea" style={{width:'350px',height:'35px'}} placeholder="I have created recently gigen project given url:https://..."/>
<br/>

</form>
<Button bsStyle="success">Submit</Button>
</div>
);
}//end of render
}//end of class
export default Careers;
