import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Headshot from "./headshot"

const IndexPage = (props) => (
  <div style={{
    position: 'relative', 
    // marginBottom: `1.45rem`, 
    // display: `grid` 
  }}>
    {/* <Headshot /> */}
    <Img fluid={props.image.childImageSharp.fluid} />
    <div style={{
            position: `absolute`,
            color: `white`,
            MozTextDecorationColor: `none`,
            fontFamily: `georgia`,
            fontSize: '4vw',
            left: `10%`,
            top: `7%`,
            transform: `translate(-0%, -0%)`
          }}>
      About Me...
    </div>
    <article style={{
            position: `absolute`,
            color: `white`,
            textDecoration: `none`,
            fontFamily: `georgia`,
            fontSize: '1.4vw',
            left: `55%`,
            right: `5%`,
            top: `7%`,
            transform: `translate(0%, -0%)`,
            lineHeight: `2vw`
          }}>
            {props.content}
      {/* <StaticQuery
        query={query}
        render={(data) => {
          let paragraphs = data.aboutMe.content.split("\n");
          let map = paragraphs.map((paragraph) => (
            <p style={{
              marginBottom: `2px`
            }}> 
              {paragraph} 
            </p>
          ));
          return (
            <React.Fragment>
              {map}
            </React.Fragment>
          )
        }}
      /> */}
    </article>
  </div>
)

export default IndexPage
