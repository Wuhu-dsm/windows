import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToolBar } from "../../../utils/general";

export const Notepad = () => {
  const wnapp = useSelector((state) => state.apps.notepad);

  return (
    <div
      className="notepad floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name="无标题 - 记事本"
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="flex text-xs py-2 topBar">
          <div className="mx-2">文件</div>
          <div className="mx-4">编辑</div>
          <div className="mx-4">查看</div>
        </div>
        <div className="restWindow h-full flex-grow">
          <div className="w-full h-full overflow-hidden">
            <textarea
              className="noteText win11Scroll"
              id="textpad"
              defaultValue={`今日待办事项:\n1. 整理桌面文件\n2. 学习 React 新特性\n3. 备份项目代码\n\n备忘录:\n- Steam 夏季促销在 6 月底开始\n- 记得周五下午开会\n- 下周要更新个人博客\n- 买一盆绿植放在桌上\n\n随机想法:\n也许可以做一个自己的操作系统主题?\n`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
