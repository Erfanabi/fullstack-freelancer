import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stats from "../../ui/Stats";

function DashboardStats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter(
    (item) => item.status == "CLOSED"
  ).length;

  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );

  console.log((projects.map((item) => item.proposals).flat()));

  return (
    <div className="dashboard-stats">
      <Stats
        icon={<HiOutlineViewGrid className="btn-icon" />}
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
      />
      <Stats
        icon={<HiCurrencyDollar className="btn-icon" />}
        title="پروژه واگذار شده"
        value={numOfAcceptedProjects}
        color="yellow"
      />
      <Stats
        icon={<HiCollection className="btn-icon" />}
        title="درخواست ها"
        value={numOfProposals}
        color="green"
      />
    </div>
  );
}

export default DashboardStats;
