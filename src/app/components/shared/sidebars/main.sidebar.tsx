import { PieChartFilled, PieChartOutlined } from "@ant-design/icons";
import { MENUS } from "@common/constants";
import { Tooltip } from "antd";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const MainSidebar: FC = () => {
  const path = useLocation().pathname;
  const segments = path.split("/").filter(Boolean);
  const firstSegment = segments[0] || "";

  return (
    <div className="bg-sider w-16 text-white h-screen overflow-y-auto overflow-x-hidden flex flex-col justify-between">
      <div>
        <a href="/" className="h-12 w-full flex items-center justify-center">
          <div className="h-6 w-6 bg-[url(https://static.zohocdn.com/zohopeople/people5/images/ppl_logo.b70dd01cd185414f1793c0a089d331d7.svg)] bg-contain bg-center bg-no-repeat bg-center"></div>
        </a>

        <ul className="mt-2 flex flex-col gap-3.5">
          {MENUS.sidebar?.map((item) => {
            const active = item.key === firstSegment;

            const ListItem = (
              <li
                key={item?.key}
                className="text-slate-300 hover:text-white w-full flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
              >
                <div
                  className={`${active ? "bg-active" : "bg-slate-500/10"} h-10 w-10 shrink-0 flex items-center justify-center rounded-lg`}
                >
                  <span className="">
                    {active ? item?.activeIcon : item?.icon}
                  </span>
                </div>
                <span className="text-[10px] line-clamp-1 font-semibold mt-1">
                  {item.label}
                </span>
              </li>
            );

            return (
              <Tooltip
                title={item.label}
                key={item.key}
                placement="right"
                mouseEnterDelay={0.5}
              >
                {item.href ? (
                  <Link to={item.href ?? ""}>{ListItem}</Link>
                ) : (
                  ListItem
                )}
              </Tooltip>
            );
          })}
        </ul>
      </div>
      <div className="py-default">
        <Tooltip title={"Reports"} placement="right" mouseEnterDelay={0.5}>
          <Link to={"/reports"}>
            <li
              key={"reports"}
              className="text-slate-300 hover:text-white w-full flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
            >
              <div
                className={`${path === "/reports" ? "bg-active" : "bg-slate-500/10"} h-10 w-10 shrink-0 flex items-center justify-center rounded-lg`}
              >
                <span className="">
                  {path === "/reports" ? (
                    <PieChartFilled classID="text-xl" />
                  ) : (
                    <PieChartOutlined className="text-xl" />
                  )}
                </span>
              </div>
              <span className="text-[10px] line-clamp-1 font-semibold mt-1">
                Reports
              </span>
            </li>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default MainSidebar;
