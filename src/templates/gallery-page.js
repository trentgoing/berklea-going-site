import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const GalleryPageTemplate = ({ content, contentComponent }) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                title
              </h2>
              {/* <PageContent className="content" content={content} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

GalleryPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GalleryPage = ({ data }) => {

  return (
    <Layout>
      <GalleryPageTemplate
        // contentComponent={HTMLContent}
        // title={post.frontmatter.title}
        // content={post.html}
      />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GalleryPage

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
