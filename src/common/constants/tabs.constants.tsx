import { TabItem } from "@common/types/common.types";
import { Path } from "@configs/routes";
import { Link } from "react-router-dom";

type Tabs = {
  home: TabItem[];
  mySpace: TabItem[];
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
};
