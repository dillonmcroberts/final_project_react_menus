import React from 'react';
var Slider = require('react-slick');

var styles = {
  slide: {
    width: '400px',
    height: '200px',

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
          <img className='featuredChef' src='https://media.licdn.com/media/AAEAAQAAAAAAAAhaAAAAJDkzMTQ4YWU3LTE0Y2YtNGMxNC05MTlkLTA5ZmI0Y2RlNmY3ZQ.jpg'></img>
            <h1>Chef Silvana </h1>
            <p>I make decorative chocolate cakes for Dominique Ansel</p>
            <p><a className="btn btn-primary btn-lg" href='/recipes/35'>Learn more</a></p>
         </div>

        <div style={styles.slide}>
          <h2>Browse Fall Recipes and Menus</h2>
          <img className='fallRecipeImage' src='http://clv.h-cdn.co/assets/16/37/980x490/landscape-1473879046-picmonkey-collage-23.jpg'></img>
      </div>
      <div>
        <img className='halloweenContest' src='https://files.slack.com/files-pri/T02MD9XTF-F2MFBFB9V/halloween-menu.jpg'/>
      </div>
      </Slider>

    )}
}
