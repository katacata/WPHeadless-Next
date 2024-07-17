
import Link from 'next/link'
import getCustomMenu from "@/lib/queries/getCustomMenuBySlug";

/**
 * Header component.
 */
export default async function Header() {
  const menu = await getCustomMenu()
  return (
    <header className="bg-blue-400 max-w-full">
      <main>
        <section>
          <div className="content-container">
            <div>
              <Link href="/"><h1 className="mb-0">Next.js WordPress</h1></Link>
              <p>It&apos;s Headless WordPress</p>
            </div>
            <nav className="flex justify-between gap-4">
              {!!menu &&
                menu.customMenuPage.customMenu.cusMenuTitle.map((item) => (
                  <Link key="" href={"/blog/"+item.cusSlug}>
                    <div className="group hover:bg-sky-700">{item.cusTitle}
                      {item.cusSubTitle.map((subItem) => (
                        <Link key="" href={"/blog/"+subItem.cusSubSlug}>
                          <div className="hidden group-hover:block">{subItem.cusSubTitle}</div>
                        </Link>
                      ))}
                    </div>
                  </Link>
                ))}
            </nav>
          </div>
        </section>
      </main>
    </header>
)
}
