import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import ReactGA from 'react-ga'
import { SmallerContainer } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import { MagicalButton, Wrapper, Flex } from './styles'

export const Intro = () => {
  useEffect(() => {
    console.log('running')
    ReactGA.event({
  category: 'User',
  action: 'Created an Account'
  });

  ReactGA.event({
    category: 'Social',
    action: 'Rated an App',
    value: 3
  });

  ReactGA.event({
    category: 'Editing',
    action: 'Deleted Component',
    label: 'Game Widget'
  });

  ReactGA.event({
    category: 'Promotion',
    action: 'Displayed Promotional Widget',
    label: 'Homepage Thing',
    nonInteraction: true
  });
  })
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
