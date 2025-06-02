import { IoLogOut } from "react-icons/io5";
import ThemeSwitch from "../../../components/theme-switch";

interface NavbarProps {
  handleLogout: () => void;
}

const Navbar = ({ handleLogout }: NavbarProps) => {
  return (
    <nav className="flex justify-end items-center w-full gap-3 px-6 py-3 border-b border-blue-100 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
      <ThemeSwitch />
      <button
        onClick={handleLogout}
        className="ml-2 text-blue-600 dark:text-blue-200 hover:text-red-500 transition-colors p-2 rounded cursor-pointer"
        title="Logout"
      >
        <IoLogOut size={22} />
      </button>
    </nav>
  );
};
export default Navbar;
