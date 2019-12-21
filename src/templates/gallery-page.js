import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const GalleryPageTemplate = ({headshots, shows}) => {//{ title, content, contentComponent }) => {
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
                PhotoGallery
              </h1>
              {JSON.stringify(headshots)}
              {JSON.stringify(shows)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

GalleryPageTemplate.propTypes = {
  headshots: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  shows: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <GalleryPageTemplate
        // contentComponent={HTMLContent}
        headshots={frontmatter.headshots}
        shows={frontmatter.shows}
      />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GalleryPage

export const GalleryPageQuery = graphql`
  query GalleryPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
      frontmatter {
        headshots {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  base64
                }
              }
          }
        }
        shows {
          title
          theater
          photos {
            image {
              childImageSharp{
                fluid(maxWidth:2048, quality:100) {
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`