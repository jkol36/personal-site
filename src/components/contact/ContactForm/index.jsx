import React, { useContext } from 'react'
import axios from 'axios'
import { Formik, Form, FastField, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Recaptcha from 'react-google-recaptcha'
import { navigate } from 'gatsby'
import { SmallerContainer, CustomButton } from 'components/common'
import { ThemeContext } from 'providers/ThemeProvider'
import {
  ContactWrapper,
  Wrapper,
  InputField,
  Center,
  Error,
  Text,
} from './styles'

const ContactForm = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <ContactWrapper as={SmallerContainer}>
      <Text theme={theme}>
        Feel free to email me via{' '}
        <a href="mailto:jonathankolman@gmail.com" target="_top">
          jonathankolman@gmail.com
        </a>
      </Text>
    </ContactWrapper>
  )
}

export default ContactForm
