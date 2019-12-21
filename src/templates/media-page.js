import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const MediaPageTemplate = ({videos, press}) => {//{ title, content, contentComponent }) => {
  // const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 style={{
                      position: `absolute`,
                      color: `black`,
                      textDecoration: `none`,
                      fontFamily: `Verdana`,
                      letterSpacing: `0.15em`,
                      fontSize: '4.5vw',
                      // textAlign: 'center',
                      marginTop: `10vh`,
                      left: `50%`,
                      width: `75%`,
                      transform: `translate(-50%, -100%)`,
                      fontWeight: `bold`,
                      textTransform: `uppercase`
                    }}>
                Media
              </h1>
              {JSON.stringify(videos)}
              {JSON.stringify(press)}
            </div>
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