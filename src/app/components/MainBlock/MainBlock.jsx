import { TableWildberris } from "../Table/TableWildberris";
import { WeeksDay } from "../WeeksDay/WeeksDay";
import { ModalWrapper } from "../ui/Modal/ModalWrapper";
import { TableOzon } from "../Table/TableOzon";
import { TableAliexpress } from "../Table/TableAliexpress";
import { yandexBold } from "@/app/fonts";

export const MainBlock = ({ headers, products, title }) => {
  return (
    <div className="px-1 md:px-6">
      <h1
        className={`text-5xl mt-2 ml-5 leading-normal ${yandexBold.className}`}
      >
        {title}
      </h1>
      <div className="flex justify-end">
        <ModalWrapper>
          <h2>Добавление продукта</h2>
          <div className="flex justify-between ">
            <div>
              <div>
                <div>Название</div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </ModalWrapper>
      </div>
      {(title === "Wildberries" || title === "IDEVY") && (
        <TableWildberris headers={headers} products={products} title={title} />
      )}
      {title === "Ozon" && (
        <TableWildberris headers={headers} products={products} title={title} />
      )}
      {title === "Aliexpress" && (
        <TableWildberris headers={headers} products={products} title={title} />
      )}

      <WeeksDay />
    </div>
  );
};
