import useProjectId from "../../features/Project/useProjectId";
import ProjectHeader from "../../features/Project/ProjectHeader";
import ProposalsTable from "../../features/Project/ProposalsTable";
import Loader from "../../ui/Loader";

function Project() {
  const { project, isLoading } = useProjectId();

  if (isLoading) return <Loader />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
