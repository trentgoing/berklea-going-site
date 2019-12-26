import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleContainedImage from '../components/PreviewCompatibleContainedImage';
import Gallery from "react-photo-gallery";

export const GalleryBlock = ({show, index}) => {
  return (
    <div key={show.title + index}>
      <h3>{show.title}</h3>
      <h4>{show.theater}</h4>
      <Gallery photos={show.photos} />
      {/* {show.photos.map((photo, index) => {
        return (
          <div key={photo.image.childImageSharp.fluid.base64 + index}>
            <PreviewCompatibleContainedImage imageInfo={{ image: photo.image }} />
          </div>
        );
      })} */}
    </div>
  )
};


GalleryBlock.propTypes = {
  show: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}