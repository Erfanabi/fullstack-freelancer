import { useForm } from "react-hook-form";
import RhfSelect from "../../ui/RhfSelect";
import Loader from "../../ui/Loader";
import { useChangeProposalStatus } from "./useChangeProposalStatus";

function ChangeProposalStatus({ proposalId, onClose }) {
  const option = [
    {
      value: 0,
      lable: "رد شده",
    },
    {
      value: 1,
      lable: "در انتظار تایید",
    },
    {
      lable: "تایید شده",
      value: 2,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();

  function onHanSub(data) {
    changeProposalStatus(
      { proposalId, ...data, id: proposalId },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onHanSub)}>
      <RhfSelect
        lable="تغییر وضعیت"
        register={register}
        name="status"
        required={true}
        errors={errors}
        option={option}
        validitonsSchema={{
          required: {
            value: true,
            message: "انتخاب ضروری است",
          },
        }}
      />

      <button className="btn-primary w-full mb-1" type="submit">
        {isUpdating ? <Loader color="white" height="24" /> : <p>تایید</p>}
      </button>
    </form>
  );
}

export default ChangeProposalStatus;
