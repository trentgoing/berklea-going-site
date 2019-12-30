import React from 'react'
import PropTypes from 'prop-types'
import { ResumePageTemplate } from '../../templates/resume-page'

const ResumePagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      <ResumePageTemplate
      headshot_image={data.headshot_image}
      resume_image={data.resume_image}
      resume_pdf={data.resume_pdf}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ResumePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ResumePagePreview
