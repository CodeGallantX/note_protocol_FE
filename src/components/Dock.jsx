import { HiOutlineHome, HiOutlinePencilSquare, HiOutlinePower } from "react-icons/hi2";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const DockFooter = () => {
  return (
    <footer className="fixed bottom-10 left-0 right-0 flex justify-center">
      <nav className="flex items-center justify-between gap-6 bg-gray-50/50 border border-black/50 backdrop-blur-md rounded-2xl p-3 md:w-full md:max-w-xs px-6">
        <NavLink
          to="/inbox"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-black ${
              isActive ? "text-black" : "text-black"
            }`
          }
        >
          <motion.div
            whileHover={{ y: -10, rotate: 5 }}
            whileTap={{ y: 5, rotate: -5 }}
            className="group flex flex-col items-center"
          >
            <HiOutlineHome size={22} />
            <span className="absolute bottom-12 px-2 py-1 text-xs text-white bg-gray-700/80 rounded opacity-0 transition-opacity group-hover:opacity-100">
              Inbox
            </span>
          </motion.div>
        </NavLink>
          <span className="h-5 w-[1px] bg-black"></span>
        <NavLink
          to="/inbox/write"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-black ${
              isActive ? "text-black" : "text-black"
            }`
          }
        >
          <motion.div
            whileHover={{ y: -10, rotate: 5 }}
            whileTap={{ y: 5, rotate: -5 }}
            className="group flex flex-col items-center"
          >
            <HiOutlinePencilSquare size={22} />
            <span className="absolute bottom-12 px-2 py-1 text-xs text-white bg-gray-700/80 rounded opacity-0 transition-opacity group-hover:opacity-100">
              Write
            </span>
          </motion.div>
        </NavLink>

        <span className="h-5 w-[1px] bg-black"></span>

        <NavLink
          to="/inbox/sent"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-black ${
              isActive ? "text-black" : "text-black"
            }`
          }
        >
          <motion.div
            whileHover={{ y: -10, rotate: 5 }}
            whileTap={{ y: 5, rotate: -5 }}
            className="group flex flex-col items-center"
          >
            <PiPaperPlaneTilt size={22} />
            <span className="absolute bottom-12 px-2 py-1 text-xs text-white bg-gray-700/80 rounded opacity-0 transition-opacity group-hover:opacity-100">
              Sent
            </span>
          </motion.div>
        </NavLink>

        <span className="h-5 w-[1px] bg-black"></span>

        <NavLink
          to="/auth/login"
          className={({ isActive }) =>
            `relative flex flex-col items-center text-black ${
              isActive ? "text-black" : "text-black"
            }`
          }
        >
          <motion.div
            whileHover={{ y: -10, rotate: 5 }}
            whileTap={{ y: 5, rotate: -5 }}
            className="group flex flex-col items-center"
          >
            <HiOutlinePower size={22} />
            <span className="absolute bottom-12 px-2 py-1 text-xs text-white bg-gray-700/80 rounded opacity-0 transition-opacity group-hover:opacity-100">
              Logout
            </span>
          </motion.div>
        </NavLink>
      </nav>
    </footer>
  );
};

export default DockFooter;
