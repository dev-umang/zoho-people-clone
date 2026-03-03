import { DATA } from "@common/data";
import { Card } from "antd";
import { type FC } from "react";

const Icons = {
  "Earned Leave": "🌴",
  "Sick Leave": "🤒",
  "Leave Without Pay": "🚫",
  "Work From Home": "🏠",
};

const MyLeaveSummaryCards: FC = () => {
  const totals = DATA.myLeaveTotals;

  return (
    <div className="flex flex-wrap gap-default">
      {totals.map((total) => (
        <Card className="min-w-50 h-50" key={total.leaveType}>
          <div className="flex flex-col gap-large items-center">
            <span className="font-semibold">{total.leaveType}</span>
            <div
              style={{ background: `${total.color}55` }}
              className={`h-12 w-12 flex rounded-xl items-center justify-center text-2xl`}
            >
              {Icons[total.leaveType]}
            </div>
            <div className="w-full mt-default">
              <div className="flex text-[16px] justify-between items-center">
                <span>Available</span>
                <span className="text-green-500 font-semibold">
                  {total.available}
                </span>
              </div>
              <div className="flex text-[16px] justify-between items-center">
                <span>Booked</span>
                <span className="font-semibold">{total.booked}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyLeaveSummaryCards;
