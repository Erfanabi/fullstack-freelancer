function Form() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-8 py-5">
      <div
        className="bg-gray-100 text-gray-500 rounded-xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="flex">
          <div className="w-full md:w-1/2 py-10 px-5 md:px-12">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>

            <div className="grid gap-y-8">
              {/* <div className="flex items-center w-full gap-x-8">
                <div className="flex flex-col w-1/2">
                  <label className="text-xs font-semibold px-1 mb-0.5">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full pr-10 pl-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-sm"
                    placeholder="Erfan"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="text-xs font-semibold px-1 mb-0.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full pr-10 pl-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-sm"
                    placeholder="Sharafi"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-xs font-semibold px-1 mb-1">Email</label>
                <input
                  type="password"
                  className="w-full pr-10 pl-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-sm"
                  placeholder="Example@gmail.com"
                />
              </div> */}

              <div className="flex flex-col w-full max-w-sm mx-auto">
                <label className="text-xs font-semibold px-1 mb-1">
                  تلفن همراه <span className="text-warning">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-sm"
                  placeholder="+98"
                />
              </div>

              <button className="block w-full max-w-sm mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold mb-5">
                ارسال کد تایید
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 bg-indigo-500 px-10 py-10">
            <div className="w-full flex items-center justify-center h-full">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 0 744.85 747.08"
              >
                <path
                  data-name="Path 1"
                  d="m71.63 629.35-6.56-25.87a335.97 335.97 0 0 0-35.64-12.8l-.83 12.03-3.36-13.25C10.22 585.17 0 583.28 0 583.28s13.8 52.49 42.75 92.62l33.74 5.92-26.2 3.78A135.93 135.93 0 0 0 62 698.03c42.12 39.09 89.02 57.02 104.77 40.06s-5.62-62.42-47.74-101.5c-13.05-12.12-29.45-21.85-45.87-29.5Z"
                  fill="#f2f2f2"
                />
                <path
                  data-name="Path 2"
                  d="m134.02 601.24 7.75-25.53a335.94 335.94 0 0 0-23.9-29.37l-6.92 9.86 3.97-13.08c-10.64-11.43-18.41-18.33-18.41-18.33s-15.32 52.07-11.28 101.38l25.82 22.51-24.4-10.3a135.92 135.92 0 0 0 3.62 16.69c15.85 55.23 46.73 94.83 68.98 88.45s27.45-56.34 11.6-111.57c-4.9-17.13-13.92-33.93-24.02-48.97Z"
                  fill="#f2f2f2"
                />
                <path
                  data-name="Path 22"
                  d="M519.75 176.98h-4.1V64.88A64.88 64.88 0 0 0 450.79 0H213.27a64.88 64.88 0 0 0-64.88 64.88v615a64.88 64.88 0 0 0 64.88 64.89h237.5a64.88 64.88 0 0 0 64.89-64.89v-423.1h4.09Z"
                  fill="#e6e6e6"
                />
                <path
                  data-name="Path 23"
                  d="M453.4 16.87h-31a23.02 23.02 0 0 1-21.32 31.72H265a23.02 23.02 0 0 1-21.31-31.72h-28.96a48.45 48.45 0 0 0-48.45 48.46v614.1a48.45 48.45 0 0 0 48.45 48.46H453.4a48.45 48.45 0 0 0 48.46-48.45V65.33a48.45 48.45 0 0 0-48.46-48.46Z"
                  fill="#fff"
                />
                <path
                  data-name="Path 6"
                  d="M303.66 261.5a24.44 24.44 0 0 1 12.23-21.17 24.45 24.45 0 1 0 0 42.34 24.43 24.43 0 0 1-12.23-21.17Z"
                  fill="#ccc"
                />
                <path
                  data-name="Path 7"
                  d="M334.4 261.5a24.44 24.44 0 0 1 12.23-21.17 24.45 24.45 0 1 0 0 42.34 24.43 24.43 0 0 1-12.24-21.17Z"
                  fill="#ccc"
                />
                <circle
                  data-name="Ellipse 1"
                  cx="364.43"
                  cy="261.5"
                  r="24.45"
                  fill="#6c63ff"
                />
                <path
                  data-name="Path 8"
                  d="M405.3 337.87H262.8a5.12 5.12 0 0 1-5.12-5.12v-142.5a5.12 5.12 0 0 1 5.12-5.11h142.5a5.12 5.12 0 0 1 5.11 5.11v142.5a5.12 5.12 0 0 1-5.11 5.12ZM262.8 187.18a3.07 3.07 0 0 0-3.07 3.07v142.5a3.07 3.07 0 0 0 3.07 3.07h142.5a3.07 3.07 0 0 0 3.07-3.07v-142.5a3.07 3.07 0 0 0-3.07-3.07Z"
                  fill="#ccc"
                />
                <path
                  data-name="Rectangle 1"
                  fill="#ccc"
                  d="M218.56 447.1h218.55v2.05H218.56z"
                />
                <circle
                  data-name="Ellipse 2"
                  cx="225.46"
                  cy="427.42"
                  r="6.9"
                  fill="#6c63ff"
                />
                <path
                  data-name="Rectangle 2"
                  fill="#ccc"
                  d="M218.56 516.12h218.55v2.05H218.56z"
                />
                <circle
                  data-name="Ellipse 3"
                  cx="225.46"
                  cy="496.44"
                  r="6.9"
                  fill="#6c63ff"
                />
                <path
                  d="M433.11 594.71h-69.06a4.5 4.5 0 0 1-4.5-4.5v-24.2a4.5 4.5 0 0 1 4.5-4.5h69.06a4.5 4.5 0 0 1 4.5 4.5v24.2a4.5 4.5 0 0 1-4.5 4.5Z"
                  fill="#6c63ff"
                />
                <circle
                  data-name="Ellipse 7"
                  cx="247.98"
                  cy="427.42"
                  r="6.9"
                  fill="#6c63ff"
                />
                <circle
                  data-name="Ellipse 8"
                  cx="270.49"
                  cy="427.42"
                  r="6.9"
                  fill="#6c63ff"
                />
                <circle
                  data-name="Ellipse 9"
                  cx="247.98"
                  cy="496.44"
                  r="6.9"
                  fill="#6c63ff"
                />
                <circle
                  data-name="Ellipse 10"
                  cx="270.49"
                  cy="496.44"
                  r="6.9"
                  fill="#6c63ff"
                />
                <path
                  data-name="Path 88"
                  d="M742.07 747.08H24.08c-1.54 0-2.78-.55-2.78-1.22s1.24-1.22 2.78-1.22h717.99c1.53 0 2.78.55 2.78 1.22s-1.25 1.22-2.78 1.22Z"
                  fill="#3f3d56"
                />
                <path
                  d="M564.68 489.46a10.1 10.1 0 0 1 1.4.79l44.86-19.14 1.6-11.82 17.92-.1-1.06 27.09-59.2 15.65a10.6 10.6 0 0 1-.44 1.21 10.23 10.23 0 1 1-5.08-13.68ZM636.98 735.02h-12.26l-5.83-47.29h18.09v47.29z"
                  fill="#ffb8b8"
                />
                <path
                  d="M615.96 731.52h23.65v14.88h-38.53a14.89 14.89 0 0 1 14.88-14.88Z"
                  fill="#2f2e41"
                />
                <path
                  fill="#ffb8b8"
                  d="m684.66 731.56-12.2 1.2-10.44-46.49 18.01-1.77 4.63 47.06z"
                />
                <path
                  d="m663.4 730.13 23.53-2.32 1.46 14.82-38.34 3.78a14.89 14.89 0 0 1 13.35-16.28Z"
                  fill="#2f2e41"
                />
                <circle cx="640.39" cy="384.57" r="24.56" fill="#ffb8b8" />
                <path
                  d="M621.98 725.46a4.47 4.47 0 0 1-4.41-3.7c-6.35-35.22-27.1-150.4-27.59-153.6a1.43 1.43 0 0 1-.01-.22v-8.58a1.49 1.49 0 0 1 .28-.88l2.74-3.83a1.48 1.48 0 0 1 1.14-.63c15.62-.73 66.78-2.88 69.25.2 2.49 3.11 1.61 12.52 1.4 14.37l.02.2 22.98 146.99a4.51 4.51 0 0 1-3.71 5.13l-14.36 2.37a4.52 4.52 0 0 1-5.02-3.1c-4.44-14.18-19.33-61.91-24.5-80.38a.5.5 0 0 0-.97.14c.26 17.6.88 62.52 1.1 78.03l.02 1.68a4.52 4.52 0 0 1-4.1 4.53l-13.84 1.26-.42.02Z"
                  fill="#2f2e41"
                />
                <path
                  data-name="Path 99"
                  d="M624.8 418.8c-4.28 2.54-6.85 7.22-8.32 11.99a113.68 113.68 0 0 0-4.88 27.16l-1.56 27.6-19.25 73.17c16.69 14.12 26.31 10.9 48.78-.64s25.03 3.85 25.03 3.85l4.5-62.26 6.41-68.03a30.16 30.16 0 0 0-4.86-4.68 49.66 49.66 0 0 0-42.44-9Z"
                  fill="#fff"
                />
                <path
                  d="M618.55 504.24a10.53 10.53 0 0 1 1.5.7l44.35-22.2.74-12.02 18.29-1.26.98 27.41-59.27 19.6a10.5 10.5 0 1 1-6.59-12.23Z"
                  fill="#ffb8b8"
                />
                <path
                  data-name="Path 101"
                  d="M675.19 431.95c10.91 3.85 12.83 45.57 12.83 45.57-12.83-7.06-28.24 4.5-28.24 4.5s-3.2-10.91-7.06-25.04a24.53 24.53 0 0 1 5.14-23.1s6.42-5.78 17.33-1.93Z"
                  fill="#fff"
                />
                <path
                  data-name="Path 102"
                  d="M662.42 391.07c-3.06-2.45-7.24 2-7.24 2l-2.45-22.03s-15.3 1.83-25.1-.61-11.31 8.87-11.31 8.87a78.58 78.58 0 0 1-.31-13.77c.61-5.5 8.57-11.02 22.64-14.69s21.43 12.24 21.43 12.24c9.79 4.9 5.4 30.44 2.34 27.99Z"
                  fill="#2f2e41"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
