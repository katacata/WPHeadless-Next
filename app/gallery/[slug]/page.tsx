import getAllGalleriesByCat from "@/lib/queries/getAllGalleriesByCat";
import {Metadata} from "next";
import getAllGalleryCat from "@/lib/queries/getAllGalleryCat";
import {notFound} from "next/navigation";
import Image from "next/image";
import config from "@/lib/config";

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


export default async function GalleryCat({params}: {params: {slug: string}}) {

  const galleries = await getAllGalleriesByCat(params.slug);

  // No post? Bail...
  if (!galleries) {
    notFound()
  }

  return (
    <main>
      <section>
        <div className="content-container">
          <h1 className="title text-black">{params.slug}</h1>
          <div className="property-list">
            {JSON.stringify(galleries)}
            {galleries.map(({ title, slug, featuredImage}) => (
              <div className="property-item" key={slug}>
                <Image src={featuredImage?.node.sourceUrl} alt="" width={300} height={300}/>
                <h2 className="text-black">{title}</h2>
              </div>
            ))}
          </div>
        </div>
        </section>
      </main>
  );
}
