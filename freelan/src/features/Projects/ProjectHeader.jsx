import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Modal from "../../ui/modal/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-8">
      <p className="font-bold text-lg text-secondary-600">پروژه های شما</p>
      <button
        className="btn-primary flex items-center py-2 px-2 text-sm mb-0"
        onClick={() => setIsOpen(true)}
      >
        <IoIosAdd className="w-7 h-7" />
        اضافه کردن پروژه
      </button>
      {isOpen && (
        <Modal title="اضافه کردن پروژه جدید" onClose={() => setIsOpen(false)}>
          <CreateProjectForm onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default ProjectHeader;
