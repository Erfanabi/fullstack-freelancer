import { Tooltip } from "@nextui-org/react";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersionNumberWithComma from "../../utils/toPersionNumberWithComma";
import truncateText from "../../utils/truncateText";
import { EditIcon } from "./tableData/EditIcon";
import { DeleteIcon } from "./tableData/DeleteIcon";
import { useState } from "react";
import Modal from "../../ui/modal/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { deleteProject, isDeleting } = useRemoveProject();

  return (
    <Table.Row key={project._id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{truncateText(project.title, 30)}</Table.Td>
      <Table.Td>{project.category.title}</Table.Td>
      <Table.Td>{toPersionNumberWithComma(project.budget)}</Table.Td>
      <Table.Td>{toLocalDateShort(project.deadline)}</Table.Td>
      <Table.Td>
        <div className="flex flex-wrap items-center gap-2 max-w-[500px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge bg-gray-500">
              {tag}
            </span>
          ))}
        </div>
      </Table.Td>
      <Table.Td>{project?.freelancer?.name || "-"}</Table.Td>
      <Table.Td>
        <ToggleProjectStatus project={project} />
      </Table.Td>
      <Table.Td>
        <div className="relative flex items-center gap-3">
          <Tooltip content="Edit user">
            <button
              className="text-xl text-primary-900 cursor-pointer active:opacity-50"
              onClick={() => setIsEditOpen(true)}
            >
              <EditIcon />
            </button>
          </Tooltip>

          {isEditOpen && (
            <Modal
              title={`ویرایش ${project.title}`}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                onClose={() => setIsEditOpen(false)}
                projectToEdit={project}
              />
            </Modal>
          )}

          <Tooltip color="danger" content="Delete user">
            <button
              className="text-xl text-danger cursor-pointer active:opacity-50"
              onClick={() => setIsDeleteOpen(true)}
            >
              <DeleteIcon />
            </button>
          </Tooltip>

          {isDeleteOpen && (
            <Modal
              title={`حذف ${project.title}`}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  deleteProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
              />
            </Modal>
          )}
        </div>
      </Table.Td>
      <Table.Td>
        <Link className="flex justify-center" to={project._id}>
          <HiEye className="w-5 h-5 text-secondary-500" />
        </Link>
      </Table.Td>
    </Table.Row>
  );
}

export default ProjectRow;

// className="text-2xl text-default-400 cursor-pointer active:opacity-50 border-none bg-transparent h-fit !pl-0 !pr-0"

{
  /* <ModalUi title="modal">
            <p className="mt-1 text-gray-800 dark:text-gray-400 mb-5">
              آیا از حذف <span>{project.title}</span> مطمین هستید؟
            </p>

            <div className="flex gap-x-9">
              <button className="btn-primary !py-1 flex-1">لغو</button>
              <button className="btn btn--danger flex-1">تایید</button>
            </div>
          </ModalUi> */
}

// {project.status === "OPEN" ? (
//   <span className="badge bg-teal-500">باز</span>
// ) : (
//   <span className="badge bg-red-500">بسته</span>
// )}
