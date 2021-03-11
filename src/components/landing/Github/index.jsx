import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Project, GithubIcon, Container, Subtitle } from 'components/common'

export const Github = () => {
  

  return (
    <Container>
      <Subtitle>Open Source</Subtitle>
      <Project
        icon={GithubIcon}
        type="Github"
        projects={[]}
        link="https://github.com/jkol36"
        color="#000"
        github
      />
    </Container>
  )
}
