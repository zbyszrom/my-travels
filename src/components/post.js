import React from "react"
import Image from "gatsby-image"
import { Link} from 'gatsby'

const Post = ({post}) => {

const {title, slug} = post
    
return(
    
    <Link to={`/blog/${slug}`} > 
    <p>{title}</p>
    </Link >
)

}
export default Post