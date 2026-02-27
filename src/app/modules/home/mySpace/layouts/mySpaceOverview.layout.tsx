import { Card, Tabs } from "antd";
import { type FC } from "react";
import { Outlet } from "react-router-dom";
import OverviewProfileHeader from "../components/headers/overviewProfile.header";
import OverviewHeader from "../components/headers/overview.header";
import { TABS } from "@common/constants/tabs.constants";

const MySpaceOverviewLayout: FC = () => {
  return (
    <div>
      <OverviewHeader />
      <div className="relative min-h-96 -top-8 px-13 grid grid-cols-[280px_1fr] gap-default">
        <OverviewProfileHeader />
        <div>
          <Card styles={{ body: { padding: '0px 16px' } }}>
            <Tabs items={TABS.mySpaceOverview} />
          </Card>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MySpaceOverviewLayout;
