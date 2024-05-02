import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stats from "../../ui/Stats";

function DashboardStats({ proposals }) {
  const numOfProposals = proposals.length;

  const numOfAcceptedProposals = proposals.filter((item) => item.status == 2);

  const balanceProposals = numOfAcceptedProposals.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <div className="dashboard-stats">
      <Stats
        icon={<HiOutlineViewGrid className="btn-icon" />}
        title="درخواست ها"
        value={numOfProposals}
        color="primary"
      />
      <Stats
        icon={<HiCurrencyDollar className="btn-icon" />}
        title="درخواست های تایید شده"
        value={numOfAcceptedProposals.length}
        color="yellow"
      />
      <Stats
        icon={<HiCollection className="btn-icon" />}
        title="کیف پول"
        value={balanceProposals}
        color="green"
      />
    </div>
  );
}

export default DashboardStats;
