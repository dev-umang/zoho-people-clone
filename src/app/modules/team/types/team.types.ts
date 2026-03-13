export type EmployeeType = {
  employeeId: string;
  name: string;
  photoURL: string;
};

export type ReporteeType = EmployeeType & {
  designation: string;
  department: string;
  branch?: {
    name?: string;
    city: string;
  };
  shift: string; // morning, evening, night, etc.
  shiftTime: string; // 12:30 PM to 11:00 PM
  leavesBooked: number;
};
