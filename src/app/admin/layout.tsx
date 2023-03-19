import Sidebar from "@components/Sidebar"
import React from "react"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      <main className="h-full w-full bg-light-400 dark:bg-dark-500 lg:pl-64">
        {children}
      </main>
    </>
  )
}
