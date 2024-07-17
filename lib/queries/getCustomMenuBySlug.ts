import {fetchGraphQL} from '@/lib/functions'
import {Menu} from '@/lib/types'

/**
 * Fetch a menu by slug.
 */
export default async function getCustomMenu() {
  const query = `
    query GetCustomMenu {
      customMenuPage{
        customMenu{
          cusMenuTitle{
            cusTitle
            cusSlug
            cusSubTitle {
              cusSubTitle
              cusSubSlug
            }
          }
        }
      }
    }
  `

  const response = await fetchGraphQL(query)

  return response.data as Menu
}
