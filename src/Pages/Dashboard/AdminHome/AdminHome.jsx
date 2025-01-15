import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stats");
      return data;
    },
  });
  return (
    <div className="space-y-3 ml-3">
      <h2 className="text-3xl font-bold">
        Hey, Welcome{" "}
        {<span>{user?.displayName ? user?.displayName : "Back"}</span>}
      </h2>

      <div className="stats shadow">
        {/* 1 */}
        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Revenue</div>
          <div className="flex items-center justify-center">
            <div className="stat-value">{stats.revenue}</div>
            <FaDollarSign className="inline-block h-8 w-8 stroke-current text-secondary"></FaDollarSign>
          </div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        {/* 2*/}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="inline-block h-8 w-8 stroke-current"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        {/* 3*/}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItem}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        {/* 4*/}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
