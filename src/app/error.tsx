"use client"

import { CgUndo } from "react-icons/cg"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="mx-auto mt-5 flex h-full w-full max-w-[50rem] flex-col">
        <div className="py-10 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold uppercase text-dark-600 dark:text-white sm:text-9xl">
            {error.name}
          </h1>
          <h1 className="-mt-3 text-xl font-bold text-light-800">
            {error.message}
          </h1>
          <figure className="relative z-[1] ml-auto mt-5 mr-10 h-auto w-[50rem] max-w-full rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
            <div className="relative flex w-full items-center rounded-t-lg bg-dark-500 py-2 px-16 shadow">
              <div className="absolute top-2/4 left-4 flex -translate-y-1 space-x-1">
                <span className="h-2 w-2 rounded-full bg-dark-400" />
                <span className="h-2 w-2 rounded-full bg-dark-400" />
                <span className="h-2 w-2 rounded-full bg-dark-400" />
              </div>
              <div className="flex w-full items-center justify-center rounded-sm bg-dark-400 text-sm text-light-400">
                www.site.com
              </div>
              <button
                type="button"
                onClick={() => reset()}
                className="absolute top-[22%] right-4 flex -translate-y-1 space-x-1 text-dark-300 transition-transform duration-200 focus:-rotate-[360deg]"
              >
                <CgUndo className="h-7 w-7" />
              </button>
            </div>

            <div className="rounded-b-lg bg-dark-600">
              <p className="overflow-x-auto p-3 text-dark-300">{error.stack}</p>
            </div>
          </figure>

          {/* <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <a
              className="inline-flex w-full items-center justify-center gap-x-3 rounded-md border border-transparent bg-blue-600 py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 sm:w-auto"
              href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Get the source code
            </a>
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-blue-500 ring-offset-white transition-all hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-slate-900 sm:w-auto"
              href="../examples.html"
            >
              <svg
                className="h-2.5 w-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Back to examples
            </a>
          </div> */}
        </div>

        {/* <footer className="mt-auto py-5 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">
              © All Rights Reserved. 2022.
            </p>
          </div>
        </footer> */}
      </body>
    </html>
  )
}
