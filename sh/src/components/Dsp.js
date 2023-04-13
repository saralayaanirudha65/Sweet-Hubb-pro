import React, { Component } from "react";
import Slider from "react-slick";
import "./Dspp.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="Main">
      <ul id="s" align="center">
       <h1>Welcome to SWEET HUB</h1>
        </ul>
        

        <Slider {...settings}>

          <div >
          <ul id="fst">
          <img
          className="d-block w-50"
          src="file:///C:/Users/Sarvothama%20Acharya/Downloads/jalebi%20(3).jpg"
          alt="First slide"
        />
        </ul>
            <h3 className='text-white'>Jalebi</h3>
          </div>
          <div>
          <img
          className="d-block w-50"
          src="https://github.com/cool30/lo/blob/master/Mand.jpg?raw=true"
          alt="First slide"
        />
            <h3 className='text-white'>Mandige</h3>
          </div>
          <div>
          <img
          className="d-block w-50"
          src="https://github.com/cool30/lo/blob/master/ladoo.jpg?raw=true"
          alt="/"
        />
          
            <h3 className='text-white'>Ladoo</h3>
          </div>
          <div>
          <img
          className="d-block w-50"
          src="https://github.com/cool30/lo/blob/master/myspsk.jpg?raw=true"
          alt="First slide"
        />
            <h3 className='text-white'>Mysore Pak</h3>
          </div>
          <div>
          <img className="d-block h-100 w-80"
          src="https://th.bing.com/th/id/OIP.jHVOWwSFJmKm4WYjoOIS0QHaFk?w=238&h=180&c=7&r=0&o=5&pid=1.7"
          alt="/"
          />
            <h3 className='text-white'>Gulab Jamun</h3>
          </div>
          <div>
          <img className="d-block  w-50"
          src="https://github.com/cool30/lo/blob/master/pedha.jpg?raw=true"
          alt="/"
          />
          
            <h3 className='text-white'>doodh peda</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

