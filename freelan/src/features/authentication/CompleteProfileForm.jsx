import { useForm } from "react-hook-form";
import TextFieldHookForm from "../../ui/TextFieldHookForm";
import Loader from "../../ui/Loader";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import { useEffect } from "react";

function CompleteProfileForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isPending: isSending, mutateAsync: sendProfile } = useMutation({
    mutationFn: completeProfile,
  });

  // const { user } = useUser();
  // useEffect(() => {
  //   if (user) navigate("/", { replace: true });
  // }, [user, navigate]);

  async function handsub(data) {
    try {
      const { user, message } = await sendProfile(data);
      toast.success(message);

      // if (user.status != 2) {
      //   navigate("/");
      //   toast("پروفایل شما در انتظار تایید است", { icon: "✍️" });
      //   return;
      // }
      if (user.status === 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "✍️" });
        return;
      }
      // ! role => push to profile !!!
      // ! status => 0,1,2
      // ! check user status to push to profile or not
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(handsub)}>
      <TextFieldHookForm
        lable="نام و نام خانوادگی"
        type="text"
        register={register}
        name="name"
        required={true}
        errors={errors}
        validitonsSchema={{
          required: {
            value: true,
            message: "نام و نام خانوادگی ضروری است",
          },
        }}
      ></TextFieldHookForm>

      <TextFieldHookForm
        lable="ایمیل"
        type="email"
        register={register}
        name="email"
        required={true}
        errors={errors}
        validitonsSchema={{
          required: {
            value: true,
            message: "ایمیل ضروری است",
          },
        }}
      ></TextFieldHookForm>

      <div className="flex items-center justify-center gap-x-8 my-1 mb-8">
        <div className="form-check d-inline-block">
          <input
            className="focus:ring-0 focus:outline-none focus:border-0 focus:ring-offset-0 text-primary-900"
            type="radio"
            id="OWNER"
            value="OWNER"
            {...register("role", {
              required: {
                value: true,
                message: "انتخاب نقش ضروری ضروری است",
              },
            })}
          />
          <label className="mr-2" htmlFor="OWNER">
            کارفرما
          </label>
        </div>
        <div className="">
          <input
            className="focus:ring-0 focus:outline-none focus:border-0 focus:ring-offset-0 text-primary-900"
            type="radio"
            id="FREELANCER"
            value="FREELANCER"
            {...register("role", {
              required: {
                value: true,
                message: "انتخاب نقش ضروری ضروری است",
              },
            })}
          />
          <label className="mr-2" htmlFor="FREELANCER">
            فریلنسر
          </label>
        </div>
        {errors && errors["role"] && (
          <p className="text-error text-xs">{errors["role"]?.message}</p>
        )}
      </div>

      <button className="btn-primary w-full" type="submit">
        {isSending ? <Loader color="white" height="24" /> : <p>تایید</p>}
      </button>
    </form>
  );
}

export default CompleteProfileForm;
