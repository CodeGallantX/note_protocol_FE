import { HomeIcon, PencilIcon, MailIcon, GitHubIcon, LinkedInIcon } from "lucide-react";
import { Tooltip } from "@headlessui/react";

const DockDemo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 w-full py-5 bg-gray-800 shadow-lg">
        <div className="flex justify-around">
          <DockIcon icon={<HomeIcon />} tooltip="Home" />
          <DockIcon icon={<PencilIcon />} tooltip="Edit" />
          <DockIcon icon={<MailIcon />} tooltip="Messages" />
          <DockIcon icon={<LinkedInIcon />} tooltip="LinkedIn" />
          <DockIcon icon={<GitHubIcon />} tooltip="GitHub" />
        </div>
      </div>
    </div>
  );
};

const DockIcon = ({ icon, tooltip }) => {
  return (
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger>
          <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-full cursor-pointer">
            {icon}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content className="bg-gray-900 text-white text-sm p-2 rounded-md">
          <p>{tooltip}</p>
        </Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  );
};

export default DockDemo;
