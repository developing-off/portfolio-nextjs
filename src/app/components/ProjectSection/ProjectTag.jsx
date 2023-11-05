import React from "react";

const ProjectTag = ({name, onClick, isSelected}) => {
  const ButtonStyle = isSelected
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE] hover:border-white";
  return (
    <button
      className={`${ButtonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
