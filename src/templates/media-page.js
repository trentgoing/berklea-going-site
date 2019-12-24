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
            <h1 style={{
                    color: `black`,
                    textDecoration: `none`,
                    fontFamily: `Verdana`,
                    letterSpacing: `0.15em`,
                    fontSize: '4.5vw',
                    marginTop: `10px`,
                    left: `50%`,
                    width: `75%`,
                    fontWeight: `bold`,
                    textTransform: `uppercase`
                  }}>
              Media
            </h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h2 style={{
                    color: `black`,
                    textDecoration: `none`,
                    fontFamily: `Verdana`,
                    letterSpacing: `0.05em`,
                    fontSize: '2.25vw',
                    marginTop: `10px`,
                    left: `60%`,
                    width: `75%`,
                    fontWeight: `bold`,
                    textTransform: `uppercase`
                  }}>
              RECENT PRODUCTIONS
            </h2>
          </div>
        </div>
        {videos.map(({video}, index) => {
          let side = index === 0 ? '' : index % 2 === 0 ? 'right' : 'left';
          return(
            <div className="columns" key={video+index}>
              <div className="column is-12">
                <div className={`video-container ${side}`}>
                <iframe id="ytplayer" type="text/html" width="640" height="360" title={video + "video"}
                  src={video}
                ></iframe>
                </div>
              </div>
            </div>
          )
          })
        }
        <div className="columns">
          <div className="column is-10 is-offset-1">
          <h2 style={{
                    color: `black`,
                    textDecoration: `none`,
                    fontFamily: `Verdana`,
                    letterSpacing: `0.05em`,
                    fontSize: '2.25vw',
                    marginTop: `10px`,
                    left: `60%`,
                    width: `75%`,
                    fontWeight: `bold`,
                    textTransform: `uppercase`
                  }}>
              PRESS
            </h2>
            <div className="section">
              {press.map((article, index) => {
                return (
                  <div className="columns" key={article + index}>
                    <div className="column is-12">
                      <div>
                        <a href={article.link}>
                          <h3>{article.title}</h3>
                        </a>
                        <p>{article.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
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