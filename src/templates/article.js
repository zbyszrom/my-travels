import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const Template = ({data}) => {
console.log(data)
    const {title} =  data.post

    return(
       <Layout>
            <h1>{title}</h1>

       </Layout> 
    )

}
export const query = graphql`
    query($slug: String!) {
    post: datoCmsPost(slug: {eq: $slug}) {
            title
            image {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
    }

`

export default Template