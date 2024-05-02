import { useState } from "react";
import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import toPersionNumberWithComma from "../../../utils/toPersionNumberWithComma";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/modal/Modal";
import CreateProposal from "./CreateProposal";

function ProjectsRow({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <Table.Row key={project._id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{truncateText(project.title, 30)}</Table.Td>
      <Table.Td>{toPersionNumberWithComma(project.budget)}</Table.Td>
      <Table.Td>{toLocalDateShort(project.deadline)}</Table.Td>
      <Table.Td>
        {project.status === "OPEN" ? (
          <span className="badge bg-success">باز</span>
        ) : (
          <span className="badge bg-danger">بسته</span>
        )}
      </Table.Td>
      <Table.Td>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
        {open && (
          <Modal
            title={`درخواست انجام پروژه ${project.title}`}
            onClose={() => setOpen(false)}
          >
            <CreateProposal
              projectId={project._id}
              onClose={() => setOpen(false)}
            />
          </Modal>
        )}
      </Table.Td>
    </Table.Row>
  );
}

export default ProjectsRow;
