import React from "react"
import Content from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const IndexPage = (props) => {
  const AboutMeContent = props.contentComponent || Content

  return (
    <div style={{
      position: 'relative', 
      // marginBottom: `1.45rem`, 
      // display: `grid` 
    }}>
      <PreviewCompatibleImage imageInfo={props.image} />
      {/* <Img fluid={!!props.image.childImageSharp && props.image ? props.image.childImageSharp.fluid : props.image} /> */}
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
              <AboutMeContent content={props.content} />
      </article>
    </div>
  )
}

export default IndexPage
