import React from "react"
import Button from "../Shared/Buttons"
import PreviewCompatibleImage from "../Shared/PreviewCompatibleImage"

const Redirects = (props) => (
  <div style={{
    position: 'relative',
     height: `800px`,
    overflow: `hidden`
  }}>
    <PreviewCompatibleImage imageInfo={{image: props.image}} />
    <div  style={{
      position: 'absolute',
      left: `48%`,
      top: `50%`,
      transform: `translate(0%, -50%)`,
      cursor: `pointer !important`,
      width: `34vw`
    }}>
      <Button backgroundColor={`one`} buttonLink={`/resume/`} buttonTitle={`RESUME`}/>
      <Button backgroundColor={`two`} buttonLink={`/gallery/`} buttonTitle={`PHOTO GALLERY`}/>
      <Button backgroundColor={`three`} buttonLink={`/media/`} buttonTitle={`MEDIA`}/>
    </div>
  </div>
)

export default Redirects
