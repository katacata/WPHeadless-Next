import {fetchGraphQL} from '@/lib/functions'
import {Gallery} from '@/lib/types'

/**
 * Fetch all pages.
 */
export default async function getAllGalleries() {
  const query = `
      query GetAllGalleries {
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
  `

  const response = await fetchGraphQL(query)

  return response.data.galleries.nodes as Gallery[]
}
