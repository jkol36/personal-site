import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { SmallerContainer } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import { MagicalButton, Wrapper, Flex } from './styles'

export const Intro = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper theme={theme} as={SmallerContainer}>
      <h1>I'm Jonathan Kolman</h1>
      <p>
        Also known as jkol36, a self-taught Full Stack JavaScript Developer, Python Developer and growth hacker.
        <br /> I help founders add value to society by crafting software using
        JavaScript tools, I love open source and building side projects.
      </p>
      <Flex>
        <MagicalButton
          href="https://docs.google.com/document/d/1stY5KGJVqoX8fUOqb40dYzP80kTLSTTefizY1znffYA/edit?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          View resume
        </MagicalButton>
        <MagicalButton as={Link} to="/contact">
          Get In Touch
        </MagicalButton>
      </Flex>
    </Wrapper>
  )
}
