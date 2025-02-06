"use client"

import NextLink from "next/link"
import style from "@/app/page.module.css"

export default function AAA() {
  return (
    <div className={style.page}>
      <div className={style.main}>
        <h1>AAA</h1>
        <ul>
          <li>
            <NextLink href="/">TOP</NextLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
