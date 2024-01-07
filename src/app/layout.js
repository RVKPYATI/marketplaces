//import { Inter } from "next/font/google";
import "./globals.css";
import { LeftMenu } from "./components/LeftMenu/LeftMenu";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { yandexRegular } from "./fonts";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yandexRegular.className}>
        <MobileMenu />
        <main className="flex gap-4 md:gap-2">
          <div className="hidden lg:block md:min-w-[260px] xl:min-w-[210px] 2xl:max-w-[320px]">
            <LeftMenu />
          </div>
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
