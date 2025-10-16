/**
 * Header Component
 * Displays the application logo and action buttons (upload, language, theme, help, notifications)
 */

import { Moon, Sun, Languages, HelpCircle, Bell, Upload } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { toggleTheme } from "../store/themeSlice";
import { setLanguage } from "../store/languageSlice";

import type { RootState } from "../store";
import type { Language } from "../types";
import { useState } from "react";

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const currentLanguage = useSelector(
    (state: RootState) => state.language.current
  );
  const selectedModule = useSelector(
    (state: RootState) => state.selectedModule.current
  );
  const [showLangMenu, setShowLangMenu] = useState(false);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageChange = (lang: Language) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
    setShowLangMenu(false);
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 grid grid-cols-3 items-center sticky top-0 z-50 transition-colors duration-200">
      {/* Left section */}
      <h3 className="text-gray-800 dark:text-gray-200 text-sm font-medium justify-self-start">
        {t(`${selectedModule}`)}
      </h3>

      {/* Center section */}
      <div className="flex items-center justify-center">
        <div className="text-2xl font-bold text-center">
          <span className="text-gray-800 dark:text-white">STE</span>
          <span className="text-emerald-500">A</span>
          <span className="text-gray-800 dark:text-white">LTH</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center justify-end gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
          title="Upload"
        >
          <Upload size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-gray-400 dark:bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors"
          title="Settings"
        >
          <span className="text-white text-sm font-bold">$</span>
        </motion.button>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Change Language"
          >
            <Languages size={20} className="text-gray-600 dark:text-gray-300" />
          </motion.button>

          {showLangMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 min-w-[100px]"
            >
              <button
                onClick={() => handleLanguageChange("en")}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  currentLanguage === "en" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange("es")}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  currentLanguage === "es" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                Español
              </button>
              <button
                onClick={() => handleLanguageChange("fr")}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  currentLanguage === "fr" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
              >
                Français
              </button>
            </motion.div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleThemeToggle}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          title="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon size={20} className="text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun size={20} className="text-gray-600 dark:text-gray-300" />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
          title="User Profile"
        >
          <span className="text-white text-sm font-bold">S</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          title="Help"
        >
          <HelpCircle size={20} className="text-gray-600 dark:text-gray-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
          title="Notifications"
        >
          <Bell size={20} className="text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            4
          </span>
        </motion.button>
      </div>
    </header>
  );
};
