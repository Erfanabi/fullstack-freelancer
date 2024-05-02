import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import { columns } from "./tableData/data";
import useProposals from "./useProposals";

function ProposalsTable() {
  const { proposals = {}, isLoading } = useProposals();
  console.log(proposals);

  // ! isLoading ==> loading...
  // ! project.length = 0 => empty ...

  if (isLoading) return <Loader />;

  if (!proposals.length) return <Empty resourceName="پروژه" />;

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
          {proposals.map((proposal, index) => {
            return (
              <ProposalRow
                proposal={proposal}
                index={index}
                key={proposal._id}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalsTable;
