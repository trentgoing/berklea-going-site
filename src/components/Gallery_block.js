import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';
// import PreviewCompatibleContainedImage from '../components/PreviewCompatibleContainedImage';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export const GalleryBlock = ({show, index}) => {
  let transformedPhotos = show.photos.map((photo) => {
    photo.src = !!photo.src.childImageSharp && !!photo.src.childImageSharp.fixed.src ? photo.src.childImageSharp.fixed.src : photo.src;
    return photo;
  })
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  console.log(transformedPhotos);
  return (
    <div key={show.title + index}>
      <h3>{show.title}</h3>
      <h4>{show.theater}</h4>
      <Gallery photos={transformedPhotos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={transformedPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
};


GalleryBlock.propTypes = {
  show: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}