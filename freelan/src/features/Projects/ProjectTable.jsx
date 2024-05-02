import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import useOwnerProjects from "./useOwnerProjects";
import Table from "../../ui/Table";
import { columns } from "./tableData/data";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { projects = {}, isLoading } = useOwnerProjects();
  // console.log(projects);

  // ! isLoading ==> loading...
  // ! project.length = 0 => empty ...

  if (isLoading) return <Loader />;

  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className="overflow-auto max-h-[78vh]">
      <Table>
        <Table.Header>
          <tr className="bg-secondary-100">
            {columns.map((th) => (
              <th className="table-th" key={th.id}>
                {th.name}
              </th>
            ))}
          </tr>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => {
            return (
              <ProjectRow project={project} index={index} key={project._id} />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectTable;
