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
ReactGA.pageview('landing')
console.log(ReactGA)
const event = ReactGA.event({
  category: 'User',
  viewed_landing: true
});

console.log('event'. event)

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
