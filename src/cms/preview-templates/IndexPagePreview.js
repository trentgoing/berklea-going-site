import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        subheading={data.subheading}
        main_image={data.main_image}
        about_me_image={{image: data.about_me_image}}
        redirects_image={{image: data.redirects_image}}
        photo_tiles={data.photo_tiles || { blurbs: [] }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
