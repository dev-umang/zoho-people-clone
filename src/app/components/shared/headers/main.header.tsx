import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { TABS } from "@common/constants/tabs.constants";
import { useTheme } from "@configs/theme";
import { Avatar, Badge, Button, Tabs, Tooltip } from "antd";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const MainHeader: FC = () => {
  const { toggleDarkMode } = useTheme();
  const firstSegment =
    useLocation().pathname.split("/").filter(Boolean)[0] || "";

  return (
    <div className="h-12 sticky top-0 z-50 bg-header text-white px-4 border-b border-neutral-200 dark:border-neutral-800">
      <header className="flex h-full items-center justify-between overflow-x-auto overflow-y-hidden">
        <div className="self-end">
          <Tabs
            className="header-tab"
            items={TABS[firstSegment as keyof typeof TABS]}
            styles={{ item: { padding: 0 } }}
          />
        </div>
        <div className="flex items-center">
          <Tooltip title="Search" placement="bottomLeft">
            <Button
              className="text-white!"
              shape="circle"
              type="text"
              icon={<SearchOutlined />}
            />
          </Tooltip>
          <Tooltip title="Notifications" placement="bottomLeft">
            <Button
              onClick={toggleDarkMode}
              shape="circle"
              type="text"
              icon={
                <Badge count={5} size="small" offset={[0, 0]} className="mr-2">
                  <BellOutlined className="text-white!" />
                </Badge>
              }
              className="mr-default text-white!"
            />
          </Tooltip>
          <Tooltip title="Profile" placement="bottomLeft">
            <Avatar src="https://joeschmoe.io/api/v1/random">DU</Avatar>
          </Tooltip>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
