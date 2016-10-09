import React from 'react';
var Slider = require('react-slick');

var styles = {
  slide: {
    width: '400px',
    height: '200px',
    opacity: '0.8',
    backgroundColor: 'rgba(238,283,283,0.5)',
  },
  fontStyle: {
    color: 'black',
    fontStyle: "italic",
    fontFamily: 'Geneva',
  }
}

export default class SimpleSlider extends React.Component {
  render(){

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
      <Slider {...settings}>
        <div>
          <h1>Chef Silvana</h1>
          <p>I make decorative chocolate cakes for Dominique Ansel</p>
          <p><a className="btn btn-primary btn-lg">Learn more</a></p>
         </div>
        <div><h1>Halloween Menu Contest!</h1>
        <p>Create and Sumbit your Menu to Our Halloween Menu Competition or Vote for your Favorite Menu</p>
        <p><a className="btn btn-primary btn-lg">Enter Contest</a>   <a className="btn btn-primary btn-lg">Vote for Your Favorite Halloween Menu</a></p></div>
        <div style={styles.slide}><h3 style={styles.fontStyle} className='text-center'>Fall Recipes</h3></div>
        <div><h3 className='text-center'>Fall Menus</h3></div>
      </Slider>

    )}
}
