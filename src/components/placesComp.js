import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Place from "./place"

const getPlaces = graphql`
query {
    allPlaces: allDatoCmsPlace {
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


const Places = ( )=> {

    const response = useStaticQuery(getPlaces)
    const places = response.allPlaces.edges
    return(
    <section>
    <h4>Wszystkie miejsca </h4>
    {places.map(({node}) => {
      return < Place key={node.id} place = {node} />
    }

    )}
    </section>
    )
}
export default Places