/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Geist, Geist_Mono } from "next/font/google"
import {
  GoogleOAuthProvider,
  useGoogleLogin,
  GoogleLogin,
  hasGrantedAllScopesGoogle,
} from "@react-oauth/google"
import { useState } from "react"
import axios from "axios"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ""

  // ステートの初期化
  const [id, setId] = useState("")
  const [email, setEmail] = useState("")
  const [givenName, setGivenName] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Googleログインの設定
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => responseGoogle(codeResponse), // ログイン成功時の処理
  //   flow: "auth-code",
  //   scope: "email profile openid",
  // })

  /**
   * ログイン成功時に実行される関数
   * @param codeResponse
   */
  const responseGoogle = (codeResponse: any) => {
    console.log(JSON.stringify(codeResponse))
    const tokenResponse = codeResponse.credential
    const hasAccess = hasGrantedAllScopesGoogle(
      tokenResponse,
      "https://www.googleapis.com/auth/admin.directory.user.readonly",
    )
    console.log(JSON.stringify(hasAccess))
    // サーバーへアクセストークンをリクエスト
    axios
      .get(`http://localhost:8000/api/self`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenResponse}`,
        },
      })
      .then((response) => {
        console.log(response)
        // ステートを更新
        setId(response.data.user_id)
        setEmail(response.data.e_mail)
        setGivenName(response.data.full_name)
        setIsLoggedIn(true) // ログイン状態をtrueに設定
      })
      .catch((error) => {
        console.error("Error occurred:", error)
      })
  }

  return (
    <html lang="jp">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="max-w-5xl m-auto mt-10">
          <GoogleOAuthProvider clientId={clientId}>
            <p className="mb-6">GOOGLE_CLIENT_ID:{clientId}</p>
            <GoogleLogin onSuccess={responseGoogle} locale="jp" />
            <dl className="flex mt-6">
              <dt className="w-48">user_id</dt>
              <dd>{id}</dd>
            </dl>
            <dl className="flex">
              <dt className="w-48">e_mail</dt>
              <dd>{email}</dd>
            </dl>
            <dl className="flex">
              <dt className="w-48">full_name</dt>
              <dd>{givenName}</dd>
            </dl>

            <div>
              <div>{children}</div>
            </div>
          </GoogleOAuthProvider>
        </div>
      </body>
    </html>
  )
}
