import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Intro from "../components/intro"
import FeaturedPlaces from "../components/featuredPlaces"
import AboutMe from "../components/aboutMe"



const IndexPage = () => (
 
  <Layout>
    
    <Hero />
    <Intro />
    <FeaturedPlaces />
    <AboutMe />
    
  </Layout>
)

export default IndexPage
