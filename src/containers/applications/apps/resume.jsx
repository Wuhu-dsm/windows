import React from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../../utils/general";

export const Resume = () => {
  const wnapp = useSelector((state) => state.apps["pdf.jpeg"]);
  if (!wnapp) return null;

  return (
    <div
      className="floatTab dpShad lightWindow"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id="resumeApp"
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name={wnapp.name}
        noinvert
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow flex-grow flex flex-col overflow-hidden">
          <object
            data="/resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ display: wnapp.hide ? "none" : "block" }}
          >
            <div className="flex items-center justify-center h-full text-sm text-gray-500">
              无法预览简历，
              <a href="/resume.pdf" target="_blank" className="text-blue-500 ml-1">
                点击此处打开
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};
