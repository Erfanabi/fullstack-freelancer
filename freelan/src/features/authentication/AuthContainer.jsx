import { useEffect, useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import FormLogin from "../../ui/FormLogin";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const { register, handleSubmit, getValues } = useForm();
  const [step, setStep] = useState("1");

  // ! Mutations
  const { isPending: isSending, mutateAsync: sendOTP } = useMutation({
    mutationFn: getOtp,
  });

  const navigate = useNavigate();

  const { user } = useUser();
  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  async function onHanSub(data) {
    try {
      const res = await sendOTP(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setStep(2);
    } finally {
      if (getValues("phoneNumber") && getValues("phoneNumber").length == "11")
        setStep(2);
    }
  }

  return (
    <FormLogin>
      {step == 1 ? (
        <SendOTPForm
          register={register}
          onHanSub={handleSubmit(onHanSub)}
          isSending={isSending}
          setStep={setStep}
        />
      ) : (
        <CheckOTPForm
          phoneNumber={getValues("phoneNumber")}
          sendOTP={onHanSub}
          onBack={() => setStep(1)}
        />
      )}
    </FormLogin>
  );
}

export default AuthContainer;
