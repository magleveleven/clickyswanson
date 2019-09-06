import React from "react";
import PropTypes from "prop-types";


class Gallery extends React.Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
        <div className="images">
          {this.props.imageUrl.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  imageUrl: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};


export default Gallery;

