import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  Container,
  CardPost,
  Row,
  Subtitle,
  CustomButton,
} from 'components/common'
import { Wrapper, Center } from './styles.js'

export const Popular = () => {
  const {
    popular: { edges },
  } = useStaticQuery(graphql`
    query {
      popular: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: { popular: { eq: true }, type: { ne: "legal" } }
        }
        limit: 3
      ) {
        edges {
          node {
            description: excerpt(pruneLength: 230)
            id
            timeToRead
            frontmatter {
              title
              date(formatString: "MMM DD, YYYY")
              path
              tags
              thumbnail {
                childImageSharp {
                  ...imageFields
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div> </div>
  )
}
