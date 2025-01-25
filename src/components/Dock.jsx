import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DockIcon from "./DockIcon";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { HiOutlineHome, HiOutlinePencilSquare, HiOutlinePower } from "react-icons/hi2";

const DockDemo = () => {

  const navigate = useNavigate()
  return (
    <div className="relative max-w-sm rounded-xl h-10 overflow-hidden bg-yellow-50">
      <div className="absolute bottom-0 left-0 right-0 w-full py-4 bg-yellow bg-opacity-50 backdrop-blur-md shadow-lg rounded-t-xl">
        <div className="flex justify-around text-black">
          <DockIcon icon={<HiOutlineHome />} tooltip="Home" onClick={() => navigate("/")} />
          <DockIcon icon={<HiOutlinePencilSquare />} tooltip="Write" onClick={() => navigate("/write")} />
          <DockIcon icon={<PiPaperPlaneTilt />} tooltip="Sent" onClick={() => navigate("/sent")} />
          <DockIcon icon={<HiOutlinePower />} tooltip="Logout" onClick={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
};

export default DockDemo;
