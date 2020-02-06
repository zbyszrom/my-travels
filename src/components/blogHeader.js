import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getHeader = graphql`
query headerImage {
 data:allFile(filter: {relativePath: {in: ["dolomity19.jpg", "rawenna19.jpg"]}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  
}
  `
  
  

const BlogHeader = () => {
    const {data} = useStaticQuery(getHeader)
    
return(
    <section>
    <h3>Blog</h3> 
     <Img fluid =  {data.edges[1].node.childImageSharp.fluid} /> 
     <Img fluid =  {data.edges[0].node.childImageSharp.fluid} /> 
    </section>
)

}
export default BlogHeader