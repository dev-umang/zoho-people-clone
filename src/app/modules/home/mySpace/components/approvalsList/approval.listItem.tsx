import { LeaveType } from "@modules/leaveTracker/types/leaves.types";
import { Avatar, Button, Card, Checkbox } from "antd";
import { FC, useState } from "react";
import ConfirmApprovalModal from "../modals/confirmApproval.modal";
import { useURLParams } from "@common/hooks/useURLParams";

type Props = {
  item: LeaveType;
  selected?: boolean;
  onSelectChange?: (selected: boolean, item: LeaveType) => void;
};

const ApprovalListItem: FC<Props> = ({ item, ...p }) => {
  const [modalType, setModalType] = useState<"approve" | "reject" | false>(
    false,
  );
  const { setParam } = useURLParams();
  return (
    <Card
      // onClick={() => setParam("employeeId", item.employeeId)}
      hoverable
      className="mb-default! group/card"
      size="small"
    >
      <div className="grid grid-cols-[1fr_120px_25%] gap-default">
        <div
          className="flex w-full gap-default items-center group/info"
          onClick={() => setParam("employeeId", item.employeeId)}
        >
          <div className="px-default">
            {p.selected !== undefined && (
              <Checkbox
                checked={p.selected}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  e.stopPropagation();
                  p.onSelectChange?.(e.target.checked, item);
                }}
              />
            )}
          </div>

          <div className="flex gap-default items-center">
            <Avatar shape="square" src={item?.photoURL} />
            <div>
              <div className="group-hover/info:text-active">
                <span className="text-muted ">{item?.employeeId}</span>
                <span> - {item?.name || "N/A"}</span>
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
        <div className="space-x-default self-end opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 text-right">
          <Button type="primary" onClick={() => setModalType("approve")}>
            Approve
          </Button>
          <Button type="dashed" danger onClick={() => setModalType("reject")}>
            Reject
          </Button>
        </div>
      </div>
      <ConfirmApprovalModal
        open={modalType !== false}
        onClose={() => setModalType(false)}
        modalType={modalType === "approve" ? "approve" : "reject"}
      />
    </Card>
  );
};

export default ApprovalListItem;
