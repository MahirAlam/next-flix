import Footer from "@components/frontend/Footer"
import Header from "@components/frontend/Header"
import "@styles/globals.css"
import React from "react"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="light h-full" lang="en">
      <head />
      <body className="flex h-full w-full flex-col bg-light-300 dark:bg-dark-500">
        <Header />
        <main id="content" role="main">
          <div className="mx-auto p-4 dark:bg-gray-800 sm:px-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
