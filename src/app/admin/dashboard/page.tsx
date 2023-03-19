/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */

"use client"

import { BiCameraMovie } from "react-icons/bi"
import { BsCollectionPlay, BsPlayBtn } from "react-icons/bs"
import { FaRegQuestionCircle } from "react-icons/fa"
import { IoTicketOutline } from "react-icons/io5"

function Dashboard() {
  return (
    <>
      {/* All Cards */}
      <div className="py-2 px-6">
        {/* Card Section */}
        <div className="py-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {/* Card Item 1 */}
            <div className="flex flex-col rounded-xl border bg-light-50/90 shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex gap-x-4 p-2 pt-3 md:p-4">
                <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-md bg-light-300 dark:bg-gray-800 md:h-[46px] md:w-[46px]">
                  <BiCameraMovie className="h-10 w-10 -rotate-12 text-light-900/80 dark:text-gray-400 md:h-8 md:w-8" />
                </div>

                <div className="grow p-2 md:p-0">
                  <div className="flex items-center gap-x-1 md:gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-light-800">
                      Total Movies
                    </p>
                    <div className="hs-tooltip inline-block [--placement:top]">
                      <div className="hs-tooltip-toggle">
                        <FaRegQuestionCircle className="h-3.5 w-3.5 text-light-700" />
                        <span
                          className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-light-900 py-1 px-2 text-xs font-medium text-light-200 opacity-0 shadow-sm transition-opacity after:left-1/2 after:-bottom-1 hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                          role="tooltip"
                        >
                          The number of movies uploaded till now.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl font-medium text-dark-600 dark:text-gray-200">
                      45,540
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item 1 */}
            {/* Card Item 2 */}
            <div className="flex flex-col rounded-xl border bg-light-50/90 shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex gap-x-4 p-2 pt-3 md:p-4">
                <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-md bg-light-300 dark:bg-gray-800 md:h-[46px] md:w-[46px]">
                  <IoTicketOutline className="h-10 w-10 text-light-900/80 dark:text-gray-400 md:h-8 md:w-8" />
                </div>

                <div className="grow p-2 md:p-0">
                  <div className="flex items-center gap-x-1 md:gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-light-800">
                      Total Shows
                    </p>
                    <div className="hs-tooltip inline-block [--placement:top]">
                      <div className="hs-tooltip-toggle">
                        <FaRegQuestionCircle className="h-3.5 w-3.5 text-light-700" />
                        <span
                          className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-light-900 py-1 px-2 text-xs font-medium text-light-200 opacity-0 shadow-sm transition-opacity after:left-1/2 after:-bottom-1 hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                          role="tooltip"
                        >
                          The number of shows completely uploaded till now.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl font-medium text-dark-600 dark:text-gray-200">
                      540
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item 2 */}
            {/* Card Item 3 */}
            <div className="flex flex-col rounded-xl border bg-light-50/90 shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex gap-x-4 p-2 pt-3 md:p-4">
                <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-md bg-light-300 dark:bg-gray-800 md:h-[46px] md:w-[46px]">
                  <BsCollectionPlay className="h-10 w-10 text-light-900/80 dark:text-gray-400 md:h-8 md:w-8" />
                </div>

                <div className="grow p-2 md:p-0">
                  <div className="flex items-center gap-x-1 md:gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-light-800">
                      Total Seasons
                    </p>
                    <div className="hs-tooltip inline-block [--placement:top]">
                      <div className="hs-tooltip-toggle">
                        <FaRegQuestionCircle className="h-3.5 w-3.5 text-light-700" />
                        <span
                          className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-light-900 py-1 px-2 text-xs font-medium text-light-200 opacity-0 shadow-sm transition-opacity after:left-1/2 after:-bottom-1 hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                          role="tooltip"
                        >
                          The number of seasons completely uploaded till now.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl font-medium text-dark-600 dark:text-gray-200">
                      7,254
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item 3 */}
            {/* Card Item 4 */}
            <div className="flex flex-col rounded-xl border bg-light-50/90 shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex gap-x-4 p-2 pt-3 md:p-4">
                <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-md bg-light-300 dark:bg-gray-800 md:h-[46px] md:w-[46px]">
                  <BsPlayBtn className="h-10 w-10 text-light-900/80 dark:text-gray-400 md:h-8 md:w-8" />
                </div>

                <div className="grow p-2 md:p-0">
                  <div className="flex items-center gap-x-1 md:gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-light-800">
                      Total Episodes
                    </p>
                    <div className="hs-tooltip inline-block [--placement:top]">
                      <div className="hs-tooltip-toggle">
                        <FaRegQuestionCircle className="h-3.5 w-3.5 text-light-700" />
                        <span
                          className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-light-900 py-1 px-2 text-xs font-medium text-light-200 opacity-0 shadow-sm transition-opacity after:left-1/2 after:-bottom-1 hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                          role="tooltip"
                        >
                          The number of episodes uploaded till now.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl font-medium text-dark-600 dark:text-gray-200">
                      89,540
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Item 4 */}
          </div>
        </div>
        {/* End Card Section */}
        {/* Card Section 2 */}
        {/* <div className="py-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex justify-between gap-x-3 p-4 md:p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Total users
                  </p>
                  <div className="mt-1 flex items-center gap-x-1">
                    <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl">
                      72,540
                    </h3>
                    <span className="flex items-center text-green-600">
                      <svg
                        className="inline-block h-7 w-7 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                        />
                      </svg>
                      <span className="inline-block text-lg">1.7%</span>
                    </span>
                  </div>
                </div>
                <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-200">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                </div>
              </div>

              <a
                className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-200 py-3 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 md:px-5"
                href="#"
              >
                View reports
                <svg
                  className="h-2.5 w-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex justify-between gap-x-3 p-4 md:p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Sessions
                  </p>
                  <div className="mt-1 flex items-center gap-x-1">
                    <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-gray-200">
                      29.4%
                    </h3>
                  </div>
                </div>
                <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-200">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                  </svg>
                </div>
              </div>

              <a
                className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-200 py-3 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 md:px-5"
                href="#"
              >
                View reports
                <svg
                  className="h-2.5 w-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex justify-between gap-x-3 p-4 md:p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Avg. Click Rate
                  </p>
                  <div className="mt-1 flex items-center gap-x-1">
                    <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 sm:text-2xl">
                      56.8%
                    </h3>
                    <span className="flex items-center text-red-600">
                      <svg
                        className="inline-block h-7 w-7 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                      <span className="inline-block text-lg">1.7%</span>
                    </span>
                  </div>
                </div>
                <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-200">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002z" />
                  </svg>
                </div>
              </div>

              <a
                className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-200 py-3 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 md:px-5"
                href="#"
              >
                View reports
                <svg
                  className="h-2.5 w-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-800 dark:bg-slate-900">
              <div className="flex justify-between gap-x-3 p-4 md:p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Pageviews
                  </p>
                  <div className="mt-1 flex items-center gap-x-1">
                    <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-gray-200">
                      92,913
                    </h3>
                  </div>
                </div>
                <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-200">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                </div>
              </div>

              <a
                className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-200 py-3 px-4 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 md:px-5"
                href="#"
              >
                View reports
                <svg
                  className="h-2.5 w-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
        {/* End Card Section 2 */}
      </div>
      {/* End All Cards */}
      <div className="py-2 px-6">
        {/* Most Popular Items Section */}
        <div className="grid grid-cols-12">
          <div className="col-span-8 flex flex-col">
            <div className="-m-1.5">
              <div className="w-full p-1.5">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-dark-600">
                  <div className="grid gap-3 border-b border-gray-200 px-6 py-4 dark:border-gray-700 md:flex md:items-center md:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Most Popular Items
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Top 20 most popular movies and shows by views
                      </p>
                    </div>

                    <div>
                      <div className="inline-flex gap-x-2">
                        <button className="btn btn-sm btn-base" type="button">
                          View top 50
                        </button>
                      </div>
                    </div>
                  </div>
                  <table className="divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="py-3 pl-6 text-left">
                          <label
                            htmlFor="hs-at-with-checkboxes-main"
                            className="flex"
                          >
                            <input
                              type="checkbox"
                              className="pointer-events-none shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-main"
                            />
                            <span className="sr-only">Checkbox</span>
                          </label>
                        </th>

                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Name
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Created by
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              API Key
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Status
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-left">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Created
                            </span>
                          </div>
                        </th>

                        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                        <th scope="col" className="px-6 py-3 text-right" />
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="py-3 pl-6">
                            <label
                              htmlFor="hs-at-with-checkboxes-2"
                              className="flex"
                            >
                              <input
                                type="checkbox"
                                className="pointer-events-none shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-at-with-checkboxes-2"
                              />
                              <span className="sr-only">Checkbox</span>
                            </label>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Node
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="inline-block h-6 w-6 rounded-full"
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                alt="Description"
                              />
                              <div className="grow">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  David Harrison
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <button
                              type="button"
                              className="inline-flex flex-shrink-0 items-center justify-center gap-x-2.5 rounded-md border bg-white py-2 px-2.5 align-middle text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                            >
                              Copy Key
                              <svg
                                className="h-3.5 w-3.5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 py-0.5 px-2 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-green-200">
                              <svg
                                className="h-2.5 w-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                              </svg>
                              Warning
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              20 Dec, 09:27
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                              <button
                                id="hs-table-dropdown-2"
                                type="button"
                                className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md py-1.5 px-2 align-middle text-sm text-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                              >
                                <svg
                                  className="h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </button>
                              <div
                                className="hs-dropdown-menu duration z-10 mt-2 hidden min-w-[10rem] divide-y divide-gray-200 rounded-lg bg-white p-2 opacity-0 shadow-2xl transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
                                aria-labelledby="hs-table-dropdown-2"
                              >
                                <div className="py-2 first:pt-0 last:pb-0">
                                  <a
                                    className="flex items-center gap-x-3 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    href="#"
                                  >
                                    Rename
                                  </a>
                                  <a
                                    className="flex items-center gap-x-3 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    href="#"
                                  >
                                    Regenrate Key
                                  </a>
                                  <a
                                    className="flex items-center gap-x-3 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    href="#"
                                  >
                                    Disable
                                  </a>
                                </div>
                                <div className="py-2 first:pt-0 last:pb-0">
                                  <a
                                    className="flex items-center gap-x-3 rounded-md py-2 px-3 text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="py-3 pl-6">
                            <label
                              htmlFor="hs-at-with-checkboxes-6"
                              className="flex"
                            >
                              <input
                                type="checkbox"
                                className="pointer-events-none shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                                id="hs-at-with-checkboxes-6"
                              />
                              <span className="sr-only">Checkbox</span>
                            </label>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Gulp
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <div className="flex items-center gap-x-2">
                              <img
                                className="inline-block h-6 w-6 rounded-full"
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                alt="Description"
                              />
                              <div className="grow">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  Brian Halligan
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <button
                              type="button"
                              className="inline-flex flex-shrink-0 items-center justify-center gap-x-2.5 rounded-md border bg-white py-2 px-2.5 align-middle text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                            >
                              Copy Key
                              <svg
                                className="h-3.5 w-3.5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 py-0.5 px-2 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                              <svg
                                className="h-2.5 w-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Successful
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              11 Dec, 18:51
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                              <button
                                id="hs-table-dropdown-6"
                                type="button"
                                className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-md py-1.5 px-2 align-middle text-sm text-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                              >
                                <svg
                                  className="h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </button>
                              <div
                                className="hs-dropdown-menu duration z-10 mt-2 hidden min-w-[10rem] divide-y divide-gray-200 rounded-lg bg-white p-2 opacity-0 shadow-2xl transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
                                aria-labelledby="hs-table-dropdown-6"
                              >
                                <div className="py-2 first:pt-0 last:pb-0">
                                  <a
                                    className="flex items-center gap-x-3 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    href="#"
                                  >
                                    Rename
                                  </a>
                                  <a
                                    className="flex items-center gap-x-3 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    href="#"
                                  >
                                    Regenrate Key
                                  </a>
                                  <a
                                    className="flex items-center gap-x-3 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    href="#"
                                  >
                                    Disable
                                  </a>
                                </div>
                                <div className="py-2 first:pt-0 last:pb-0">
                                  <a
                                    className="flex items-center gap-x-3 rounded-md py-2 px-3 text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Most Popular Items Section */}
      </div>
    </>
  )
}

export default Dashboard
