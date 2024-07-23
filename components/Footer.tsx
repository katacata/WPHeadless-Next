import Link from "next/link";
import React from "react";
import getCustomMenu from "@/lib/queries/getCustomMenuBySlug";
import Image from "next/image";
import Icon from "@/public/bhk_logo.svg"

/**
 * Footer component.
 */
export default async function Footer() {
  const menu = await getCustomMenu()
  const title = menu?.customMenuPage?.customMenu?.cusMenuTitle

  return (
    <footer>
      <main>
        <section className="bg-LAVENDER pt-[30px]">
          <div className="content-container flex justify-center items-center h-full">
            <nav className="flex justify-between gap-4">
              <ul className="flex flex-row space-x-16 list-none mt-0 mb-0">
                <Link href="/">
                  <Image src={Icon} alt="" className="items-center"/>
                </Link>
                {!!menu &&
                  title.map((item) => (
                    <li key={item.cusSlug} className="mt-0 mb-0c">
                      <div className="group">
                        <Link href={"/blog/" + item.cusSlug}
                              className="no-underline text-black text-center font-[700] text-[21px]">
                          {item.cusTitle}
                        </Link>
                        <br/>
                        <ul
                          className="flex flex-col space-y-2 list-none z-1000 mt-0 mb-0 ps-0">
                          {!!item.cusSubTitle && item.cusSubTitle.map((subItem) => (
                            <li key={subItem.cusSubSlug} className="mt-0 mb-0 ps-0">
                              <div className="relative w-3 h-3 mr-4 group inline-block">
                                <div
                                  className="absolute top-1 left-0 w-2 h-0.5 bg-black transform rotate-45 transition-all duration-200"></div>
                                <div
                                  className="absolute top-2 left-0 w-2 h-0.5 bg-black transform -rotate-45 transition-all duration-200"></div>
                              </div>

                              <Link href={"/blog/" + subItem.cusSubSlug}
                                    className="text-black hover:text-orange-400 no-underline hover:underline font-[700] text-[16px]">
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
        <section className="text-sm text-center border-t-2 bg-SUNBURN max-w-full h-[64px]">
          <div className="content-container text-[16px]  h-full flex text-white justify-center items-center">
            &copy; {new Date().getFullYear()} The Better Hong Kong Foundation. All rights reserved. {' '}
            <Link href="https://she.com">Privacy Policy</Link>
          </div>
        </section>
      </main>
    </footer>
  )
}
