import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import DashboardStats from "./DashboardStats";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { proposals = {}, isLoading: isLoading1 } = useProposals();
  const { projects = {}, isLoading: isLoading2 } = useProjects();
  const { users = {}, isLoading: isLoading3 } = useUsers();

  if (isLoading1 && isLoading2 && isLoading3) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <DashboardStats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </div>
  );
}

export default DashboardLayout;
