function ConfirmDelete({ resourceName, onClose, onConfirm }) {
  return (
    <div>
      <p className="mt-1 text-sm sm:text-base text-gray-800 dark:text-gray-400 mb-8">
        آیا از حذف <span>{resourceName}</span> مطمین هستید؟
      </p>

      <div className="flex items-center gap-x-6">
        <button className="btn-primary py-2 flex-1" onClick={onClose}>
          لغو
        </button>
        <button className="btn--danger py-2 flex-1" onClick={onConfirm}>
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
