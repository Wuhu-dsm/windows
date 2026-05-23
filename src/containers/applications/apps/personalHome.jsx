import React from "react";
import { useSelector } from "react-redux";
import customization from "../../../config/customization";
import { LazyComponent, ToolBar } from "../../../utils/general";

export const PersonalHome = () => {
  const wnapp = useSelector((state) => state.apps[customization.personalHome.icon]);
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
      id="personalHomeApp"
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name={wnapp.name}
        noinvert
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow flex-grow flex flex-col">
          <div className="flex-grow overflow-hidden">
            <LazyComponent show={!wnapp.hide}>
              <iframe
                src={customization.personalHome.url}
                title={customization.personalHome.name}
                allow="clipboard-read; clipboard-write"
                className="w-full h-full"
                frameBorder="0"
              ></iframe>
            </LazyComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
