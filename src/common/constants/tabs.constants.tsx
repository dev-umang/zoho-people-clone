import { TabItem } from "@common/types/common.types";
import { Path } from "@configs/routes";
import { Link } from "react-router-dom";

type Tabs = {
  home: TabItem[];
  mySpace: TabItem[];
  mySpaceOverview: TabItem[];
};

const t = (href: Path, label: string): TabItem => ({
  key: href,
  label: (
    <Link className="block px-2 py-2.5" to={href}>
      {label}
    </Link>
  ),
});

export const TABS: Tabs = {
  home: [
    t("/home/my-space/overview", "My Space"),
    t("/home/team/team-space", "Team"),
    t("/home/organization/overview", "Organization"),
  ],
  mySpace: [
    t("/home/my-space/overview", "Overview"),
    t("/home/my-space/dashboard", "Dashboard"),
  ],
  mySpaceOverview: [
    t("/home/my-space/overview/activities", "Activities"),
    t("/home/my-space/overview/feeds", "Feeds"),
    t("/home/my-space/overview/profile", "Profile"),
    t("/home/my-space/overview/approvals", "Approvals"),
    t("/home/my-space/overview/leave", "Leave"),
    t("/home/my-space/overview/files", "Files"),
    t("/home/my-space/overview/payslips", "Payslips"),
    t("/home/my-space/overview/related-data", "Related Data"),
  ],
};
