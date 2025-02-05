"use client"

import NextLink from "next/link"
import style from "@/app/page.module.css"

export default function Home() {
  return (
    <div className={style.page}>
      <div className={style.main}>
        <h1>Next.js Gerate SPA Test</h1>
        <ul>
          <li>
            <NextLink href="/aaa">AAA</NextLink>
          </li>
          <li>
            <NextLink href="/aaa/1">AAA:1</NextLink>
          </li>
          <li>
            <NextLink href="/aaa/2">AAA:2</NextLink>
          </li>
          <li>
            <NextLink href="/bbb">BBB</NextLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
