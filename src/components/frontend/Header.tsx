import Link from "next/link"
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri"

function Header() {
  return (
    <header className="z-50 flex w-full flex-wrap text-sm sm:flex-nowrap sm:justify-start">
      <nav
        className="relative mx-auto w-full border-b bg-white py-3 px-4 dark:border-gray-700 dark:bg-gray-800 sm:flex sm:items-center sm:justify-between sm:py-0 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="w-max font-serif text-2xl font-semibold dark:text-light-100"
            href="/"
            aria-label="Brand"
          >
            Next Flix
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle btn btn-base btn-sm !border-none !text-dark-400 !shadow-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <RiMenu3Fill className="h-4 w-4 transition-opacity hs-collapse-open:hidden" />
              <RiCloseLine className="hidden h-4 w-4 transition-opacity hs-collapse-open:block" />
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
          <div className="mt-5 flex flex-col gap-y-4 gap-x-0 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:pl-7">
            <a
              className="font-medium text-info-600 dark:text-info-500 sm:py-6"
              href="/"
              aria-current="page"
            >
              Landing
            </a>
            <a
              className="font-medium text-light-800 hover:text-light-600 dark:text-light-600 dark:hover:text-light-800 sm:py-6"
              href="/"
            >
              Account
            </a>
            <a
              className="font-medium text-light-800 hover:text-light-600 dark:text-light-600 dark:hover:text-light-800 sm:py-6"
              href="/"
            >
              Work
            </a>
            <a
              className="font-medium text-light-800 hover:text-light-600 dark:text-light-600 dark:hover:text-light-800 sm:py-6"
              href="/"
            >
              Blog
            </a>
            <button
              type="button"
              className="flex items-center font-medium text-light-800 hover:text-light-600 dark:text-light-600 dark:hover:text-light-800 "
            >
              Dropdown
              {/* <svg
                className="ml-2 h-2.5 w-2.5 text-light-900 dark:text-light-400"
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
              </svg> */}
            </button>

            <button
              className="btn btn-base btn-sm hidden flex-row gap-x-2 font-medium text-light-800 !shadow-none hover:text-info-600 dark:border-dark-600 dark:text-light-400 dark:hover:text-blue-500 sm:my-6 sm:!border-none sm:pl-6"
              type="button"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Log in
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
