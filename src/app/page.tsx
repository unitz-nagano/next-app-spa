/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import axios from "axios"

import NextLink from "next/link"
import style from "@/app/page.module.css"
import {
  GoogleOAuthProvider,
  useGoogleLogin,
  GoogleLogin,
  hasGrantedAllScopesGoogle,
} from "@react-oauth/google"
export default function Home() {
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse)
      const tokens = await axios.post("http://localhost:3000/", {
        code: codeResponse.code,
      })

      console.log(tokens)
    },
    onError: (errorResponse) => console.log(errorResponse),
  })
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

        <button onClick={() => googleLogin()}>Googleでログイン</button>
      </div>
    </div>
  )
}
