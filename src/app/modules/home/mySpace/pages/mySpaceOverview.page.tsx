import { useNav } from "@common/hooks";
import { FC, useEffect } from "react";

const MySpaceOverviewPage: FC = () => {
  const nav = useNav();

  useEffect(() => {
    nav("/home/my-space/overview/activities", { replace: true });
  }, [nav]);

  return <div></div>;
};

export default MySpaceOverviewPage;
