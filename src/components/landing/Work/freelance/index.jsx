import React from 'react'
import { Project, DribbbleIcon } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { shots } = useStaticQuery(graphql`
    query {
      shots: allDribbbleYaml {
        edges {
          node {
            id
            title
            image {
              childImageSharp {
                fluid(maxWidth: 630) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            link
            description
          }
        }
      }
    }
  `)
  return (
    <Project
      title="Freelance Projects"
      projects={shots}
      link="https://github.com/jkol36"
      color="#ea4c89"
    />
  )
}
