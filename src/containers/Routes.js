
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from './AboutMe';
import Services from './Services';
import Careers from './Careers';
import Signup from './Signup';
import Signin from './Signin';
import Webdev from './Webdev';
import Reactfile from './Reactfile';
import Appdev from './Appdev';
import Ecommerce from './Ecommerce';
import Contactus from './Contactus';
import Techies from './Techies';
import Forgotpassword from './Forgotpassword';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
              <Header />
              <Switch>
                 <Route exact path="/aboutMe" component={AboutMe}/>
                 <Route exact path="/services" component={Services}/>
                 <Route exact path="/careers" component={Careers}/>
                 <Route exact path="/signup" component={Signup}/>
                 <Route exact path="/signin" component={Signin}/>
                 <Route exact path="/webdev" component={Webdev}/>
                 <Route exact path="/reactfile" component={Reactfile}/>
                 <Route exact path="/ecommerce" component={Ecommerce}/>
                 <Route exact path="/appdev" component={Appdev}/>
                 <Route exact path="/contactus" component={Contactus}/>
                 <Route exact path="/techies" component={Techies}/>
                 <Route exact path="/forgotpassword" component={Forgotpassword}/>

              </Switch>
              <Footer />
            </div>
        </Router>
      </div>
    )
  }
}
