"use client"

import NextLink from "next/link"
import style from "@/app/page.module.css"

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  return (
    <div className={style.page}>
      <div className={style.main}>
        <h1>AAA: {slug}</h1>
        <ul>
          <li>
            <NextLink href="/">TOP</NextLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
