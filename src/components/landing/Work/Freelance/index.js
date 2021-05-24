import React from 'react'
import { Project } from 'components/common'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { freelanceProjects } = useStaticQuery(graphql`
    query {
      freelanceProjects: allFreelanceProjectsYaml {
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
  return <Project title="Freelance Projects" projects={freelanceProjects} side />
}
