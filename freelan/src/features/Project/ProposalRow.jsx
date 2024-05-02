import { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/modal/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

function ProposalRow({ proposal, index }) {
  const statusStyle = [
    { lable: "رد شده", class: "bg-danger" },
    { lable: "در انتظار تایید", class: "bg-warning" },
    { lable: "تایید شده", class: "bg-success" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <Table.Row key={proposal._id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{proposal.user.name}</Table.Td>
      <Table.Td>
        <p>{truncateText(proposal.description, 50)}</p>
      </Table.Td>
      <Table.Td>{proposal.duration}</Table.Td>
      <Table.Td>{proposal.price}</Table.Td>
      <Table.Td>
        <div className={`badge ${statusStyle[proposal.status].class}`}>
          {statusStyle[proposal.status].lable}
        </div>
      </Table.Td>
      <Table.Td>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        {open && (
          <Modal onClose={() => setOpen(false)} title="تغییر وضعیت درخواست">
            <ChangeProposalStatus
              proposalId={proposal._id}
              onClose={() => setOpen(false)}
            />
          </Modal>
        )}
      </Table.Td>
    </Table.Row>
  );
}

export default ProposalRow;

// proposal.status
