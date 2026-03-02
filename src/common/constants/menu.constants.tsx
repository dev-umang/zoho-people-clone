import { MenuItem } from "@common/types";
import { Path } from "@configs/routes";
import { createElement } from "react";
import * as Icons from "@ant-design/icons";

type Menus = {
  sidebar: MenuItem[];
};

type IconName = keyof typeof Icons;

const nm = (
  href: Path,
  label: string,
  icon: IconName,
  activeIcon: IconName,
): MenuItem => ({
  key: href.split("/")[1] || href, // Use the first segment of the path as the key
  href,
  label,
  icon: createElement(Icons[icon], { className: "text-xl" }),
  activeIcon: createElement(Icons[activeIcon], { className: "text-xl" }),
});

export const MENUS: Menus = {
  sidebar: [
    nm("/home/my-space/overview", "Home", "HomeOutlined", "HomeFilled"),
    nm("/leave-tracker/my-data/summary", "Leaves", "CarOutlined", "CarFilled"),
    nm("/files", "Files", "FolderOutlined", "FolderFilled"),
    nm("/travel", "Travel", "RocketOutlined", "RocketFilled"),
    nm(
      "/compensation",
      "Compensation",
      "MoneyCollectOutlined",
      "MoneyCollectFilled",
    ),
    nm("/tasks", "Tasks", "BoxPlotOutlined", "BoxPlotFilled"),
    {
      key: "more",
      label: "More",
      icon: createElement(Icons.EllipsisOutlined, { className: "text-xl" }),
      activeIcon: createElement(Icons.EllipsisOutlined, {
        className: "text-xl",
      }),
    },
  ],
};
