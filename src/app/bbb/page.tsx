"use client"

import NextLink from "next/link"
import style from "@/app/page.module.css"

export default function BBB() {
  return (
    <div className={style.page}>
      <div className={style.main}>
        <h1>BBB</h1>
        <ul>
          <li>
            <NextLink href="/" className="underline text-blue-600">
              TOP
            </NextLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
