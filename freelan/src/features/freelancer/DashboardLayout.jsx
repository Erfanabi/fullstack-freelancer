import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";

function DashboardLayout() {
  const { proposals, isLoading } = useProposals();
  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <DashboardStats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
