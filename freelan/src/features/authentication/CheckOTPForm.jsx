import { CiEdit } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";

function CheckOTPForm({ phoneNumber, sendOTP, onBack }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(90);

  // ! sideEffect timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer((timer) => (timer -= 1));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  // ! Mutations
  const { isPending: isSending, mutateAsync: checkOTP } = useMutation({
    mutationFn: checkOtp,
  });

  async function checkOtpHandler(e) {
    e.preventDefault();
    try {
      const { message, user } = await checkOTP({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile");
      if (user.status != 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "✍️" });
        return;
      }
      if (user.role == "OWNER") return navigate("/owner");
      if (user.role == "ADMIN") return navigate("/owner");
      if (user.role == "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <form className="grid max-w-sm mx-auto" onSubmit={checkOtpHandler}>
      <button
        className="h-8 w-8 rounded-md bg-stone-50 flex items-center justify-center shadow-lg -mt-20"
        onClick={onBack}
      >
        <HiArrowRight />
      </button>

      <div className="mb-12 mt-5">
        <p>
          کد تایید برای شماره موبایل
          <span className="font-bold mx-1 text-sm align-bottom">
            {phoneNumber}
          </span>
          ارسال گردید
          <button
            className="text-primary-900 text-2xl align-sub mr-1.5"
            onClick={onBack}
          >
            <CiEdit />
          </button>
        </p>
      </div>

      {/* <label htmlFor="phoneNumber" className="mb-10">
        کد تایید را وارد کنید
      </label> */}
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex-row-reverse justify-between w-full"
        inputStyle={{
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
          border: "1px solid rgb(var(--color-primary-300))",
          borderRadius: "8px",
          marginBottom: "35px",
        }}
      />

      <button className="btn-primary" type="submit">
        {isSending ? <Loader color="white" height="24" /> : <p>تایید</p>}
      </button>

      {timer > 0 ? (
        <div className="text-primary-700 text-base font-bold">{timer}</div>
      ) : (
        <div
          className="text-primary-700 text-sm font-bold cursor-pointer"
          onClick={() => sendOTP({ phoneNumber })}
        >
          ارسال مجدد کد
        </div>
      )}
    </form>
  );
}

export default CheckOTPForm;
