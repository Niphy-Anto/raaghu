// const path = require('path')

const path = require("path");

// exports.createPages = ({graphQl, actions})=>{
//   const { createPages } = actions

//   return new Promise((resolve, reject)) => {

//     const pageTemplate = path.reslove('src/pages/{markdownRemark.frontmatter__slug}.js')

//     resolve(
//         graphQl(
//             `
//             query MyQuery {
//                 allMarkdownRemark {
//                   edges {
//                     node {
//                       frontmatter {
//                         slug
//                       }
//                     }
//                   }
//                 }
//               }
              
//             `
//         ).then(result => {
//             const pageData =  result.data.allMarkdownRemark.edges
            
//             pageData.forEach(({node, index }) => {
//                  const path = node.frontmatter.slug
//                  createPage({
//                     path,
//                     pathSlug: path,
//                     prev: index === 0 ? null : posts[index -1].node,
//                     next: index === (posts.length-1)? null : posts[index + 1]
//                  })
                
//             });

//             reslove();
//         })
//     )
//   }
// }


exports.createPages = async function ({ actions, graphql }) {
  debugger
    const { data } = await graphql(`
    {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);

    // data.allMarkdownRemark.nodes.forEach(node => {
    //     debugger;
    //     actions.createPage({
    //         path: node.frontmatter.slug,
    //         component: path.resolve('./src/pages/{markdownRemark.frontmatter__slug}.js'),
    //         context: { slug: node.frontmatter.slug}
    //     })
    // })

    // data.allMarkdownRemark.nodes.forEach(node => {
    //     const slug = node.fields.slug
    //     actions.createPage({
    //       path: slug,
    //       component: require.resolve(`./src/templates/blog-post.js`),
    //       context: { 
    //         slug: slug,  
    //     },
    //     })
    //   })
    // console.log(data);
    // const pageSlug =  data.allMarkdownRemark.nodes;
    // let index = 0;
    // actions.createPage({
    //     slug,
    //     component: require.resolve(`./src/pages/{markdownRemark.frontmatter__slug}.js`),
    //     context: { 
    //       prev: index === 0 ? null : pageSlug[index - 1].node,
    //       next: index === (pageSlug.length - 1) ? null : pageSlug[index + 1].node,
    //       slug: slug              
    //      },
    // })
    
    // pageSlug.forEach(node => {
    //   const slug = node.frontmatter.slug
    //   actions.createPage({
    //     slug,
    //     component: require.resolve(`./src/pages/{markdownRemark.frontmatter__slug}.js`),
    //     context: { 
    //         slug: slug,
    //         prev: index === 0 ? null : pageSlug[index - 1].node,
    //         next: index === (pageSlug.length - 1) ? null : pageSlug[index + 1].node
    //      },
    //   })
    // })
        
    // let index = 0;
    // console.log("outside of for loop");
    // for(let node in pageSlug){
    //     console.log("inside of for loop");
    //     let slug = node.frontmatter.slug;
    //     console.log(node);
    //     actions.createPage({
    //       slug,
    //       component: require.resolve(`./src/pages/{markdownRemark.frontmatter__slug}.js`),
    //       context: { 
    //         prev: index === 0 ? null : pageSlug[index - 1].node,
    //         next: index === (pageSlug.length - 1) ? null : pageSlug[index + 1].node,
    //         slug: slug              
    //        },
    //     })
    //     index++;
    // }
}