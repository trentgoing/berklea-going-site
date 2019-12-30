import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Carousel from "react-images";
import Layout from '../components/Shared/Layout';
import PageTitle from '../components/Shared/PageTitle';
import { GalleryBlock } from '../components/PhotoGallery/GalleryBlock';
import Subtitle from '../components/Shared/Subtitle';

export const GalleryPageTemplate = ({headshots, shows}) => {

  let transformedHeadshots = headshots.map((headshot) => {
    headshot.source = !!headshot.image.childImageSharp && !!headshot.image.childImageSharp.fixed.src ? headshot.image.childImageSharp.fixed.src : headshot.src;
    headshot.caption = ""; 
    return headshot;
  })

  const customStyles = {
    view: (base) => ({
      ...base,
      overflow: 'hidden',
      position: 'relative',
      transition: 'filter 300ms',
      height: '60vh',
      width: '60vw',
      '& > img': {
        maxHeight: '60vh',
      },
    }),
    container: (base) => {
      return {
        ...base,
        height: '60vh',
        width: '60vw',
        margin: 'auto'
      }
    },
    navigationNext: (base) => {
      return { 
        ...base,
        color: 'black'
      }
    },
    navigationPrev: (base) => {
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
        <PageTitle title="Photo Gallery" />
        <div className="columns">
          <div className="column is-12">
            <div className="carousel">
                <Carousel views={transformedHeadshots} hideControlsWhenIdle={false} styles={customStyles} frameProps={{autoSize: false}} />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section section-gradient">
              <Subtitle title="Recent Productions" />
              { shows.map((show, index) => (<GalleryBlock show={show} index={index} key={show.title}/>)) }
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