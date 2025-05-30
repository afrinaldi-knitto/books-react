import { motion } from "motion/react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from "../hooks/use-theme";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center p-1 rounded-full bg-blue-100 dark:bg-gray-700 transition"
      aria-label="Switch theme"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-6 h-6 flex items-center justify-center"
      >
        {theme === "light" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -60, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 60, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IoSunny size={22} className="text-yellow-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 60, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -60, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IoMoon size={22} className="text-yellow-100" />
          </motion.span>
        )}
      </motion.div>
    </button>
  );
};

export default ThemeSwitch;
