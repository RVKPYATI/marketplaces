import { ButtonPrimary } from "../ui/ButtonPrimary/ButtonPrimary";
import { InputCheckLabel } from "../ui/InputCheckLabel/InputCheckLabel";
import { InputCheckbox } from "../ui/InputCheckbox/InputCheckbox";
import { InputText } from "../ui/InputText/InputText";
import { yandexBold } from "@/app/fonts";

export const WeeksDay = () => {
  const dayWeek = [
    { id: 1, label: "Понедельник" },
    { id: 2, label: "Вторник" },
    { id: 3, label: "Среда" },
    { id: 4, label: "Четверг" },
    { id: 5, label: "Пятница" },
    { id: 6, label: "Суббота" },
    { id: 7, label: "Воскресенье" },
  ];
  return (
    <>
      <div className="flex gap-1 mt-12 mb-4">
        <table className="table-fixed text-[12px] md:text-[15px] text-[#808080]">
          <thead>
            <tr>
              <th>
                <div className="p-2 border-b text-left">День недели</div>
              </th>
              <th>
                <div className="p-2 border-b w-[150px]">Время</div>
              </th>
              <th>
                <div className="p-2 border-b w-[101px]">Демпинг</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dayWeek.map((day) => (
              <tr key={day.id} className="p-2 border-b hover:bg-gray-50">
                <th>
                  <div
                    className={`${yandexBold.className} w-14 md:w-56 p-2 text-left text-[#212529]`}
                  >
                    {day.label}
                  </div>
                </th>
                <th align="center">
                  <div className="w-14 md:w-24 p-1">
                    <InputText style="bg-white border-none focus:border-none hover:bg-white" />
                  </div>
                </th>
                <th align="center">
                  <div className="w-14 md:w-24 p-2 ">
                    <div className="">
                      <InputCheckbox />
                    </div>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-10 p-2">
          <InputCheckLabel />
        </div>
      </div>
      <div className="pb-4">
        <ButtonPrimary style="md:font-medium w-[104px]">
          Сохранить
        </ButtonPrimary>
      </div>
    </>
  );
};
