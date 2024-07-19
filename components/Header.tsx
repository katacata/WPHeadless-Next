
import Link from 'next/link'
import Image from 'next/image'
import getCustomMenu from "@/lib/queries/getCustomMenuBySlug";
import React from "react";
import Icon from "@/public/bhk_logo.svg"

/**
 * Header component.
 */


export default async function Header() {
  const menu = await getCustomMenu()
  return (
    <header className="max-w-full">
      <main>
        <section>
          <div className="content-container flex justify-center items-center">
            <Image src={Icon} alt="" className="items-center"/>
          </div>
        </section>
        <section className="bg-orange-600">
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
                        <ul
                          className="absolute bg-green-500  hidden flex-col space-y-2 list-none group-hover:flex z-1000 mt-0 mb-0 ps-0">
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
                <li className="mt-0 mb-0">
                  <Link href={"/mission"} className="no-underline text-black">
                    Our Mission
                  </Link>
                </li>
                <li className="mt-0 mb-0">
                  <Link href={"/gallery"} className="no-underline text-black">
                    Gallery
                  </Link>
                </li>
              </ul>

            </nav>
          </div>
        </section>
      </main>
    </header>
  )
}
