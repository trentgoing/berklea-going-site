import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Shared/Layout'
import Features from '../components/HomePage/Features'
import AboutMe from '../components/HomePage/AboutMe'
import Redirects from '../components/HomePage/Redirects'
import Hello from '../components/HomePage/Hello'
import { HTMLContent } from '../components/Shared/Content'
import Button from '../components/Shared/Buttons'

export const IndexPageTemplate = ({
  title,
  subheading,
  main_image,
  about_me_image,
  content,
  contentComponent,
  redirects_image,
  photo_tiles,
}) => (
  <div>
    <Hello title={title} subheading={subheading} main_image={main_image} />
    <AboutMe image={about_me_image} content={content} contentComponent={contentComponent} />
    <Redirects image={redirects_image} />
    <section className="section"
      style={{
        padding: `0px`
      }}>
      <div className="content">
        <Features gridItems={photo_tiles.tiles} />
        <div className="columns">
          {/* <div className="column "></div> */}
          <div className="column is-offset-1 is-10 ">
            <Button backgroundColor={`three`} buttonLink={`/contact/`} buttonTitle={`GET IN TOUCH!`}/>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  main_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  about_me_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  redirects_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  aboutme: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  contentComponent: PropTypes.func
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        main_image={frontmatter.main_image}
        about_me_image={frontmatter.about_me_image}
        redirects_image={frontmatter.redirects_image}
        photo_tiles={frontmatter.photo_tiles}
        content={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        subheading
        main_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about_me_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        redirects_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        photo_tiles {
          tiles {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            show_title
            role
          }
          heading
          description
        }
      }
    }
  }
`
