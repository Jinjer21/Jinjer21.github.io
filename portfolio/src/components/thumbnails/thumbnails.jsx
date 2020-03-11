import React from 'react';

import Styles from './thumbnails.module.scss';

import Img from 'gatsby-image';

const Thumbnails = ({ query }) => {

  return (<div className={Styles.gallery}>
    {query.allFile.edges.map(
      ({ node }) => <Img key={node.id} fluid={node.childImageSharp.fluid} />
    )}
  </div>)
}

export default Thumbnails;