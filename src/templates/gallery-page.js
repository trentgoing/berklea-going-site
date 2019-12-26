import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleContainedImage from '../components/PreviewCompatibleContainedImage';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { GalleryBlock } from '../components/Gallery_block';
import Carousel from "react-images";

export const GalleryPageTemplate = ({headshots, shows}) => {//{ title, content, contentComponent }) => {
  // const PageContent = contentComponent || Content
  let transformedHeadshots = headshots.map((headshot) => {
    headshot.source = !!headshot.image.childImageSharp && !!headshot.image.childImageSharp.fixed.src ? headshot.image.childImageSharp.fixed.src : headshot.src;
    headshot.caption = ""; 
    return headshot;
  })

  const customStyles = {
    view: (base, state) => ({
      ...base,
      // paddingBottom: `${10 / 16 * 100}%`,
      overflow: 'hidden',
      position: 'relative',
      transition: 'filter 300ms',
      height: '60vh',
      width: '60vw',
      '& > img': {
        // position: 'absolute',
        // left: 0,
        // top: 0,
        maxHeight: '60vh',
        // width: '60vw',
      },
    }),
    container: (base, state) => {
      return {
        ...base,
        height: '60vh',
        width: '60vw',
        margin: 'auto'
      }
    },
    navigationNext: (base, state) => {
      return { 
        ...base,
        color: 'black'
      }
    },
    navigationPrev: (base, state) => {
      return { 
        ...base,
        color: 'black'
      }
    },
    footer: (base, state) => {
      const opacity = state.interactionIsIdle ? 0 : 1;
      const transition = 'opacity 300ms';
  
      return { ...base, opacity, transition };
    }
  }
  

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
                <Carousel views={transformedHeadshots} hideControlsWhenIdle={false} styles={customStyles} frameProps={{autoSize: false}} />
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
        { shows.map((show, index) => (<GalleryBlock show={show} index={index} key={show.title}/>)) }
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
                fixed(width: 1200, quality: 100) {
                  ...GatsbyImageSharpFixed
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
                fixed(width: 1200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            text
            height
            width
          }
        }
      }
    }
  }
`