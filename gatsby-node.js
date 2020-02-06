const path = require(`path`);
const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result;
      })
    )
   });
   // Implement the Gatsby API "createPages". This is called once the
   // data layer is bootstrapped to let plugins create pages from data.
   exports.createPages = ({ actions, graphql }) => {
     const { createPage } = actions;
      // Create pages for each video.
 const getPlace = makeRequest(graphql, `
 {
  allDatoCmsPlace
   {
     edges {
       node {
         id
         slug
       }
     }
   }
 }
 `).then(result => {
 result.data.allDatoCmsPlace.edges.forEach(({ node }) => {
   createPage({
     path: `places/${node.slug}`,
     component: path.resolve(`src/templates/place.js`),
     context: {
        slug: node.slug,
     },
   })
 })
});

const getPost = makeRequest(graphql, `
 {
  allDatoCmsPost
   {
     edges {
       node {
         id
         slug
       }
     }
   }
 }
 `).then(result => {
 result.data.allDatoCmsPost.edges.forEach(({ node }) => {
   createPage({
     path: `blog/${node.slug}`,
     component: path.resolve(`src/templates/article.js`),
     context: {
        slug: node.slug,
     },
   })
 })
});

return Promise.all([getPlace, getPost])
   }