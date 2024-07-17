import {fetchGraphQL} from '@/lib/functions'
import {Mission} from '@/lib/types'

/**
 * Fetch a menu by slug.
 */
export default async function getOurMission() {
  const query = `
    query GetOurMission {
      ourMission{
        missionContent{
          missionTitle
          missionDescription
          missionImage{
            node{
              sourceUrl
            }
          }
        }
      }
    }
  `

  const response = await fetchGraphQL(query)

  return response.data as Mission
}
