import { useForm } from "react-hook-form";
import { useChangeProposalStatus } from "../../Project/useChangeProposalStatus";
import RhfSelect from "../../../ui/RhfSelect";
import Loader from "../../../ui/Loader";
import { useChangeUserStatus } from "../useChangeUserStatus";

function ChangeUserStatus({ userId, onClose }) {
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

  const { changeUserStatus, isUpdating } = useChangeUserStatus();

  function onHanSub(data) {
    changeUserStatus(
      { userId, data },
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

export default ChangeUserStatus;
