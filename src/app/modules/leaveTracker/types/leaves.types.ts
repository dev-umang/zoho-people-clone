import { EmployeeType } from "@modules/team/types/team.types";

export type LeaveType = EmployeeType & {
  type: string;
  from: string;
  to: string;
  raisedOn: string;
  reason: string;
};
