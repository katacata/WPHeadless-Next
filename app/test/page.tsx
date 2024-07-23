
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
    <main>
    <section className="min-h-[500px]">
      <div className="hero bg-[#115d98] relative">
        <h1 className="text-white text-4xl">Full-Width Section with a Convex Curve Bottom Divider</h1>
        <h3 className="text-white">Using border radius and a pseudo class clipped by overflow: hidden.</h3>
        <span className="relative h-[140px] mt-[-100px] bottom-[-70px] overflow-hidden block after:-z-[1]
        after:content-[''] after:absolute after:w-[2600px] after:h-[100px] after:bottom-0 after:rounded-[50%]
        after:-translate-x-1/2 after:bg-[#115d98] after:left-1/2 after:top-[0px]"></span>
      </div>
    </section>
    </main>
  )
}
