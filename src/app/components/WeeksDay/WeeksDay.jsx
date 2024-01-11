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
                <div className="p-2 border-b">Время</div>
              </th>
              <th>
                <div className="p-2 border-b">Демпинг</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {dayWeek.map((day) => (
              <tr key={day.id} className="p-2  border-b ">
                <th>
                  <div className="w-14 md:w-56 p-2 text-left text-[#212529]">
                    {day.label}
                  </div>
                </th>
                <th>
                  <div className="w-14 md:w-24 p-1 ">
                    <input
                      type="text"
                      className="w-12 md:w-24 text-center text-[#212529] p-0 rounded-md bg-gray-200 h-9 border-none focus:ring-gray-400"
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
                        className="w-4 h-4 text-orange-400  bg-white border-gray-300 border-2 rounded focus:ring-gray-300 focus:ring-2 cursor-pointer"
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
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-400"></div>
          </label>
        </div>
      </div>
      <div>
        <ButtonPrimary>Сохранить</ButtonPrimary>
      </div>
    </>
  );
};
