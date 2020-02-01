import React from 'react'
import {Link} from 'gatsby'
import links from '../constants/links'
import icons from '../constants/social-icons'

 const Footer = () => {
    return (
        <footer>
          <ul>
            {
              links.map((link)=>{
                return(
                <li>
                  <Link to={link.path}>{link.text}</Link>
                  </li> 
                )
              }
              )
              }
          </ul>
          <div>
            {
              icons.map((icon)=>{
                return(
                <a href={icon.url}
                target="_blank"
                rel="noopener noreferrer">
                {icon.icon}</a>
                )
              }

              )
            }
          </div>
          <div>
            copyright &copy; zbyszrom {new Date().getFullYear()}
          </div>
        </footer>
    )
}
export default Footer