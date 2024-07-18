import {fetchGraphQL} from '@/lib/functions'
import {GalleryCat} from '@/lib/types'

/**
 * Fetch all pages.
 */
export default async function getAllGalleryCat() {
  const query = `
    query GetAllGalleryCats {
      galleryCategories{
        nodes{
          name
          slug
        }
      }
    }
  `

  const response = await fetchGraphQL(query)

  return response.data.galleryCategories.nodes as GalleryCat[]
}
