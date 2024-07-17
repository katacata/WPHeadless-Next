
import Link from 'next/link'
import getCustomMenu from "@/lib/queries/getCustomMenuBySlug";
import React from "react";

/**
 * Header component.
 */


export default async function Header() {
  const menu = await getCustomMenu()
  return (
    <header className="max-w-full">
      <main>
          <section>
            <div className="content-container">
              <div className="ps-4">
                <Link href="/"><h1 className="mb-0 text-black">Next.js WordPress</h1></Link>
                <p>It&apos;s Headless WordPress</p>
              </div>
            </div>
          </section>
        <section className="bg-blue-400">
          <div className="content-container">
            <nav className="flex justify-between gap-4">
              <ul className="flex flex-row space-x-16 list-none ps-4 mt-0 mb-0">
                {!!menu &&
                  menu.customMenuPage.customMenu.cusMenuTitle.map((item) => (
                    <li key={item.cusSlug} className="mt-0 mb-0">
                      <div className="group hover:bg-sky-700">
                        <Link href={"/blog/" + item.cusSlug} className="no-underline text-black">
                          {item.cusTitle}
                        </Link>
                        <br/>
                        <ul className="absolute bg-green-500  hidden flex-col space-y-2 list-none group-hover:flex z-1000 mt-0 mb-0 ps-0">
                          {item.cusSubTitle.map((subItem) => (
                            <li key={subItem.cusSubSlug} className="mt-0 mb-0 hover:bg-green-700">
                              <Link href={"/blog/" + subItem.cusSubSlug} className="no-underline text-black">
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
