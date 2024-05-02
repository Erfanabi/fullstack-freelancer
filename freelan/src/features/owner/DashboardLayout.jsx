import Loader from "../../ui/Loader";
import useOwnerProjects from "../Projects/useOwnerProjects";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";

function DashboardLayout() {
  const { projects, isLoading } = useOwnerProjects();
  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <DashboardStats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
