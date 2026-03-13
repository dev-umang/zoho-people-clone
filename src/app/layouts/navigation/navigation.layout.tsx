import { TABS } from "@common/constants/tabs.constants";
import { Card, Tabs } from "antd";
import { type FC } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  menuKey: keyof typeof TABS;
};

const NavigationLayout: FC<Props> = ({ menuKey }) => {
  return (
    <div>
      <Card
        style={{
          borderRadius: 0,
          borderLeft: "none",
          borderTop: "none",
          borderRight: "none",
          position: "sticky",
          top: 43,
          zIndex: 12,
        }}
        styles={{ body: { padding: 0 } }}
      >
        <Tabs
          classNames={{ item: "p-0! font-semibold" }}
          items={TABS[menuKey]}
        />
      </Card>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationLayout;
