
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
    <header className="">
      <main className="max-w-full">
        <section className="h-[150px]">
          <div className="content-container h-full flex justify-center items-center">
            <Image src={Icon} alt="" className="items-center"/>
          </div>
        </section>
        <section className="bg-orange-600 h-[72px]">
          <div className="content-container flex justify-center items-center h-full">
            <nav className="flex justify-between gap-4">
              <ul className="flex flex-row space-x-16 list-none ps-4 mt-0 mb-0">
                {!!menu &&
                  menu.customMenuPage.customMenu.cusMenuTitle.map((item) => (
                    <li key={item.cusSlug} className="mt-0 mb-0">
                      <div className="group">
                        <Link href={"/blog/" + item.cusSlug} className="no-underline text-white uppercase text-center font-[700]">
                          {item.cusTitle}
                          {item.cusSubTitle? " ↓":""}
                        </Link>
                        <br/>
                        <ul
                          className="absolute bg-gray-300  hidden flex-col space-y-2 list-none group-hover:flex z-1000 mt-0 mb-0 ps-0">
                          {!!item.cusSubTitle && item.cusSubTitle.map((subItem) => (
                            <li key={subItem.cusSubSlug} className="mt-0 mb-0">
                              <Link href={"/blog/" + subItem.cusSubSlug} className="text-gray-700 hover:text-orange-400 no-underline hover:underline text-center font-[700]">
                                {subItem.cusSubTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                <li className="mt-0 mb-0 hidden">
                  <Link href={"/mission"} className="no-underline text-black">
                    Our Mission
                  </Link>
                </li>
                <li className="mt-0 mb-0 hidden">
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
