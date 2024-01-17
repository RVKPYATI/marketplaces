import Image from "next/image";

export default function Login() {
  return (
    <section className="bg-gray-50 bg-[url(/bg-login.jpg)] h-screen">
      <div className="flex flex-col items-center justify-end px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="w-full h-screen bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center pb-8">
              <Image src="/main_logo.jpg" width={64} height={64} alt="logo" />
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#F9CD46] focus:border-[#F9CD46] block w-full p-3 placeholder:text-2xl placeholder:text-gray-400"
                  placeholder="Логин"
                  required=""
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#F9CD46] focus:border-[#F9CD46] block w-full p-3 placeholder:text-2xl placeholder:text-gray-400"
                  required=""
                />
              </div>

              <div className="pt-9">
                <button
                  type="submit"
                  className="w-full text-black font-semibold bg-[#ffcc09] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg px-5 py-2.5 text-center "
                >
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
