"use client";

import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/app/services/authContext";
import { refreshToken, login } from "@/app/services/authService";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const { accessToken, setAccessToken, refreshToken, setRefreshToken } =
    useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { access, refresh } = await login(
        formData.username,
        formData.password
      );
      Cookies.set("accessToken", access, { expires: 1 });
      setAccessToken(access);
      setRefreshToken(refresh);
      router.push("/wildberries");
    } catch (error) {
      setError(true);
      console.error("Login failed", error);
    }
  };

  const handleRefreshToken = async () => {
    try {
      const { access } = await refreshToken(refreshToken);
      setAccessToken(access);
    } catch (error) {
      console.error("Token refresh failed", error);
    }
  };

  return (
    <section className="bg-custom h-screen">
      <div className="flex flex-col items-center justify-end px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full h-[94%] bg-white rounded-2xl shadow md:mt-0 sm:max-w-md xl:p-0 pt-7 mb-[1%]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <div className="flex justify-center pb-8">
              <Image src="/main_logo.jpg" width={64} height={64} alt="logo" />
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <input
                  value={formData.username}
                  onChange={handleInputChange}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-white mb-10 border border-gray-300 text-gray-900 text-sm md:text-4xl rounded-lg focus:ring-[#F9CD46] focus:border-[#F9CD46] block w-full px-3 py-3 placeholder:text-2xl placeholder:text-gray-300"
                  placeholder="Логин"
                  required
                />
              </div>
              <div>
                <input
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  className="bg-white border border-gray-300 text-gray-900 text-sm md:text-4xl rounded-lg focus:ring-[#F9CD46] focus:border-[#F9CD46] block w-full px-3 py-3 placeholder:text-2xl placeholder:text-gray-300"
                  required
                />
              </div>

              <div className="pt-9">
                <div className="text-red-500 text-center">
                  {error ? "Не верные данные авторизации" : ""}
                </div>
                <button
                  type="submit"
                  className="w-full text-black font-bold bg-[#ffcc09] hover:bg-[#F2C017] rounded-lg px-5 py-2.5 text-center "
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
};
