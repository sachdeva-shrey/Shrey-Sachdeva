import React, { Component, Fragment } from "react"
import { InView } from "react-intersection-observer"
import Image from "../components/Image"

const Gallery = () => (
  <div>
    <Image />
     {/* <div style={{ marginTop: "800px" }}>
      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            {inView ? <Image alt="image_1" filename="image_2.jpg" /> : null}
            {inView ? <Image alt="image_1" filename="image_1.jpg" /> : null}
            {inView ? <Image alt="image_1" filename="image_3.jpg" /> : null}
            {inView ? <Image alt="image_1" filename="image_4.jpg" /> : null}
          </div>   
        )}
      </InView> */}
    </div>
)

export default Gallery