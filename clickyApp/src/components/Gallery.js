import React from "react";
import PropTypes from "prop-types";


class Gallery extends React.Component {
  renderImage(cards) {
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
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

const cards = [
    {
        id: "ron1",
        image: "./styles/images/ron1.jpg",
        isClicked: false,
    },
    {
        id: "ron2",
        image: "./styles/images/ron2.jpg",
        isClicked: false,
    }

]

export default Gallery;

