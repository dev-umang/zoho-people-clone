import { faker } from "@faker-js/faker";

faker.seed(20260303);

type MyHoliday = {
  date: string;
  holidayClassification: "Holiday";
  isHoliday: true;
  name: string;
  isOptional: boolean;
  disDate: string;
  isUpcoming: boolean;
  day: string;
  desc: string;
};

type MyLeaveDayDetail = {
  date: string;
  leaveSession: number;
  leavecount: string;
  display: string;
  ishalfday: boolean;
  ishalfholiday: boolean;
  isLeaveFirst: boolean;
};

type MyLeave = {
  fromDay: string;
  reason: string;
  leaveTaken: number;
  isDayLeave: boolean;
  type: 0;
  recordId: string;
  from: string;
  dayDetails: MyLeaveDayDetail[];
  leaveUnit: "day" | "days";
  approvalStatus: -1 | 1 | 2;
  employeeName: string;
  ddate: string;
  leavetype: string;
  isLeave: true;
  distoDay: string;
  toDate: string;
  leavetypeColor: string;
  leavecolorValue: number;
  fromDate: string;
  isOneDay: boolean;
  toDay: string;
  allowExtend: boolean;
  to: string;
  isUpcoming: boolean;
  approvalStatusDisplay: "Pending" | "Approved" | "Cancelled";
  leavetypeId: string;
  disfromDay: string;
};

type MyLeaveRecord = MyHoliday | MyLeave;

type MyLeaveTotal = {
  leaveType:
    | "Earned Leave"
    | "Leave Without Pay"
    | "Sick Leave"
    | "Work From Home";
  available: number;
  booked: number;
  used: number;
  planned: number;
  color: string;
};

const holidayNames = [
  "Holi",
  "Diwali",
  "Janmashtami",
  "Raksha Bandhan",
  "Independence Day",
  "Christmas",
  "Makar Sankranti",
];

const leaveTypeConfig = [
  {
    name: "Earned Leave",
    color: "#96bc42",
    value: 10,
    id: "88944000000227069",
    reasons: [
      "Attending family function out of town.",
      "Need personal time for important work.",
      "Traveling to hometown for family commitments.",
    ],
  },
  {
    name: "Work From Home",
    color: "#64d5fd",
    value: 1,
    id: "88944000001366001",
    reasons: [
      "Working remotely due to personal logistics.",
      "Need to stay at home for maintenance work.",
      "Travel constraints, requesting WFH.",
    ],
  },
  {
    name: "Sick Leave",
    color: "#ab4afc",
    value: 3,
    id: "88944000000227065",
    reasons: [
      "Mild fever and headache, need rest.",
      "Not feeling well and advised to rest.",
      "Medical appointment and recovery time needed.",
    ],
  },
  {
    name: "Leave Without Pay",
    color: "#ef7f7f",
    value: 12,
    id: "88944000009999001",
    reasons: [
      "Need urgent personal time beyond available balance.",
      "Unplanned leave request for personal reasons.",
      "Requesting unpaid leave for family commitment.",
    ],
  },
];

const approvalConfig = [
  { status: 1 as const, label: "Approved" as const },
  { status: -1 as const, label: "Pending" as const },
  { status: 2 as const, label: "Cancelled" as const },
];

const toDDMMYYYY = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const toDDMon = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  return `${day} ${month}`;
};

const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fullDayMap = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const createDayDetails = (startDate: Date, totalDays: number) =>
  Array.from({ length: totalDays }, (_, idx) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + idx);

    return {
      date: toDDMon(date),
      leaveSession: 0,
      leavecount: "1.0",
      display: dayMap[date.getDay()],
      ishalfday: false,
      ishalfholiday: false,
      isLeaveFirst: false,
    };
  });

const generateLeaveRecord = (refDate: Date): MyLeave => {
  const leaveConfig = faker.helpers.arrayElement(leaveTypeConfig);
  const totalDays = faker.helpers.arrayElement([1, 1, 2, 3, 4, 5]);
  const start = new Date(refDate);
  start.setDate(start.getDate() - faker.number.int({ min: 0, max: 330 }));
  const end = new Date(start);
  end.setDate(start.getDate() + totalDays - 1);

  const status = faker.helpers.arrayElement(approvalConfig);
  const dayDetails = createDayDetails(start, totalDays);

  return {
    fromDay: fullDayMap[start.getDay()],
    reason: faker.helpers.arrayElement(leaveConfig.reasons),
    leaveTaken: totalDays,
    isDayLeave: true,
    type: 0,
    recordId: faker.string.numeric(17),
    from: toDDMon(start),
    dayDetails,
    leaveUnit: totalDays === 1 ? "day" : "days",
    approvalStatus: status.status,
    employeeName: "Umang Joshi",
    ddate: start.toISOString().split("T")[0],
    leavetype: leaveConfig.name,
    isLeave: true,
    distoDay: dayMap[end.getDay()],
    toDate: toDDMMYYYY(end),
    leavetypeColor: leaveConfig.color,
    leavecolorValue: leaveConfig.value,
    fromDate: toDDMMYYYY(start),
    isOneDay: totalDays === 1,
    toDay: fullDayMap[end.getDay()],
    allowExtend: false,
    to: toDDMon(end),
    isUpcoming: start >= refDate,
    approvalStatusDisplay: status.label,
    leavetypeId: leaveConfig.id,
    disfromDay: dayMap[start.getDay()],
  };
};

const generateHolidayRecord = (refDate: Date): MyHoliday => {
  const date = new Date(refDate);
  date.setDate(date.getDate() - faker.number.int({ min: 5, max: 360 }));

  return {
    date: toDDMon(date),
    holidayClassification: "Holiday",
    isHoliday: true,
    name: faker.helpers.arrayElement(holidayNames),
    isOptional: false,
    disDate: toDDMMYYYY(date),
    isUpcoming: date >= refDate,
    day: fullDayMap[date.getDay()],
    desc: "",
  };
};

const generateMyLeaves = (count = 50): MyLeaveRecord[] => {
  const today = new Date("2026-03-03T00:00:00");
  const records: MyLeaveRecord[] = Array.from({ length: count }, () => {
    const isHoliday = faker.datatype.boolean({ probability: 0.2 });
    return isHoliday
      ? generateHolidayRecord(today)
      : generateLeaveRecord(today);
  });

  return records.sort((a, b) => {
    const aDate =
      "ddate" in a ? a.ddate : a.disDate.split("-").reverse().join("-");
    const bDate =
      "ddate" in b ? b.ddate : b.disDate.split("-").reverse().join("-");
    return bDate.localeCompare(aDate);
  });
};

const leaveOpeningBalance: Record<MyLeaveTotal["leaveType"], number> = {
  "Earned Leave": 24,
  "Leave Without Pay": 0,
  "Sick Leave": 8,
  "Work From Home": 12,
};

const roundTo2 = (value: number) => Math.round(value * 100) / 100;

const generateMyLeaveTotals = (records: MyLeaveRecord[]): MyLeaveTotal[] => {
  const leaves = records.filter(
    (record): record is MyLeave =>
      "isLeave" in record && record.approvalStatus !== 2,
  );

  const leaveTypes: MyLeaveTotal["leaveType"][] = [
    "Earned Leave",
    "Leave Without Pay",
    "Sick Leave",
    "Work From Home",
  ];

  return leaveTypes.map((leaveType) => {
    const typeLeaves = leaves.filter((leave) => leave.leavetype === leaveType);
    const config = leaveTypeConfig.find((c) => c.name === leaveType);

    const used = roundTo2(
      typeLeaves
        .filter((leave) => !leave.isUpcoming && leave.approvalStatus === 1)
        .reduce((sum, leave) => sum + leave.leaveTaken, 0),
    );

    const planned = roundTo2(
      typeLeaves
        .filter((leave) => leave.isUpcoming)
        .reduce((sum, leave) => sum + leave.leaveTaken, 0),
    );

    const booked = roundTo2(
      typeLeaves.reduce((sum, leave) => sum + leave.leaveTaken, 0),
    );

    const available =
      leaveType === "Leave Without Pay"
        ? 0
        : roundTo2(Math.max(0, leaveOpeningBalance[leaveType] - booked));

    return {
      leaveType,
      available,
      booked,
      used,
      planned,
      color: config?.color || "#000000",
    };
  });
};

const myLeaves = generateMyLeaves(10);
const myLeaveTotals = generateMyLeaveTotals(myLeaves);

export const dataMyLeaves = {
  myLeaves,
  myLeaveTotals,
};
