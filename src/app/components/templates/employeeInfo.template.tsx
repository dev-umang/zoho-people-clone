import { EmployeeType } from "@modules/team/types/team.types";
import { Avatar } from "antd";
import { FC } from "react";

export interface EmployeeInfoTemplateProps {
  info?: Partial<EmployeeType>;
  extra?: React.ReactNode;
}

const EmployeeInfoTemplate: FC<EmployeeInfoTemplateProps> = ({
  info,
  extra,
}) => {
  return (
    <div className="flex gap-default items-center">
      <Avatar shape="square" src={info?.photoURL} />
      <div>
        <div>
          <span className="text-muted">{info?.employeeId}</span>
          <span> - {info?.name || "N/A"}</span>
        </div>
        {extra && <div>{extra}</div>}
      </div>
    </div>
  );
};

export default EmployeeInfoTemplate;
