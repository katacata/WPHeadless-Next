import Head from 'next/head';
import Link from 'next/link';
import getAllGalleries from "@/lib/queries/getAllGalleries";
import {Metadata} from "next";
import getPostBySlug from "@/lib/queries/getPostBySlug";
import getAllGalleryCat from "@/lib/queries/getAllGalleryCat";
import {notFound} from "next/navigation";
import Image from "next/image";

/**
 * Generate the static routes at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  // Get all blog posts.
  const cats = await getAllGalleryCat()

  // No posts? Bail...
  if (!cats) {
    return []
  }

  // Return the slugs for each post.
  return cats.map((cat: {slug: string}) => ({
    slug: cat.slug
  }))
}

/**
 * Generate the metadata for each static route at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata({
                                         params
                                       }: {
  params: {slug: string}
}): Promise<Metadata | null> {
  // Get the blog post.
  const post = await getPostBySlug(params.slug)

  // No post? Bail...
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: ""
  }
}

export default async function Post({params}: {params: {slug: string}}) {

  const galleries = await getAllGalleries();

  // No post? Bail...
  if (!galleries) {
    notFound()
  }

  return (
    <main>
      <section>
        <div className="content-container">
          <h1 className="title text-black">Property Listings</h1>
          <div className="property-list">
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
