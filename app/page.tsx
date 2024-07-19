import getAllPosts from '@/lib/queries/getAllPosts'
import getPageBySlug from '@/lib/queries/getPageBySlug'
import {Post} from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

/**
 * The homepage route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default async function Home() {
  // Fetch homepage from WordPress.
  const homepage = await getPageBySlug('homepage')

  // Fetch posts from WordPress.
  const posts = await getAllPosts()

  // No data? Bail...
  if (!posts || !posts.length || !homepage) {
    notFound()
  }

  return (
    <main className="flex flex-col gap-8">
      <section>
        <div className="content-container">
          <article>
            <h1 dangerouslySetInnerHTML={{__html: homepage.title}}/>
            <div dangerouslySetInnerHTML={{__html: homepage.content}}/>
          </article>
          <aside>
            <h2>Latest Posts</h2>
            <div className="flex flex-wrap">
            </div>

          </aside>
        </div>
      </section>
    </main>
  )
}
