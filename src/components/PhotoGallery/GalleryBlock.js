import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export const GalleryBlock = ({show, index, setNavbarHidden}) => {
  let transformedPhotos = show.photos.map((photo) => {
    let newPhoto = {};
    newPhoto.width = photo.src.childImageSharp.fixed.width;
    newPhoto.height = photo.src.childImageSharp.fixed.height;
    newPhoto.src = !!photo.src.childImageSharp && !!photo.src.childImageSharp.fixed.src ? photo.src.childImageSharp.fixed.src : photo.src;
    return newPhoto;
  })
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    setNavbarHidden(true);
  }, [setNavbarHidden]);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    setNavbarHidden(false);
  };

  return (
    <div key={show.title + index}>
      <h3 style={{
        color: `black`,
        textDecoration: `none`,
        fontFamily: `Verdana`,
        letterSpacing: `0.05em`,
        fontSize: '2.5vw',
        marginTop: `10px`,
        left: `60%`,
        width: `75%`,
        fontWeight: `bold`,
        textTransform: `uppercase`,
        fontStyle: `italic`
      }}>
        {show.title}
      </h3>
      <h4 style={{
        color: `black`,
        textDecoration: `none`,
        fontFamily: `Verdana`,
        letterSpacing: `0.05em`,
        fontSize: '1.5vw',
        left: `60%`,
        width: `75%`,
        fontWeight: `bold`,
        textTransform: `uppercase`,
      }}>
        {show.theater}
      </h4>
      <Gallery photos={transformedPhotos} onClick={openLightbox} />
      <div className="bringtofront">
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
    </div>
  )
};


GalleryBlock.propTypes = {
  show: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  setNavbarHidden: PropTypes.func
}