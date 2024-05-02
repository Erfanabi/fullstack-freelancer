import Table from "../../ui/Table";
import toPersionNumberWithComma from "../../utils/toPersionNumberWithComma";
import truncateText from "../../utils/truncateText";

function ProposalRow({ proposal, index }) {
  const statusStyle = [
    { lable: "رد شده", class: "bg-danger" },
    { lable: "در انتظار تایید", class: "bg-warning" },
    { lable: "تایید شده", class: "bg-success" },
  ];

  return (
    // key={proposal._id}
    <Table.Row>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{truncateText(proposal.description, 50)}</Table.Td>
      <Table.Td>{toPersionNumberWithComma(proposal.duration)} روز</Table.Td>
      <Table.Td>{toPersionNumberWithComma(proposal.price)}</Table.Td>
      <Table.Td>
        <div className={`badge ${statusStyle[proposal.status].class}`}>
          {statusStyle[proposal.status].lable}
        </div>
      </Table.Td>
    </Table.Row>
  );
}

export default ProposalRow;

{
  /* <div className={`badge ${statusStyle[item.status].class}`}>
          {statusStyle[item.status].lable}
        </div> */
}
