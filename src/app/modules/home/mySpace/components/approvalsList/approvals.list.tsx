import { DATA } from "@common/data";
import { Button, Checkbox, List } from "antd";
import { FC, useState } from "react";
import ApprovalListItem from "./approval.listItem";
import { LeaveType } from "@modules/leaveTracker/types/leaves.types";
import ConfirmApprovalModal from "../modals/confirmApproval.modal";

const ApprovalsList: FC = () => {
  const [selected, setSelected] = useState<LeaveType[]>([]);
  const hasData = selected.length > 0;
  const [openType, setOpenType] = useState<"approve" | "reject" | false>(false);

  return (
    <div>
      <div className="p-1">
        {hasData && (
          <div className="flex items-center gap-default p-2">
            <div className="px-default">
              <Checkbox
                indeterminate={
                  hasData && selected.length < DATA.leaves.pending.length
                }
                checked={selected.length === DATA.leaves.pending.length}
                onChange={(e) =>
                  setSelected(e.target.checked ? DATA.leaves.pending : [])
                }
              />
            </div>
            <Button onClick={() => setOpenType("approve")} type="primary">
              Approve
            </Button>
            <Button onClick={() => setOpenType("reject")} type="dashed" danger>
              Reject
            </Button>
          </div>
        )}
      </div>
      <List
        dataSource={DATA.leaves.pending}
        renderItem={(item) => (
          <ApprovalListItem
            item={item}
            selected={selected.includes(item)}
            onSelectChange={(isSelected, item) => {
              setSelected((prev) =>
                isSelected ? [...prev, item] : prev.filter((i) => i !== item),
              );
            }}
          />
        )}
      />
      <ConfirmApprovalModal
        open={!!openType}
        onClose={() => setOpenType(false)}
        modalType={openType || undefined}
      />
    </div>
  );
};

export default ApprovalsList;
