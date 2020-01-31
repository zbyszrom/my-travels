/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import NavBar from "./navBar"
import Footer from "./footer"

const Layout = ({ children }) => {
  

  return (
      
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>  
  )
}

export default Layout
