import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Shared/Layout'
import PageTitle from '../components/Shared/PageTitle'
import Subtitle from '../components/Shared/Subtitle'
import Press from '../components/Media/Press'
import Videos from '../components/Media/Videos'

export const MediaPageTemplate = ({videos, press}) => {//{ title, content, contentComponent }) => {
  // const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <PageTitle title="Media" />
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Subtitle title="Recent Productions" />
          </div>
        </div>
        <Videos videos={videos} />
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Subtitle title="Press" />
            <Press press={press} />
          </div>
        </div>
      </div>
    </section>
  )
}

MediaPageTemplate.propTypes = {
  videos: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  press: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

const MediaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MediaPageTemplate
        // contentComponent={HTMLContent}
        videos={frontmatter.videos}
        press={frontmatter.press}
      />
    </Layout>
  )
}

MediaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MediaPage

export const mediaPageQuery = graphql`
  query MediaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "media-page" } }) {
      frontmatter {
        videos {
          video
        }
        press {
          title
          description
          link
        }
      }
    }
  }
`