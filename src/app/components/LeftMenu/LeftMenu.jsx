"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

export const LeftMenu = () => {
  const [flag, setFlag] = useState(false);
  const [dropLinks, setDropLinks] = useState();
  const pathName = usePathname();

  const handleClick = (e, link) => {
    const text = e.target.textContent;
    if (link.multilinks) {
      if (text === "Yandex") setDropLinks(linksYandex);
      if (text === "Sber") setDropLinks(linksSber);
      e.preventDefault();
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  return (
    <>
      <div className="bg-[#2B2B2B] h-screen">
        <div className="px-6 relative">
          <div className="flex justify-center">
            <Image
              src="/main_logo.jpg"
              width={50}
              height={50}
              className="rounded-full mt-5"
              alt="img"
            />
          </div>
          <div className="flex flex-col mt-8 md:w-40">
            <ul>
              {navlinks &&
                navlinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.path}
                    onMouseEnter={(e) => handleClick(e, link)}
                    //onClick={(e) => handleClick(e, link)}
                  >
                    <li
                      className={`${
                        pathName.startsWith(link.path)
                          ? "text-[#F9CD46]"
                          : "text-[#a0a0a0]"
                      } p-2 text-[#a0a0a0] text-base tracking-wider font-semibold hover:bg-[#A0A0A0] rounded-md hover:text-white flex justify-between transition ease-in-out delay-50 md:w-72`}
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
          <div
            className={`absolute top-0 right-[-100%] bg-white w-full h-screen  shadow-md ${
              flag ? "block" : "hidden"
            }`}
          >
            <div className="text-white text-right ">
              <button onClick={() => setFlag(false)} className="text-white w-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="white"
                    d="M256 73.82A182.18 182.18 0 1 0 438.18 256 182.18 182.18 0 0 0 256 73.82zm90.615 272.724a24.554 24.554 0 0 1-34.712 0l-54.664-54.667-57.142 57.146a24.544 24.544 0 0 1-34.704-34.717l57.138-57.128-53.2-53.209a24.547 24.547 0 0 1 34.712-34.717l53.196 53.208 50.717-50.72a24.547 24.547 0 0 1 34.713 34.716l-50.713 50.722 54.659 54.65a24.56 24.56 0 0 1 0 34.717z"
                    data-name="Close"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center p-3">
              {dropLinks &&
                dropLinks.map((link) => (
                  <Link
                    href={link.path}
                    className="w-full"
                    onClick={() => setFlag(false)}
                  >
                    <li
                      key={link.id}
                      className="hover:bg-[#F9CD46] rounded-md p-4 text-[#212529] font-semibold hover:text-[#2B2B2B] transition ease-in-out delay-50"
                    >
                      {link.name}
                    </li>
                  </Link>
                ))}
            </ul>
            <div className="bg-gray-500 absolute left-[100%] top-0 w-[1600px] h-screen z-10 opacity-70"></div>
          </div>
        </div>
      </div>
    </>
  );
};
