import React from 'react'
import {Link} from 'gatsby'

 const Hero = () => {
    return (
        <div>
          <h2>Ciekawe miejsca</h2>
          <p>w kraju i na świecie</p> 
          <Link to = "./places">Wędruj ze mną</Link>
        </div>
    )
}
export default Hero