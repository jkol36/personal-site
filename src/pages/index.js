import React from 'react'
import {
  Intro,
  Skills,
  Work,
  Services,
  Github,
  Popular,
  RecentTalks,
  Testimonials,
} from 'components/landing'
import { Layout, SEO } from 'components/common'
import ReactGA from 'react-ga'

const trackingId = 'G-NTVE5GXZXZ'
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

export default () => (
  <Layout>
    <SEO title="Jon Kolman" type="Organization" />
    <Intro />
    <Skills />
    <Work />
    <Services />
    <Github />
    <Popular />
    <Testimonials />
    <RecentTalks />
  </Layout>
)
