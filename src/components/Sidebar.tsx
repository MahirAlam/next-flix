import Link from "next/link"
import { AiOutlineHome } from "react-icons/ai"
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi"
import { ImSearch } from "react-icons/im"

function Sidebar() {
  return (
    <>
      <div
        id="admin-sidebar"
        className="hs-overlay scrollbar-y dark:scrollbar-y fixed top-0 left-0 bottom-0 z-[60] hidden w-72 -translate-x-full transform overflow-y-auto border-r border-dark-100 bg-light-50 transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-gray-700 dark:bg-gray-800 lg:right-auto lg:bottom-0 lg:block lg:w-64 lg:translate-x-0"
      >
        <div className="flex h-16 w-full items-center justify-start bg-light-200 p-5 shadow">
          <a
            className="font-serif text-2xl font-semibold dark:text-white"
            href="/admin/dashboard"
            aria-label="Brand"
          >
            Next Flix
          </a>
        </div>

        <nav
          className="hs-accordion-group flex w-full flex-col flex-wrap p-3"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1">
            <li>
              <Link
                className="flex items-center gap-x-3.5 rounded-md py-2 px-2.5 text-light-900 transition-all hover:bg-light-300 focus:outline-none focus:ring-1 focus:ring-info-500 lg:text-sm"
                href="/admin/dashboard"
              >
                <AiOutlineHome className="h-4 w-4" />
                Dashboard
              </Link>
            </li>
            <li className="hs-accordion-group">
              <div className="hs-accordion" id="hs-basic-nested-heading-two">
                <button
                  className="hs-accordion-toggle inline-flex w-full items-center gap-x-3.5 rounded-md py-2 px-2.5 text-light-900 transition hover:bg-light-300  focus:outline-none focus:ring-1 focus:ring-info-500 lg:text-sm"
                  aria-controls="hs-basic-nested-collapse-two"
                  type="button"
                >
                  <BiCameraMovie className="h-4 w-4 -rotate-12" />
                  Movies
                  <svg
                    className="ml-auto h-3 w-3 text-gray-600 transition-transform group-hover:text-gray-500 hs-accordion-active:rotate-180 dark:text-gray-400"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-nested-collapse-two"
                  className="hs-accordion-content float-right hidden w-[calc(100%-20px)] overflow-hidden border-l border-light-400 transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-heading-two"
                >
                  <ul className="my-1 ml-2 space-y-1">
                    <li>
                      <Link
                        className="mr-1 flex items-center gap-x-3.5 rounded-md py-2 px-2.5 text-sm text-light-900 transition-all hover:bg-light-300 focus:outline-none focus:ring-1 focus:ring-info-500"
                        href="/admin/movies"
                      >
                        <BiMoviePlay className="h-4 w-4" />
                        All Movies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="mr-1 flex items-center gap-x-3.5 rounded-md py-2 px-2.5 text-sm text-light-900 transition-all hover:bg-light-300 focus:outline-none focus:ring-1 focus:ring-info-500"
                        href="/admin/dashboard"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                          />
                        </svg>
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <header className="sticky inset-x-0 top-0 z-[48] flex h-16 w-full flex-wrap border-b-dark-50 bg-light-100  text-sm shadow dark:border-gray-700 dark:bg-gray-800 sm:flex-nowrap sm:justify-start lg:pl-64">
        <nav
          className="mx-auto flex w-full basis-full items-center px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <button
            type="button"
            className="mr-2 text-light-900 lg:hidden"
            data-hs-overlay="#admin-sidebar"
            aria-controls="admin-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div className="mr-5 lg:mr-0 lg:hidden">
            <Link
              className="relative h-4 w-4 flex-none font-mono text-2xl font-bold text-light-900 dark:text-white"
              href="/admin/dashboard"
              aria-label="Logo"
            >
              <h1 className="w-max">Next Flix</h1>
            </Link>
          </div>

          <div className="ml-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="focus:ring-none inline-flex h-[2.375rem] w-[2.375rem] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-transparent align-middle text-xs font-medium text-dark-600 transition-all hover:bg-light-400 focus:border-none focus:bg-light-400 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                <ImSearch className="h-4 w-4" />
              </button>
            </div>

            <div className="hidden sm:block">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4 text-light-900">
                  <ImSearch className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="block w-full rounded-md border-light-500 bg-light-100 py-2 px-4 pl-11  text-sm text-black shadow-sm transition-all duration-100 focus:z-10 focus:border-info-500 focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* <div className="ml-2 flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="inline-flex h-[2.375rem] w-[2.375rem] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-white align-middle text-xs font-medium text-gray-700 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </button>
              <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="hs-dropdown-toggle inline-flex h-[2.375rem] w-[2.375rem] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-white align-middle text-xs font-medium text-gray-700 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                >
                  <img
                    className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </button>

                <div
                  className="hs-dropdown-menu duration hidden min-w-[15rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-gray-700 dark:bg-gray-800"
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="-m-2 rounded-t-lg bg-gray-100 py-3 px-5 dark:bg-gray-700">
                    <p className=" text-sm text-gray-500 dark:text-gray-400">
                      Signed in as
                    </p>
                    <p className=" text-sm font-medium text-gray-800 dark:text-gray-300">
                      james@site.com
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex items-center gap-x-3.5 rounded-md py-2 px-3  text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      <svg
                        className="flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                      </svg>
                      Newsletter
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 rounded-md py-2 px-3  text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      <svg
                        className="flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                        <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      Purchases
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 rounded-md py-2 px-3  text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      <svg
                        className="flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                      Downloads
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 rounded-md py-2 px-3  text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      <svg
                        className="flex-none"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                      </svg>
                      Team Account
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Sidebar
