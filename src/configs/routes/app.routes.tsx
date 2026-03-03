import { ReactElement, type FC } from "react";
import { type RouteObject } from "react-router-dom";
import { MainLayout } from "@app/layouts";
import type { Path } from ".";
import { Page404 } from "@modules/404";
import { SplashPage } from "@modules/splash";
import DashboardPage from "@modules/home/mySpace/pages/dashboard.page";
import MySpaceOverviewLayout from "@modules/home/mySpace/layouts/mySpaceOverview.layout";
import MySpaceActivitiesPage from "@modules/home/mySpace/pages/mySpaceOverview/mySpaceActivities.page";
import MySpaceFeedsPage from "@modules/home/mySpace/pages/mySpaceOverview/mySpaceFeeds.page";
import MySpaceProfilePage from "@modules/home/mySpace/pages/mySpaceOverview/mySpaceProfile.page";
import MySpaceApprovalsPage from "@modules/home/mySpace/pages/mySpaceOverview/mySpaceApprovals.page";
import MySpaceLeavePage from "@modules/home/mySpace/pages/mySpaceOverview/mySpaceLeave.page";
import MySpaceFilesPage from "@modules/home/mySpace/pages/mySpaceOverview/mySpaceFiles.page";
import MySpacePayslipsPage from "@modules/home/mySpace/pages/mySpaceOverview/mySpacePayslips.page";
import MySpaceRelatedDataPage from "@modules/home/mySpace/pages/mySpaceOverview/mySpaceRelatedData.page";
import MySpaceOverviewPage from "@modules/home/mySpace/pages/mySpaceOverview.page";
import NavigationLayout from "@app/layouts/navigation/navigation.layout";
import LeaveSummaryPage from "@modules/leaveTracker/myData/pages/leaveSummary.page";

// Returns dynamic paths according to given parameters for specific module
export const Href = {};

// Returns a route object to map that particular
const r = (
  Component: FC,
  extra: Path | undefined | "*" | RouteObject[] = undefined,
): RouteObject => ({
  path: typeof extra === "string" ? extra : undefined,
  Component,
  children: typeof extra === "object" ? extra : undefined,
});

const l = (
  Component: ReactElement,
  extra: Path | undefined | "*" | RouteObject[] = undefined,
): RouteObject => ({
  path: typeof extra === "string" ? extra : undefined,
  element: Component,
  children: typeof extra === "object" ? extra : undefined,
});

// Application router configuration. Path to component mapping
export const AppRoutes: RouteObject[] = [
  r(Page404, "*"),
  r(SplashPage, "/"),
  r(MainLayout, [
    l(<NavigationLayout menuKey="mySpace" />, [
      r(MySpaceOverviewPage, "/home/my-space/overview"),
      r(MySpaceOverviewLayout, [
        r(MySpaceActivitiesPage, "/home/my-space/overview/activities"),
        r(MySpaceFeedsPage, "/home/my-space/overview/feeds"),
        r(MySpaceProfilePage, "/home/my-space/overview/profile"),
        r(MySpaceApprovalsPage, "/home/my-space/overview/approvals"),
        r(MySpaceLeavePage, "/home/my-space/overview/leave"),
        r(MySpaceFilesPage, "/home/my-space/overview/files"),
        r(MySpacePayslipsPage, "/home/my-space/overview/payslips"),
        r(MySpaceRelatedDataPage, "/home/my-space/overview/related-data"),
      ]),
      r(DashboardPage, "/home/my-space/dashboard"),
    ]),
    l(<NavigationLayout menuKey="leaveTrackerMyData" />, [
      r(LeaveSummaryPage, "/leave-tracker/my-data/summary"),
      r(DashboardPage, "/leave-tracker/my-data/balance"),
      r(DashboardPage, "/leave-tracker/my-data/requests"),
    ]),
    r(DashboardPage, "/files"),
    r(DashboardPage, "/travel"),
    r(DashboardPage, "/compensation"),
    r(DashboardPage, "/tasks"),
  ]),
];
