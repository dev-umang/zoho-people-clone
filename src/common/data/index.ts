import { dataLeaves } from "./leaves.data";
import { dataMyLeaves } from "./myLeaves.data";
import { dataReportees } from "./reportees.data";
import { dataTenant } from "./tenant.data";
import { dataCurrentUser } from "./user.data";

export const DATA = {
  currentUser: dataCurrentUser,
  tenant: dataTenant,
  leaves: dataLeaves,
  myLeaves: dataMyLeaves,
  myLeaveTotals: dataMyLeaves.myLeaveTotals,
  reportees: dataReportees,
};
