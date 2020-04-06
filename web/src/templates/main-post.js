import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'

export const query = graphql`
    query MyQuery{
      post: sanityMain {
          id
          title
          _createdAt
          _rawMainBody
          _rawMainImage
          _rawSlug
          _rev
          _type
          _updatedAt
          children {
            id
          }
        }
      }

`

const MainPost = props => {
  const {data, errors} = props
  console.log(data)
  return (
    <div>
      <p>Hei content</p>
    </div>
  )
}

export default MainPost
