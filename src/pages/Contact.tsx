

function Contact() {
  return (
    <>
      <div
        id="contact-us"
        className="overflow-hidden  py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="relative mx-auto max-w-xl">
          <svg
            className="absolute left-full translate-x-1/2 transform"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 dark:text-slate-600"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            ></rect>
          </svg>
          <svg
            className="absolute right-full bottom-0 -translate-x-1/2 transform"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 dark:text-slate-800"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            ></rect>
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
              Please use the form below to contact us. Thank you!
            </p>
          </div>
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-400"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-dark-gray focus:ring-dark-gray dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-400"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-dark-gray focus:ring-dark-gray"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-slate-400"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-dark-gray focus:ring-dark-gray dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end sm:col-span-2">
                <button
                  type="button"
                  className="inline-flex text-gray-600 items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-dark-gray shadow-sm sm:text-sm transition-colors duration-75  border border-dark-gray hover:bg-dark-gray active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
