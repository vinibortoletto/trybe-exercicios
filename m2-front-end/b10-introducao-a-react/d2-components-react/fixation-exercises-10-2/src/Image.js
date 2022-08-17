import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
