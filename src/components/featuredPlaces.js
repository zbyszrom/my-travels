import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Place from "./place"

const getPlaces = graphql`
query {
  featuredPlaces: allDatoCmsPlace(filter: { featured: { eq: true } }) {
    edges {
      node {
        images {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        name
        slug
        country
       id          
      }
    }
  }
}
`


 const FeaturedPlaces = () => {
  const response = useStaticQuery(getPlaces)
  const places = response.featuredPlaces.edges
    return (
        <section>
          <h4>Featured places</h4>
          {places.map(({ node }) => {
            return <Place  key={node.id} place = {node}/>
          }
          )}
          <Link to = "/places">
            All places
          </Link>

        </section>
    )
}
export default FeaturedPlaces