"use client";

import { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navlinks = [
  { id: 1, name: "Wildberries", path: "/wildberries" },
  { id: 2, name: "Ozon", path: "/ozon" },
  {
    id: 3,
    name: "Yandex",
    path: "/yandex",
    multilinks: true,
  },
  { id: 4, name: "Sber", path: "/sber", multilinks: true },
  { id: 5, name: "Aliexpress", path: "/aliexpress" },
];

const linksYandex = [
  { id: 1, name: "IDEVY", path: "/yandex/idevy" },
  { id: 2, name: "Hobot", path: "/yandex/hobot" },
  { id: 3, name: "Hobot Express", path: "/yandex/hobot-express" },
];

const linksSber = [
  { id: 1, name: "Genio FBY", path: "/sber/genio-fby" },
  { id: 2, name: "Genio FBS", path: "/sber/genio-fbs" },
  { id: 3, name: "Hobot FBY", path: "/sber/hobot-fby" },
  { id: 4, name: "Hobot FBS", path: "/sber/hobot-fbs" },
];

export const MobileMenu = () => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setItsOpenDropdown] = useState(false);
  const [dropLikns, setDropLinks] = useState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setItsOpenDropdown(false);
  };
  const toggleMenuDropdown = (e, link) => {
    const text = e.target.textContent;
    if (link.multilinks) {
      if (text === "Yandex") setDropLinks(linksYandex);
      if (text === "Sber") setDropLinks(linksSber);
      e.preventDefault();
      setItsOpenDropdown(true);
    } else {
      setItsOpenDropdown(false);
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative lg:hidden bg-[#2B2B2B] shadow-xl">
      <button className="text-white focus:outline-none" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed top-6 mr-2 w-screen z-10">
          <div className="bg-[#2B2B2B] p-2 h-screen text-center">
            {/* Здесь вы можете добавить свои пункты меню */}
            <ul>
              {navlinks &&
                navlinks.map((link) => (
                  <Link key={link.id} href={link.path}>
                    <li
                      onClick={(e) => toggleMenuDropdown(e, link)}
                      key={link.id}
                      className={`${
                        pathName.startsWith(link.path)
                          ? "text-orange-300"
                          : "text-white"
                      } p-4 text-[#a0a0a0] text-base font-semibold hover:bg-orange-300 rounded-md hover:text-[#2B2B2B] flex justify-between`}
                    >
                      {link.name}
                      {link.multilinks && (
                        <svg
                          fill="#FFFFFF"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                        </svg>
                      )}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      )}
      {isOpenDropdown && (
        <div className="fixed top-6 w-screen right-0 z-10">
          <div className="bg-[#6d6c6c] px-2 pb-6 text-center rounded h-screen">
            {/* Здесь вы можете добавить свои пункты меню */}
            <div className="text-white text-right ">
              <button
                onClick={() => setItsOpenDropdown(false)}
                className="text-white w-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="white"
                    d="M256 73.82A182.18 182.18 0 1 0 438.18 256 182.18 182.18 0 0 0 256 73.82zm90.615 272.724a24.554 24.554 0 0 1-34.712 0l-54.664-54.667-57.142 57.146a24.544 24.544 0 0 1-34.704-34.717l57.138-57.128-53.2-53.209a24.547 24.547 0 0 1 34.712-34.717l53.196 53.208 50.717-50.72a24.547 24.547 0 0 1 34.713 34.716l-50.713 50.722 54.659 54.65a24.56 24.56 0 0 1 0 34.717z"
                    data-name="Close"
                  />
                </svg>
              </button>
            </div>
            <ul>
              {dropLikns.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className="text-white"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
