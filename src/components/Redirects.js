import React from "react"
import Button from "./Buttons"
import Img from "gatsby-image"

const Redirects = (props) => (
  <div style={{
    position: 'relative',
     height: `800px`,
    overflow: `hidden`
  }}>
    <Img fluid={props.image.childImageSharp.fluid} />
    <div  style={{
      position: 'absolute',
      left: `48%`,
      top: `50%`,
      transform: `translate(0%, -50%)`,
      cursor: `pointer !important`,
      width: `34vw`
    }}>
      <Button backgroundColor={`one`} buttonLink={`/resume/`} buttonTitle={`RESUME`}/>
      <Button backgroundColor={`two`} buttonLink={`/photo-gallery/`} buttonTitle={`PHOTO GALLERY`}/>
      <Button backgroundColor={`three`} buttonLink={`/media/`} buttonTitle={`MEDIA`}/>
    </div>
  </div>
)

export default Redirects
