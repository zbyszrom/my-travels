import React from 'react'
import {Link} from 'gatsby'
//import styled from "styled-components"

 const Hero = ({children}) => {

  

    return (

          <header className ="defaultHero "> {children}
          <div>
          <h2>Ciekawe miejsca</h2>
          <p>w kraju i na świecie</p> 
          <Link to = "./places">Wędruj ze mną</Link>
          </div>
          </header>
          
    )
}
export default Hero