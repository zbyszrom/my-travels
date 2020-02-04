import React from "react"
import Image from "gatsby-image"
import { Link} from 'gatsby'

const Place = ({place} ) => {
const {name, country, images, slug } = place
let mainImage = images[0].fluid

return (
    <div>
   <Image fluid = {mainImage} />
   <Link to={`/places/${slug}`}> 
   <h3>{name}</h3>
   </Link>
   <h4>{country}</h4>
   </div> 
)
} 

export default Place