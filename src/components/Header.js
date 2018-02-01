import React from 'react';

import {
  Navbar,
  NavItem,
  NavDropdown,
  Nav,
  MenuItem,
  Button,
  Modal
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header  = () => {
  return(
    <div>

    <Navbar className="headlines" style={{height:'42px'}}>
<Navbar.Header >
  <Navbar.Brand>

    <Link to="/Techies" style={{color : '#000000'}}><img src="https://www.guernseyhosting.co.uk/images/GuernseyHostingLogoI.png"
      style={{height : '41px' , width : '125px'}} /></Link>
  </Navbar.Brand>
</Navbar.Header>
<Nav >

  <NavItem eventKey={1}>
  <Link to="/aboutMe" style={{color : '#000000'}}>About</Link>
  </NavItem>
  <NavDropdown style={{color : '#000000'}} eventKey={2} title="Areas of expertise" id="basic-nav-dropdown">
    <MenuItem eventKey={2.1} style={{color : '#000000'}}><Link to="/webdev">Web development</Link></MenuItem>
    <MenuItem eventKey={2.2} style={{color : '#000000'}}><Link to="/Reactfile">React</Link> </MenuItem>
    <MenuItem eventKey={2.3} style={{color : '#000000'}}><Link to="/appdev">App Development </Link></MenuItem>

    <MenuItem eventKey={2.4} style={{color : '#000000'}}><Link to="/ecommerce">Ecommerce</Link></MenuItem>
  </NavDropdown>

  <NavItem eventKey={3}>
  <Link to="/signup" style={{color : '#000000'}}>New user</Link>
  </NavItem>

  <NavItem eventKey={4}>
  <Link to="/signin" style={{color : '#000000'}}>Login</Link>
  </NavItem>
  </Nav>
  <Nav pullRight>
     <NavItem eventKey={1} href="#">
       <Link to="/careers" style={{color : '#000000'}}>Careers</Link>
     </NavItem>
     <NavItem eventKey={2} href="#">
    <Link to="/services" style={{color : '#000000'}}>Services</Link>
     </NavItem>
   </Nav>

</Navbar>


    </div>


  );
}
export default Header;
