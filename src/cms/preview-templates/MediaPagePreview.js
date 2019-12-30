import React from 'react'
import PropTypes from 'prop-types'
import { MediaPageTemplate } from '../../templates/media-page'

const MediaPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MediaPageTemplate
        videos={data.videos}
        press={data.press}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

MediaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default MediaPagePreview
