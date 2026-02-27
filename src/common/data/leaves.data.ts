import { faker } from "@faker-js/faker";
import { LeaveType } from "@modules/leaveTracker/types/leaves.types";

const leaveTypes = [
  "Sick Leave",
  "Casual Leave",
  "Paid Leave",
  "Annual Leave",
  "Maternity Leave",
  "Paternity Leave",
  "Unpaid Leave",
];

const leaveReasons = [
  "Fever and cold",
  "Family emergency",
  "Medical appointment",
  "Personal work",
  "Wedding in family",
  "Out of town for personal reasons",
  "Health checkup",
  "Child care",
  "Home relocation",
  "Mental health day",
];

const generateLeaveData = (count: number): LeaveType[] => {
  return Array.from({ length: count }, (_, index) => {
    const raisedOn = faker.date.past({ years: 0.3 });
    const from = faker.date.soon({ days: 30, refDate: raisedOn });
    const to = faker.date.soon({ days: 7, refDate: from });

    return {
      employeeId: `E${String(index + 1).padStart(2, "0")}`,
      name: faker.person.fullName(),
      photoURL: faker.image.avatar(),
      type: faker.helpers.arrayElement(leaveTypes),
      from: from.toISOString().split("T")[0],
      to: to.toISOString().split("T")[0],
      raisedOn: raisedOn.toISOString().split("T")[0],
      reason: faker.helpers.arrayElement(leaveReasons),
    };
  });
};

export const dataLeaves = {
  pending: generateLeaveData(8),
  approved: generateLeaveData(15),
  rejected: generateLeaveData(5),
};
