import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stats from "../../ui/Stats";

function DashboardStats({ proposals, projects, users }) {
  return (
    <div className="dashboard-stats">
      <Stats
        icon={<HiUser className="btn-icon" />}
        title="کاربران"
        value={users}
        color="primary"
      />
      <Stats
        icon={<HiOutlineViewGrid className="btn-icon" />}
        title="درخواست ها"
        value={proposals}
        color="yellow"
      />
      <Stats
        icon={<HiCollection className="btn-icon" />}
        title="پروژه ها"
        value={projects}
        color="green"
      />
    </div>
  );
}

export default DashboardStats;
