import { ButtonPrimary } from "../ui/ButtonPrimary/ButtonPrimary";

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
      <div className="flex gap-1 mt-12">
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
              <tr key={day.id} className="p-2  border-b ">
                <th>
                  <div className="w-14 md:w-56 p-2 text-left text-[#212529] ">
                    {day.label}
                  </div>
                </th>
                <th align="center">
                  <div className="w-14 md:w-24 p-1">
                    <input
                      type="text"
                      className="w-12 md:w-[100px] text-center text-[#212529] p-0 rounded-md bg-gray-200 h-9 border-none focus:ring-2 focus:ring-orange-300 focus:bg-white"
                      defaultValue={0}
                    />
                  </div>
                </th>
                <th>
                  <div className="w-14 md:w-24 p-2 ">
                    <div className="flex justify-center items-center mb-4">
                      <input
                        type="checkbox"
                        defaultValue={0}
                        className="w-[17px] h-[17px] text-[#F9CD46] bg-white border-[#bfbfbf] border-2 rounded-[2px] focus:ring-gray-300 focus:ring-0 cursor-pointer relative checked:after:absolute checked:after:bg-[url('/check.svg')] checked:after:top-0 checked:after:w-full checked:after:h-full"
                      />
                    </div>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-10 p-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultValue={0} className="sr-only peer" />
            <div className="w-[30px] h-[20px] bg-white border border-[#bfbfbf] peer-focus:outline-none  peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-[80%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-[#bfbfbf]  after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all  peer-checked:bg-[#FFB400] peer-checked:opacity-70  peer-checked:after:bg-white peer-checked:border-orange-400 "></div>
          </label>
        </div>
      </div>
      <div>
        <ButtonPrimary style="md:font-medium">Сохранить</ButtonPrimary>
      </div>
    </>
  );
};
