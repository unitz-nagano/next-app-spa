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
        <h1 className="text-xl">Next.js Gerate SPA Test</h1>
        <p>Nexr.js(app router) + TypescriptでSSRをしない、SPA的なものを作るテスト</p>

        <p>
          configの設定：
          <a
            href="https://nextjs.org/docs/app/building-your-application/deploying/static-exports#configuration"
            className="underline text-blue-600"
            target="_blank"
          >
            Configuration
          </a>
        </p>
        <p>
          公式によると、動的なルーティングやMiddelware、Server Actionsなどが使用できない。
          <br />
          <a
            href="https://nextjs.org/docs/app/building-your-application/deploying#static-html-export"
            className="underline text-blue-600"
            target="_blank"
          >
            Static HTML Export
          </a>
          <br />
          <a
            href="https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features"
            className="underline text-blue-600"
            target="_blank"
          >
            Unsupported Features
          </a>
        </p>

        <p>
          そのためクライアントだけでGoogle認証するようにするしかない。
          <br />
          以下のプラグインを使用してみたところとりあえずはログイン＆APIが実行できそう。
          <br />
          <a
            href="https://www.npmjs.com/package/@react-oauth/google"
            className="underline text-blue-600"
            target="_blank"
          >
            @react-oauth/google
          </a>
          <br />
          本家は以下あたりが多分参考
          <br />
          <a
            href="https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=ja"
            className="underline text-blue-600"
            target="_blank"
          >
            クライアントサイド ウェブ アプリケーション用の OAuth 2.0
          </a>
        </p>

        <p className="mt-10">画面遷移テスト</p>
        <ul>
          <li>
            <NextLink href="/aaa" className="underline text-blue-600">
              AAA
            </NextLink>
            <span className="pl-4">→遷移できる</span>
          </li>
          <li>
            <NextLink href="/aaa/1" className="underline text-blue-600">
              AAA/1
            </NextLink>
            <span className="pl-4">→遷移できない（動的ルーティング）</span>
          </li>
          <li>
            <NextLink href="/aaa/2" className="underline text-blue-600">
              AAA/2
            </NextLink>
            <span className="pl-4">→遷移できない（動的ルーティング）</span>
          </li>
          <li>
            <NextLink href="/bbb" className="underline text-blue-600">
              BBB
            </NextLink>
            <span className="pl-4">→遷移できる</span>
          </li>
          <li>
            <NextLink href="/bbb/ccc/?id=1" className="underline text-blue-600">
              /bbb/ccc/?id=1
            </NextLink>
            <span className="pl-4">→遷移できる（パラメータも取得できる）</span>
          </li>
        </ul>

        <button onClick={() => googleLogin()}>Googleでログイン</button>
      </div>
    </div>
  )
}
