import React from 'react'
import PropTypes from 'prop-types'

const GalleryPagePreview = ({ entry, getAsset, widgetFor }) => {
  return (
    <div>No Preview Available for the Photo Gallery</div>
  )
}

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default GalleryPagePreview
