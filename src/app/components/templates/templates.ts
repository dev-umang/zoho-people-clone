import { FC } from "react";
import EmployeeInfoTemplate, {
  EmployeeInfoTemplateProps,
} from "./employeeInfo.template";

export const Templates: {
  EmployeeInfo: FC<EmployeeInfoTemplateProps>;
} = {
  EmployeeInfo: EmployeeInfoTemplate,
};
