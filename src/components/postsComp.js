import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Post from './post'

const getPosts = graphql`
query {
    allPosts: allDatoCmsPost {
        edges {
            node {
              image {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
              title
              slug
             id          
            }
          } 
    }
}
`

const Posts = () => {

    const response = useStaticQuery(getPosts)
    const posts = response.allPosts.edges

    return( 
<section>
<h4>Wszystkie miejsca </h4>
    {posts.map(({node}) => {
      return < Post key={node.id} post = {node} />
    }
    )}

</section>

    )
    
}
export default Posts