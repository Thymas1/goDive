import React from 'react'
import {buildImageObj, mapEdgesToNodes} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

const MainPost = ({data}) => {
  const readyData = mapEdgesToNodes(data)
  return (
    <div>
      {readyData.map(mainPost => (
        <div id={mainPost.id}>
          <h1>{mainPost.title}</h1>
          <img
            src={imageUrlFor(buildImageObj(mainPost.mainImage))
              .width(800)
              .height(Math.floor((9 / 16) * 800))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainPost.mainImage.alt}
          />
          <PortableText blocks={mainPost._rawMainBody} />
        </div>
      ))}
    </div>
  )
}

export default MainPost
