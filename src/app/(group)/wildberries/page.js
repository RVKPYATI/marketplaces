"use client";
import { MainBlock } from "@/app/components/MainBlock/MainBlock";
import { productWildberries } from "@/app/services/getWildberries";
import withAuth from "@/app/services/withAuth";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Head from "next/head";

const headers = [
  { id: 1, label: "Наименование товара" },
  { id: 2, label: "FBS" },
  { id: 3, label: "FBY" },
  { id: 4, label: "РРЦ" },
  { id: 5, label: "Демпинг" },
  { id: 6, label: "Новая цена" },
];

const products = [
  {
    id: 1,
    label: "HOBOT 388 Ultrasonic робот мойщик окон)",
    img: "/prod.webp",
  },
  { id: 2, label: "Робот мойщик окон 188", img: "/prod.webp" },
  { id: 3, label: "Робот пылесос Leege D7", img: "/prod.webp" },
  { id: 4, label: "Робот мойщик окон 365", img: "/prod.webp" },
  { id: 5, label: "Робот мойщик окон 291 Ultrasonic", img: "/prod.webp" },
];

// export const metadata = {
//   title: "Wildberries",
// };

//const productsWild = await productWildberries();

function Wildberries() {
  const [products, setProducts] = useState();
  const [title, setTitle] = useState("Wildberries");

  useEffect(() => {
    const token = Cookies.get("accessToken");
    const getResults = async () => {
      const productsWild = await productWildberries(token);

      setProducts(productsWild.results);
    };

    getResults();
    document.title = title;
  }, []);

  return products ? (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <MainBlock headers={headers} products={products} title="Wildberries" />
    </>
  ) : (
    "Загрузка..."
  );
}
export default withAuth(Wildberries);
