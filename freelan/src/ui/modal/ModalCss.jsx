import { HiOutlineX } from "react-icons/hi";
import closeOutsideModal from "../utils/closeOutsideModal";

function ModalCss({ children, onClose, title }) {
  return (
    <div className="modal-drop">
      {closeOutsideModal(onClose)}
      <div className="modal-content">
        <div className="modal-head">
          <h5 className="mb-0 fw-bold fs-7">{title}</h5>
          <HiOutlineX className="close-icon" onClick={onClose} />
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default ModalCss;
