import {fetchGraphQL} from '@/lib/functions'
import {Gallery} from '@/lib/types'

/**
 * Fetch all pages.
 */
export default async function getAllGalleryCat( slug: string) {
  const query = `
    query GetAllGalleriesBySlug($slug: String!) {
      galleryCategories(where: {slug: $slug}) {
        nodes {
        galleries {
          nodes {
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            galleryCategories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
      }
    }
  `

  const variables = {
    slug: slug
  }
  const response = await fetchGraphQL(query, variables)

  return response.data.galleryCategories.nodes.galleries.nodes as Gallery[]
}
