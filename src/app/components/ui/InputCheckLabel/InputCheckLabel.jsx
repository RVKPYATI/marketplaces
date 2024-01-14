export const InputCheckLabel = ({ defaultValue = 0 }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        defaultValue={defaultValue}
        className="sr-only peer"
      />
      <div className="w-[30px] h-[20px] bg-white border border-[#bfbfbf] peer-focus:outline-none  peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-[80%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-[#bfbfbf]  after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all  peer-checked:bg-[#FFB400] peer-checked:opacity-70  peer-checked:after:bg-white peer-checked:border-orange-400 "></div>
    </label>
  );
};
