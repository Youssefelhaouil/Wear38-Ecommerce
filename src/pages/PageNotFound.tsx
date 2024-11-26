import { Link } from "react-router-dom";

interface IProps {}

function PageNotFound({}: IProps) {
  return (
    <>
      <div className="min-h-screen  flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="mb-8">
            <h2 className="mt-6 text-6xl font-extrabold text-red-700 dark:text-gray-100">
              404
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Page not found
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sorry, we couldn't find this person you're looking for.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to={"/"}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#242323] hover:bg-[#707070] "
            >
              <svg
                className="mr-2 -ml-1 h-5 w-5 rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12h18m-9-9l9 9-9 9"
                />
              </svg>
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
