import { type FC } from "react";
import { type RouteObject } from "react-router-dom";
import { MainLayout } from "@app/layouts";
import type { Path } from ".";
import { Page404 } from "@modules/404";
import { SplashPage } from "@modules/splash";
import OverviewPage from "@modules/home/mySpace/pages/overview.page";
import MySpaceLayout from "@modules/home/mySpace/layouts/mySpace.layout";
import DashboardPage from "@modules/home/mySpace/pages/dashboard.page";

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

// Application router configuration. Path to component mapping
export const AppRoutes: RouteObject[] = [
  r(Page404, "*"),
  r(SplashPage, "/"),
  r(MainLayout, [
    r(MySpaceLayout, [
      r(OverviewPage, "/home/my-space/overview"),
      r(DashboardPage, "/home/my-space/dashboard"),
    ]),
    r(DashboardPage, "/leave-tracker"),
    r(DashboardPage, "/files"),
    r(DashboardPage, "/travel"),
    r(DashboardPage, "/compensation"),
    r(DashboardPage, "/tasks"),
  ]),
];
