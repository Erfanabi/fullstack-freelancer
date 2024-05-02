import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModalToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className="align-bottom" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-6 h-6 text-yellow-400 sun" />
      ) : (
        <HiOutlineMoon className="w-6 h-6 text-indigo-700 moon" />
      )}
    </button>
  );
}

export default DarkModalToggle;
