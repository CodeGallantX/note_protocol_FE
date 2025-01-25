import { Tooltip } from "react-tooltip";
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

export default DockIcon