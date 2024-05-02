import { useForm } from "react-hook-form";
import TextFieldHookForm from "../../../ui/TextFieldHookForm";
import { useCreateProposal } from "../../proposals/useCreateProposal";
import Loader from "../../../ui/Loader";

function CreateProposal({ projectId, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createProposal, isCreating } = useCreateProposal();

  const onHanSub = (data) => {
    const newProposal = { ...data, projectId };
    createProposal(newProposal, {
      onSuccess: () => onClose(),
    });
  };
  return (
    <form onSubmit={handleSubmit(onHanSub)}>
      <TextFieldHookForm
        lable="توضیحات"
        type="text"
        register={register}
        name="description"
        required={true}
        errors={errors}
        validitonsSchema={{
          required: {
            value: true,
            message: "توضیحات ضروری است",
          },
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
      ></TextFieldHookForm>

      <TextFieldHookForm
        lable="قیمت"
        type="number"
        register={register}
        name="price"
        required={true}
        errors={errors}
        validitonsSchema={{
          required: {
            value: true,
            message: "قیمت ضروری است",
          },
        }}
      ></TextFieldHookForm>

      <TextFieldHookForm
        lable="مدت زمان"
        type="number"
        register={register}
        name="duration"
        required={true}
        errors={errors}
        validitonsSchema={{
          required: {
            value: true,
            message: "مدت زمان ضروری است",
          },
        }}
      ></TextFieldHookForm>

      <button className="btn-primary w-full" type="submit">
        {isCreating ? <Loader color="white" height="24" /> : <p>تایید</p>}
      </button>
    </form>
  );
}

export default CreateProposal;
