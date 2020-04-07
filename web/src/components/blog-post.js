import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import styled from 'styled-components'
import {Link} from 'gatsby'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

function BlogPost (props) {
  const {_rawBody, authors, locations, title, mainImage, publishedAt} = props
  return (
    <article>
      {mainImage && mainImage.asset && (
        <MainImage>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </MainImage>
      )}
      <Container>
        <Wrapper>
          <MainContent>
            <Title>{title}</Title>
            {_rawBody && <PortableText blocks={_rawBody} />}
            <StyledLink to={'/'}>Back</StyledLink>
          </MainContent>
          <aside>
            {publishedAt && (
              <PublishedAt>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </PublishedAt>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {locations && (
              <Locations >
                <LocationsHeadline>Locations</LocationsHeadline>
                <ul>
                  {locations.map(location => (
                    <li key={location._id}>{location.title}</li>
                  ))}
                </ul>
              </Locations>
            )}
          </aside>
        </Wrapper>
      </Container>
    </article>
  )
}

export default BlogPost

const Title = styled.h1``

const MainImage = styled.div`
  display: block;
  position: relative;
  background: lightblue;
  padding-bottom: calc(9 / 16 * 100%);
   img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`
const Wrapper = styled.div`
  @media (min-width: 675px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2em;
    grid-template-columns: 3fr 1fr;
  }
`
const MainContent = styled.div`
 a {
    color: lightblue;

    @media (hover: hover) {
     &:hover {
        color: inherit;
      }
    }
    }
       h2, & h3, & h4, & h5, & h6 {
    font-weight: 600;
  }

   figure {
    margin: 0;
    padding: 0;

    img {
      max-width: 100%;
    }
  }
`
const PublishedAt = styled.div`
  margin: 2rem 0 3rem;
  color: lightblue;
`
const Locations = styled.div`
  border-top: 1px solid white;
  margin: 2rem 0 3rem;

   ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

   ul li {
    padding: 0.25rem 0;
  }
`
const LocationsHeadline = styled.h3`
  margin: 0.5rem 0 0;
`
const StyledLink = styled(Link)`
text-decoration: none;
:hover{
  color: #3c57ff;
}
`
