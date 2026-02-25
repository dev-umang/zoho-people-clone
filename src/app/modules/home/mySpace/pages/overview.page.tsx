import { FC } from "react";
import OverviewHeader from "../components/headers/overview.header";
import OverviewProfileHeader from "../components/headers/overviewProfile.header";
import { Card } from "antd";

const OverviewPage: FC = () => {
  return (
    <main>
      <OverviewHeader />
      <div className="relative min-h-96 -top-8 px-14 grid grid-cols-[280px_1fr] gap-default">
        <OverviewProfileHeader />
        <Card></Card>
      </div>
    </main>
  );
};

export default OverviewPage;
