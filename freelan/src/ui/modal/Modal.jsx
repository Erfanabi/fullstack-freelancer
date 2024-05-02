import { HiOutlineX } from "react-icons/hi";
// import closeOutsideModal from "../utils/closeOutsideModal";

function Modal({ children, onClose, title }) {
  return (
    <div className="modal-container">
      {/* {closeOutsideModal(onClose)} */}
      <div className="modal-center modal-drop">
        <div className="modal-content">
          <div className="modal-head">
            <h5 className="font-bold text-sm">{title}</h5>
            <HiOutlineX className="w-6 h-6 cursor-pointer" onClick={onClose} />
          </div>

          <div className="p-4 whitespace-normal">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

// fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100vh-2rem)]
// overflow-y-auto
