import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import wtgtp from './../../images/wtgtp.PNG';
import './index.css';

class Home extends Component {

  render() {
    return(

      <div>

        <div className="fade-white-box">
          <img className="wtgtp"src={wtgtp}/>
        </div>
        <div className="social-media-icons">
        <a href="https://www.facebook.com/profile.php?id=100085705407674"target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/weethegenius"target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/channel/UCJ8K-S5BWiyTuFA3SqCLCmw"target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        </div>

      </div>
    );
  }

}
export default Home;
