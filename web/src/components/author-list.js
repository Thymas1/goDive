import React from 'react'
import {buildImageObj} from '../lib/helpers'
import styled from 'styled-components'
import {imageUrlFor} from '../lib/image-url'

function AuthorList ({items, title}) {
  return (
    <Root>
      <Headline>{title}</Headline>
      <StyledList>
        {items.map(({author, _key}) => {
          const authorName = author && author.name
          return (
            <StyledListItem key={_key}>
              <div>
                <Avatar >
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=''
                    />
                  )}
                </Avatar>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </StyledListItem>
          )
        })}
      </StyledList>
    </Root>
  )
}

export default AuthorList

const Root = styled.div`
  margin: 2rem 0 3rem;
  border-top: 1px solid white;
`
const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const Headline = styled.h2`
  font-weight: 600;
  margin: 0.5rem 0 0;
`
const StyledListItem = styled.li`
  font-size: var(--font-small-size);
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:last-child {
    flex: 1;
    margin-left: 0.5rem;
  }
`
const Avatar = styled.div`
  position: relative;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  overflow: hidden;

   img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`
