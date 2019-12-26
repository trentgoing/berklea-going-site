import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleContainedImage from '../components/PreviewCompatibleContainedImage';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { GalleryBlock } from '../components/Gallery_block';

export const GalleryPageTemplate = ({headshots, shows}) => {//{ title, content, contentComponent }) => {
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
              Photo Gallery
            </h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <div className="carousel">
              <div className="carousel-frame">
                {headshots.map((headshot, index) => {
                  return (
                    <div key={headshot.image.childImageSharp.fluid.base64 + index} className='headshot-image'>
                      <PreviewCompatibleContainedImage imageInfo={{image:headshot.image}} />
                    </div>
                  );
                })}
            </div>
            </div>
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
        { shows.map((show, index) => (<GalleryBlock show={show} index={index}/>)) }
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
                fluid(maxHeight: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
        }
        shows {
          title
          theater
          photos {
            src {
              childImageSharp{
                fluid(maxHeight: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`