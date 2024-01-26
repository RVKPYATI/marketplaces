"use client";

import { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Image from "next/image";

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
    <div className="relative lg:hidden bg-[#2B2B2B] shadow-xl h-12">
      <button
        className="text-white focus:outline-none w-8"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <svg
            className="w-7 h-7 ml-3 mt-2 "
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
        ) : (
          <div className="w-10 ml-4 mt-4">
            {/* <Image
              src="/close.svg"
              width={24}
              height={24}
              alt="close"
              className=""
            /> */}
            <svg
              fill="#FFFFFF"
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <polygon
                    points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256 		"
                  />
                </g>
              </g>
            </svg>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="fixed top-12 mr-2 w-screen z-10">
          <div className="bg-[#2B2B2B] p-2 h-screen text-center">
            {/* Здесь вы можете добавить свои пункты меню */}
            <div className="flex justify-center">
              <Image
                src="/main_logo.jpg"
                className="rounded-full"
                width={64}
                height={64}
                alt="logo"
              />
            </div>
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
                      } p-4 text-[#a0a0a0] text-base font-semibold hover:bg-[#30323B] rounded-md  flex justify-between`}
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
        <div className="fixed top-0 w-screen right-0 z-10">
          <div className="bg-white px-2 pb-6 text-center h-screen">
            {/* Здесь вы можете добавить свои пункты меню */}
            <div className="text-white text-left pt-7 ">
              <button
                onClick={() => setItsOpenDropdown(false)}
                className="text-white w-6"
              >
                <svg
                  fill="#000000"
                  height="24px"
                  width="24px"
                  viewBox="0 0 404.258 404.258"
                >
                  <polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 " />
                </svg>
              </button>
            </div>
            <ul>
              {dropLikns.map((link) => (
                <li key={link.id} className="text-left m-4">
                  <Link
                    href={link.path}
                    className="text-black font-semibold"
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
