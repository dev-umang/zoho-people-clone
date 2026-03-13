import { faker } from "@faker-js/faker";
import { ReporteeType } from "@modules/team/types/team.types";

const DEPARTMENTS = [
  "Engineering",
  "Product",
  "Design",
  "Data Science",
  "DevOps",
  "Quality Assurance",
  "Human Resources",
  "Finance",
  "Operations",
  "Marketing",
];

const DESIGNATIONS: Record<string, string[]> = {
  Engineering: ["Software Engineer", "Senior Software Engineer", "Team Lead"],
  Product: ["Product Manager", "Associate Product Manager"],
  Design: ["UI/UX Designer", "UX Researcher"],
  "Data Science": ["Data Analyst", "Senior Data Analyst"],
  DevOps: ["DevOps Engineer", "Cloud Architect"],
  "Quality Assurance": ["QA Engineer", "Senior QA Engineer"],
  "Human Resources": ["HR Manager", "HR Executive"],
  Finance: ["Finance Analyst", "Senior Finance Analyst"],
  Operations: ["Business Analyst", "Project Manager"],
  Marketing: ["Marketing Specialist", "Growth Manager"],
};

const BRANCHES = [
  { name: "HQ", city: "Bangalore" },
  { name: "West Office", city: "Mumbai" },
  { city: "Pune" },
  { name: "South Hub", city: "Chennai" },
  { name: "Tech Park", city: "Hyderabad" },
  { name: "North Campus", city: "Delhi" },
];

const SHIFTS: { shift: string; shiftTime: string }[] = [
  { shift: "Morning", shiftTime: "9:00 AM to 6:00 PM" },
  { shift: "General", shiftTime: "10:00 AM to 7:00 PM" },
  { shift: "Evening", shiftTime: "2:00 PM to 11:00 PM" },
  { shift: "Night", shiftTime: "10:00 PM to 7:00 AM" },
];

const generateReportee = (index: number): ReporteeType => {
  const department = faker.helpers.arrayElement(DEPARTMENTS);
  const designation = faker.helpers.arrayElement(DESIGNATIONS[department]);
  const branch = faker.helpers.arrayElement(BRANCHES);
  const shiftEntry = faker.helpers.arrayElement(SHIFTS);

  return {
    employeeId: `EMP${String(index + 1).padStart(3, "0")}`,
    name: faker.person.fullName(),
    photoURL: `https://i.pravatar.cc/150?img=${faker.number.int({ min: 1, max: 70 })}`,
    designation,
    department,
    branch,
    shift: shiftEntry.shift,
    shiftTime: shiftEntry.shiftTime,
    leavesBooked: faker.number.int({ min: 0, max: 10 }),
  };
};

const REPORTEE_POOL: ReporteeType[] = Array.from({ length: 18 }, (_, i) =>
  generateReportee(i),
);

const generateReportees = (
  count: number,
  including?: ReporteeType[],
): ReporteeType[] => {
  if (including && including.length > 0) {
    const includedIds = new Set(including.map((r) => r.employeeId));
    const remaining = REPORTEE_POOL.filter(
      (r) => !includedIds.has(r.employeeId),
    );
    return [...including, ...remaining].slice(0, count);
  }
  return REPORTEE_POOL.slice(0, count);
};

const directReportees = generateReportees(10);

export const dataReportees = {
  directReportees,
  allReportees: generateReportees(18, directReportees),
};
