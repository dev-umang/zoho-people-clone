import { type FC } from "react";
import { WorkInProgressInfo } from "@components/shared";
import { DATA } from "@common/data";
import ReporteeCard from "@components/ui/cards/reportee.card";

const ReporteesPage: FC = () => {
  return (
    <main className="p-large">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-default">
        {DATA.reportees.directReportees.map((reportee) => (
          <ReporteeCard key={reportee.employeeId} reportee={reportee} />
        ))}
      </div>
      <WorkInProgressInfo />
    </main>
  );
};

export default ReporteesPage;
