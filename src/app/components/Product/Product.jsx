import Image from "next/image";

export const Product = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image src="/product.jpg" width={70} height={70} alt="product" />
      <p>Робот пылесос</p>
    </div>
  );
};
