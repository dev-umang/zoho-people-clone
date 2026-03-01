import { useURLParams } from "@common/hooks/useURLParams";
import { Templates } from "@components/templates/templates";
import { LeaveType } from "@modules/leaveTracker/types/leaves.types";
import { Drawer, Modal } from "antd";
import { FC, useState } from "react";

const LeaveInfoDialog: FC = () => {
  const { getParam, removeParam } = useURLParams();
  const [leaveInfo, setLeaveInfo] = useState<LeaveType>();
  return (
    <Modal
      open={!!getParam("employeeId")}
      onCancel={() => removeParam("employeeId")}
      title="Leave Information"
      footer={null}
      width="calc(100vw - 12px)"
      centered
      style={{maxWidth: '100vw'}}
      styles={{
        wrapper: { height: "100vh" },
        body: { height: "calc(100vh - 12px - 72px)" },
      }}
      //   placement="bottom"
    >
      <Templates.EmployeeInfo info={leaveInfo} />
      <div className="mt-4"></div>
      <p>
        <strong>Leave Type:</strong> {leaveInfo?.type}
      </p>
      <p>
        <strong>From:</strong> {leaveInfo?.from}
      </p>
      <p>
        <strong>To:</strong> {leaveInfo?.to}
      </p>
    </Modal>
  );
};

export default LeaveInfoDialog;
