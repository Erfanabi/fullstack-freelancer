import Loader from "../../ui/Loader";
import TextFieldHookForm from "../../ui/TextFieldHookForm";

function SendOTPForm({ register, onHanSub, isSending }) {
  return (
    <form className="grid max-w-sm mx-auto" onSubmit={onHanSub}>
      <p className="mb-16">لطفا شماره موبایل خود را وارد کنید</p>

      <TextFieldHookForm
        lable="تلفن همراه"
        type="tel"
        placeholder="+98"
        register={register}
        name="phoneNumber"
        required={true}
      ></TextFieldHookForm>

      <button className="btn-primary" type="submit">
        {isSending ? (
          <Loader color="white" height="24" />
        ) : (
          <p>ارسال کد تایید</p>
        )}
      </button>

      <p className="text-sm mx-auto">
        با ورود به فری لن، کلیه{" "}
        <span className="font-bold cursor-pointer">قوانین و مقررات</span> را
        می‌پذیرم{" "}
      </p>
    </form>
  );
}

export default SendOTPForm;

{
  /* <div className="flex items-center w-full gap-x-8">
        <div className="flex flex-col w-1/2">
          <label className="text-xs font-semibold px-1 mb-0.5">
            First name
          </label>
          <input
            type="text"
            className="w-full pr-10 pl-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-sm"
            placeholder="Erfan"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-xs font-semibold px-1 mb-0.5">
            Last name
          </label>
          <input
            type="text"
            className="w-full pr-10 pl-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-sm"
            placeholder="Sharafi"
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label className="text-xs font-semibold px-1 mb-1">Email</label>
        <input
          type="password"
          className="w-full pr-10 pl-3 py-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-sm"
          placeholder="Example@gmail.com"
        />
      </div> */
}

// {isSending ? (
//   <Loader />
// ) : (
//   <button className="btn-primary" type="submit">
//     ارسال کد تایید
//   </button>
// )}
