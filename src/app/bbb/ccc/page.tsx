"use client"

import NextLink from "next/link"
import style from "@/app/page.module.css"
import { useSearchParams } from "next/navigation"

export default function CCC() {
  // URLのパラメーターを取得
  const searchParams = useSearchParams()
  const id = searchParams.get("id")

  return (
    <div className={style.page}>
      <div className={style.main}>
        <h1>CCC</h1>
        <div>id:{id}</div>
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
