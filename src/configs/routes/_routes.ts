// List of URL paths that our application supports.
export const Paths = [
  // Root
  "/",
  "/dashboard",
  // Home My Space Routes
  "/home/my-space/overview",
  "/home/my-space/overview/activities",
  "/home/my-space/overview/feeds",
  "/home/my-space/overview/profile",
  "/home/my-space/overview/approvals",
  "/home/my-space/overview/leave",
  "/home/my-space/overview/files",
  "/home/my-space/overview/payslips",
  "/home/my-space/overview/related-data",
  "/home/my-space/dashboard",
  // Home Team Routes
  "/home/team/team-space",
  "/home/team/my-team",
  "/home/team/department",
  "/home/team/peers",
  "/home/team/ex-employees",
  "/home/team/approvals",
  // Home Organization Routes
  "/home/organization/overview",
  "/home/organization/announcements",
  "/home/organization/policies",
  "/home/organization/employees",
  "/home/organization/events",

  "/leave-tracker",
  "/files",
  "/travel",
  "/compensation",
  "/tasks",
] as const;

export type Path = (typeof Paths)[number]; // Exported type of Paths for auto completion.
