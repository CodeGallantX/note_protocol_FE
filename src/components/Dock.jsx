import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { HiOutlineHome, HiOutlinePencilSquare, HiOutlinePower } from "react-icons/hi2";

const DockDemo = () => {
  return (
    <div className="relative max-w-lg h-20 overflow-hidden bg-gray-50">
      <div className="absolute bottom-0 left-0 right-0 w-full py-4 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-t-xl">
        <div className="flex justify-around text-black">
          <DockIcon icon={<HiOutlineHome />} tooltip="Home" />
          <DockIcon icon={<HiOutlinePencilSquare />} tooltip="Edit" />
          <DockIcon icon={<PiPaperPlaneTilt />} tooltip="LinkedIn" />
          <DockIcon icon={<HiOutlinePower />} tooltip="GitHub" />
        </div>
      </div>
    </div>
  );
};

const DockIcon = ({ icon, tooltip }) => {
  return (
    <div className="relative group">
      {/* Tooltip */}
      <Tooltip content={tooltip} className="absolute bottom-full mb-2 w-max p-2 text-sm bg-gray-800 text-white rounded">
        <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 text-black rounded-full cursor-pointer group-hover:scale-125 transition-transform hover:bg-opacity-30">
          {icon} {/* Use icon component directly here */}
        </div>
      </Tooltip>
    </div>
  );
};

export default DockDemo;
