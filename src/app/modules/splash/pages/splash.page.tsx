import { FC, useEffect } from "react";
import { Layout, Spin } from "antd";
import { useNav } from "@common/hooks";

const SplashPage: FC = () => {
  const nav = useNav();

  useEffect(() => {
    setTimeout(() => {
      nav("/home/my-space/overview");
    }, 1000);
  }, [nav]);

  return (
    <Layout className="h-screen flex items-center justify-center">
      <Spin spinning />
    </Layout>
  );
};

export default SplashPage;
