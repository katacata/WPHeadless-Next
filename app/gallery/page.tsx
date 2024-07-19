import Head from 'next/head';
import Link from 'next/link';
import getAllGalleries from "@/lib/queries/getAllGalleries";
import {Metadata} from "next";
import getPostBySlug from "@/lib/queries/getPostBySlug";
import getAllPosts from "@/lib/queries/getAllPosts";
import getOurMission from "@/lib/queries/getOurMission";
import {notFound} from "next/navigation";
import Image from "next/image";
import getAllGalleryCat from "@/lib/queries/getAllGalleryCat";

/**
 * Generate the static routes at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  // Get all blog posts.
  const posts = await getAllPosts()

  // No posts? Bail...
  if (!posts) {
    return []
  }

  // Return the slugs for each post.
  return posts.map((post: {slug: string}) => ({
    slug: post.slug
  }))
}

/**
 * Generate the metadata for each static route at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

export default async function Gallery({params}: {params: {slug: string}}) {

  const galleries = await getAllGalleries();
  const galleryCats = await getAllGalleryCat();
  // No post? Bail...
  if (!galleries) {
    notFound()
  }

  return (
    <main>
      <section>
        <div className="content-container">
          <div className="flex-row">
            {galleryCats.map(({name, slug}) => (
              <div className="category" key={slug}>
                <Link href={"/gallery/"+slug}>
                  <h2 className="text-black">{name}</h2>
                </Link>
              </div>
            ))}
          </div>
          <div className="property-list">
            {JSON.stringify(galleries)}
            {galleries.map(({ title, slug, featuredImage}) => (
              <div className="property-item" key={slug}>
                <Link href={"/"}>
                    <Image src={featuredImage?.node.sourceUrl} alt="" width={300} height={300}/>
                    <h2 className="text-black">{title}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
        </section>
      </main>
  );
}
