import { LeaveType } from "@modules/leaveTracker/types/leaves.types";
import { Button, Card, Checkbox } from "antd";
import { FC, useState } from "react";
import ConfirmApprovalModal from "../modals/confirmApproval.modal";
import { Templates } from "@components/templates/templates";
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
      onClick={() => setParam("employeeId", item.employeeId)}
      hoverable
      className="mb-default! group"
      size="small"
    >
      <div className="flex items-center justify-between">
        <div className="flex inline-[50%] gap-default items-center">
          <div className="px-default">
            {p.selected !== undefined && (
              <Checkbox
                checked={p.selected}
                onChange={(e) => p.onSelectChange?.(e.target.checked, item)}
              />
            )}
          </div>

          <Templates.EmployeeInfo
            info={item}
            extra={
              <div>
                <span className="text-muted">has made a request for </span>
                <span>{item.type}</span>
              </div>
            }
          />
        </div>
        <div>
          <label className="text-muted font-semibold text-xs">Raised On</label>
          <div>{item.raisedOn}</div>
        </div>
        <div className="space-x-default self-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
