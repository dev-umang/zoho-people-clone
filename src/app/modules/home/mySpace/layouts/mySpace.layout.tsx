import { TABS } from "@common/constants/tabs.constants";
import { Card, Tabs } from "antd";
import { type FC } from "react";
import { Outlet } from "react-router-dom";

const MySpaceLayout: FC = () => {
  return (
    <div>
      <Card styles={{ body: { padding: 0 } }}>
        <Tabs
          classNames={{ item: "p-0! font-semibold" }}
          items={TABS.mySpace}
        />
      </Card>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MySpaceLayout;
