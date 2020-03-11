import React from 'react';

import Styles from './thumbnails.module.scss';

import Img from 'gatsby-image';

const shuffle = (array) => {

  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};

const Thumbnails = ({ query }) => {

  const photos = shuffle(query.allFile.edges);

  return (<div className={Styles.gallery}>
    {photos.map(
      ({ node }) => <Img key={node.id} fluid={node.childImageSharp.fluid} />
    )}
  </div>)
}

export default Thumbnails;