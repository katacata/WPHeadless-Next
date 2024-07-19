import {fetchGraphQL} from '@/lib/functions'
import {Gallery} from '@/lib/types'

/**
 * Fetch a category archive by slug.
 */
export default async function getCategoryBySlug(slug: string) {
  const query = `
    query GetCategoryBySlug($slug: ID!) {
      galleryCategory(idType: SLUG, id: $slug) {
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
  `


  const variables = {
    slug: slug
  }

  const response = await fetchGraphQL(query, variables)

  return response.data.galleryCategory.galleries.nodes as Gallery[]
}
