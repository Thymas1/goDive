import React from 'react'
import {buildImageObj, mapEdgesToNodes} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import styled from 'styled-components'
import PortableText from './portableText'

const MainPost = ({data}) => {
  const readyData = mapEdgesToNodes(data)
  return (
    <div>
      {readyData.map(mainPost => (
        <Wrapper id={mainPost.id}>
          <Heading>{mainPost.title}</Heading>
          <StyledImg
            src={imageUrlFor(buildImageObj(mainPost.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainPost.mainImage.alt}
          />
          <PortableText blocks={mainPost._rawMainBody} />
        </Wrapper>
      ))}
    </div>
  )
}

export default MainPost

const StyledImg = styled.img`
  align-self: center;
 @media (max-width: 675px) {
  width: 100%;
 }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`
const Heading = styled.h1`
  align-self: center;
`
