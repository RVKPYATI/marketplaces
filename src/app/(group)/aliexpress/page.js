import { MainBlock } from "@/app/components/MainBlock/MainBlock";

const headers = [
  { id: 1, label: "Наименование товара" },
  { id: 2, label: "Остаток" },
  { id: 3, label: "РРЦ" },
  { id: 4, label: "Демпинг" },
  { id: 5, label: "Новая цена" },
];

const products = [
  { id: 1, label: "Робот пылесос Leege 7", img: "/product.jpg" },
  { id: 2, label: "Робот мойщик окон 188", img: "/product.jpg" },
  { id: 3, label: "Робот пылесос Leege D7", img: "/product.jpg" },
  { id: 4, label: "Робот мойщик окон 365", img: "/product.jpg" },
  { id: 5, label: "Робот мойщик окон 291 Ultrasonic", img: "/product.jpg" },
];

export default function Aliexpress() {
  return <MainBlock headers={headers} products={products} title="Aliexpress" />;
}
