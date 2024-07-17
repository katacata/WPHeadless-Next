
import Link from 'next/link'
import getCustomMenu from "@/lib/queries/getCustomMenuBySlug";
import React from "react";

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
              <ul className="flex flex-row space-x-8 list-none">
              {!!menu &&
                menu.customMenuPage.customMenu.cusMenuTitle.map((item) => (
                  <li key={item.cusSlug}>
                    <div className="group hover:bg-sky-700">
                      <Link href={"/blog/"+item.cusSlug}>
                        {item.cusTitle}
                      </Link>
                      <br/>
                      <ul className="flex flex-row space-x-8">
                        {item.cusSubTitle.map((subItem) => (
                          <li key={subItem.cusSubSlug} className="hidden group-hover:block">
                            <Link href={"/blog/" + subItem.cusSubSlug}>
                              {subItem.cusSubTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </header>
)
}
