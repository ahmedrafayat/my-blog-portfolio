const { uniq, chain } = require('rambdax')
const path = require('path')
const { toKebabCase } = require('./src/helpers')

const pageTypeRegex = /src\/(.*?)\//
const getType = node => node.fileAbsolutePath.match(pageTypeRegex)[1]

const pageTemplate = path.resolve(`./src/templates/page.js`)
const tagsTemplate = path.resolve(`./src/templates/tags.js`)

exports.createPages = async ({ actions, graphql, getNodes }) => {
  const { createPage } = actions
  const allNodes = getNodes()

  const markdownQuery = await graphql(`
    {
      allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
            fileAbsolutePath
          }
        }
      }
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `)
  if (markdownQuery.errors) {
    return Promise.reject(markdownQuery.errors)
  }

  const {
    allMarkdownRemark: { edges: markdownPages },
  } = markdownQuery.data

  const sortedPages = markdownPages.sort((pageA, pageB) => {
    const typeA = getType(pageA.node)
    const typeB = getType(pageB.node)

    return (typeA > typeB) - (typeA < typeB)
  })

  const posts = allNodes.filter(
    ({ internal, fileAbsolutePath }) =>
      internal.type === 'MarkdownRemark' &&
      fileAbsolutePath.indexOf('/posts/') !== -1,
  )

  // Create each markdown page and post
  sortedPages.forEach(({node}, index) => {
    const previous = index === 0 ? null : sortedPages[index - 1].node
    const next =
      index === sortedPages.length - 1 ? null : sortedPages[index + 1].node
    const isNextSameType = getType(node) === (next && getType(next))
    const isPreviousSameType =
      getType(node) === (previous && getType(previous))

    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {
        type: getType(node),
        next: isNextSameType ? next : null,
        previous: isPreviousSameType ? previous : null,
      },
    })
  })

  // Create tag pages
  console.log("🚀 ~ file: gatsby-node.js ~ line 85 ~ exports.createPages= ~ tags", uniq(chain((post) => post.frontmatter.tags, posts)))
  const tags = uniq(chain((post) => post.frontmatter.tags, posts)).filter(
    (tag) => !tag.trim()
  );

  tags.forEach(tag => {
    createPage({
      path: `/tag/${toKebabCase(tag)}`,
      component: tagsTemplate,
      context: {
        tag,
      },
    })
  })

  return {
    sortedPages,
    tags,
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter!
  }
  
  type Frontmatter {
    title: String!
    author: String
    date: Date @dateformat
    path: String!
    tags: [String!]
    excerpt: String
    coverImage: File @fileByRelativePath
  }
  `
  createTypes(typeDefs)
}
