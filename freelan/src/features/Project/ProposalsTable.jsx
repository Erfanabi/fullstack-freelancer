import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import { columns } from "./proposalData/data";

function ProposalsTable({ proposals = {} }) {
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
