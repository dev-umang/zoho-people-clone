import { Templates } from "@components/templates/templates";
import { ReporteeType } from "@modules/team/types/team.types";
import { Button, Card, Divider, Dropdown } from "antd";
import {
  Mail,
  MessageSquareText,
  PhoneCall,
  PhoneIncoming,
} from "lucide-react";
import { type FC } from "react";

type Props = {
  reportee: ReporteeType;
};

const ReporteeCard: FC<Props> = ({ reportee }) => {
  return (
    <Card size="small">
      <div className="flex justify-between">
        <Templates.EmployeeInfo
          info={reportee}
          extra={
            <span className="text-muted">
              {reportee.department} - {reportee.branch?.city || "N/A"}
            </span>
          }
        />
        <Dropdown
          menu={{
            items: [
              { key: "call", label: "Call", icon: <PhoneCall size={16} /> },
              {
                key: "message",
                label: "Message",
                icon: <MessageSquareText size={16} />,
              },
              {
                key: "email",
                label: "Email",
                icon: <Mail size={16} />,
              },
            ],
          }}
          trigger={["click"]}
        >
          <Button type="text" icon={<PhoneIncoming size={16} />}></Button>
        </Dropdown>
      </div>
      <Divider size="small" />
      <div>
        <span>{reportee.leavesBooked}</span> Day(s){" "}
        <span className="text-muted">Leave booked this year</span>
      </div>
      <div>
        <span className="text-muted">{reportee.shift} Shift</span>{" "}
        <span>({reportee.shiftTime})</span>
      </div>
    </Card>
  );
};

export default ReporteeCard;
