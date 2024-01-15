export const ButtonPrimary = ({ children, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium md:font-semibold rounded text-sm md:text-base px-3 py-2 me-2  dark:focus:ring-yellow-900 ${style}`}
    >
      {children}
    </button>
  );
};
