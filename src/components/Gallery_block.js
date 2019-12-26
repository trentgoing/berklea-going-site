import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleContainedImage from '../components/PreviewCompatibleContainedImage';
import Gallery from "react-photo-gallery";

export const GalleryBlock = ({show, index}) => {
  let transformedPhotos = show.photos.map((photo) => {
    photo.src = photo.src.childImageSharp.fluid.base64;
    photo.width = photo.width
    return photo;
  })
  console.log(transformedPhotos);
  return (
    <div key={show.title + index}>
      <h3>{show.title}</h3>
      <h4>{show.theater}</h4>
      <Gallery photos={transformedPhotos} />
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