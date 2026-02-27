import { LeaveType } from "@modules/leaveTracker/types/leaves.types";
import { Avatar, Button, Card } from "antd";
import { FC } from "react";

type Props = {
  item: LeaveType;
};

const ApprovalListItem: FC<Props> = ({ item }) => {
  return (
    <Card hoverable className="mt-default! group" size="small">
      <div className="flex items-center justify-between">
        <div className="flex inline-[50%] gap-default items-center">
          <div></div>
          <div className="flex gap-default items-center">
            <Avatar shape="square" src={item.photoURL} />
            <div>
              <div>
                <span className="text-muted">{item.employeeId}</span>
                <span> - {item.name}</span>
              </div>
              <div>
                <span className="text-muted">has made a request for </span>
                <span>{item.type}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="text-muted font-semibold text-xs">Raised On</label>
          <div>{item.raisedOn}</div>
        </div>
        <div className="space-x-default self-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button type="primary">Approve</Button>
          <Button type="dashed" danger>
            Reject
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ApprovalListItem;
