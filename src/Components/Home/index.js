import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import './index.css';

class Home extends Component {

  render() {
    return(

      <div>
        <div className="blue-box">
          <div>
          </div>
        </div>
        <div className="fade-white-box">
        </div>
        <div className="white-box">
          <div className="relax-div">
            <h4 className="in-good-hands">Relax, you are in good hands</h4>
            <h6 className="special">Special Feature</h6>
          </div>
          <div className="triple-boxes">
          <CardGroup>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title className="card-title">Spring deep cleaning</Card.Title>
    <Card.Text className="card-text">
      When it comes to business or house cleaning in our city,
      residents know that one agency stands out from the rest - our service
    </Card.Text>
  </Card.Body>

</Card>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body className="green-box">
    <Card.Title className="move-out-request-service">Move-out/move-in</Card.Title>
    <Card.Text className="move-out-request-service">
      Call our office or use the Request service
      tab to make an appointment with us.  Pets? Special
      instructions?  No problem, we'll take detailed notes.{' '}
    </Card.Text>
  </Card.Body>

</Card>
<Card>
  <Card.Img variant="top" src="holder.js/100px160" />
  <Card.Body>
    <Card.Title className="card-title">Emergency cleaning</Card.Title>
    <Card.Text className="card-text">
      Our employees are trained and experienced Cleaning
      professionals.  Massa euismod, viverra lacus a, pellentesque.
    </Card.Text>
  </Card.Body>

</Card>
</CardGroup>
          </div>
        </div>

      </div>
    );
  }

}
export default Home;
