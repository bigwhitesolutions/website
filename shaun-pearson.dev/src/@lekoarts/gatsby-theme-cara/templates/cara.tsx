import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={4}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      <Contact offset={3} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara