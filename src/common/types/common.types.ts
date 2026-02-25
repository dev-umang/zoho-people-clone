import { Path } from "@configs/routes";
import { ReactNode } from "react";

export type MenuItem = {
  icon: ReactNode;
  activeIcon?: ReactNode;
  label: ReactNode;
  href?: Path | string;
  key: string;
  children?: MenuItem[];
};

export type TabItem = {
  label: ReactNode;
  key: string;
};
