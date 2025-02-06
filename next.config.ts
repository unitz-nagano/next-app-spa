import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",

  env: {
    BASE_URL:
      process.env.baseURL === "stg"
        ? "http://staging.example.com/api"
        : process.env.APP_ENV === "prod"
        ? "http://api.example.com"
        : "http://localhost:8000",
    GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  },
}

export default nextConfig
