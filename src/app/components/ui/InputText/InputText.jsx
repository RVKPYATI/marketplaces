"use client";
import { useState } from "react";
import { yandexRegular } from "@/app/fonts";

export const InputText = ({ value, defaultValue = 0, style }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    // Вызовите функцию, переданную через props, если таковая имеется,
    // чтобы родительский компонент мог реагировать на изменения.
    // if (onChange) {
    //   onChange(event);
    // }
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      className={`${style} ${yandexRegular.className} w-full text-[#000000] font-semibold text-center text-xs md:text-[15px] rounded-md bg-[#ECEDF1] hover:bg-[#DADADA] h-9 focus:ring-2 focus:ring-orange-300 focus:bg-white p-0`}
      //defaultValue={defaultValue}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
