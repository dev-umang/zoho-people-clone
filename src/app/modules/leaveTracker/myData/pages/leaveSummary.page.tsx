import { DATA } from "@common/data";
import { type FC } from "react";
import MyLeaveSummaryCards from "../components/myLeaveSummaryCards/myLeaveSummary.cards";

const LeaveSummaryPage: FC = () => {
  console.log(DATA.myLeaveTotals);

  return (
    <div className="p-large">
      <MyLeaveSummaryCards />
    </div>
  );
};

export default LeaveSummaryPage;
