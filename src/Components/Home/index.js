import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>

      </div>
    );
  }

}
export default Home;
