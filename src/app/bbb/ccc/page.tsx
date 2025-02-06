"use client"

import NextLink from "next/link"
import style from "@/app/page.module.css"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Suspense } from "react"

function Search() {
  const [id, setId] = useState<string | null>(null)

  const searchParams = useSearchParams()
  useEffect(() => {
    setId(searchParams.get("id"))
  }, [searchParams])
  return <div>id:{id}</div>
}

export default function CCC() {
  // URLのパラメーターを取得

  return (
    <div className={style.page}>
      <div className={style.main}>
        <h1>CCC</h1>
        <Suspense>
          <Search />
        </Suspense>
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
