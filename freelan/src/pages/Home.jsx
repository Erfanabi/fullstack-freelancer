import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";

function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  const newRole = user?.role.toLowerCase();

  useEffect(() => {
    if (user?.status === 2) navigate(`${newRole}`, { replace: true });
  }, [user, navigate]);

  return (
    <div className="bg-secondary-0 w-full h-screen">
      <div className="container pt-10 text-center">
        <h1 className="mb-8 text-xl">✅ صفحه اصلی ✅</h1>

        <p className="mb-2 text-lg">
          👇 لطفا برای احرار هویت رو این دکمه کلیک کنید 👇
        </p>
        <p className="mb-5 text-sm">
          ( بعد از احراز هویت به صفحه مورد نظر هدایت می شوید )
        </p>
        <button
          className="bg-primary-700 text-white py-2 px-10 rounded-md"
          onClick={() => navigate("/auth")}
        >
          Click
        </button>

        <div className="text-right mt-6 space-y-7">
          <p>
            این پروژه با ریکت توسعه یافته شده که شامل پنل ادمین, پنل کارفرما, و
            فریلنسر می باشد.
          </p>

          <p>
            استایل دهی با tailwind فچ کردن دیتا ها با react query و اعتبار سنجی
            فرم ها با react-hook-form انجام می شود. پروژه ریسپانسیو هست.
          </p>

          <div className="space-y-3">
            <h3 className="mb-2">هدف پروژه :</h3>
            <li>کارفرما (owner) : ایجاد پروژه</li>
            <li>فریلنسر (freelancer) : ایجاد پیشنهاد</li>
            <li>
              ادمین (admin) : کنترل تمام فرایند ها (احراز هویت – کاربران –
              فریلنسر ها – پروژه ها – درخواست ها)
            </li>
          </div>

          <div className="space-y-3">
            <h3 className="mb-2">درباره پروژه : </h3>
            <p>
              قدم اول هر کاربری که وارد سایت می شه ابتدا باید ثبت نام کنه و نقش
              خودش رو تعیین بکنه . بعد باید منتظر باشه تا ادمین اجازه دسترسی بهش
              بده و احراز هویتش کنه. ( ورود به پنل کاربری توسط کد یکبار مصرف
              (otp)انجام می شود )
            </p>
            <p>
              اگر نقشی که انتخاب کرده کارفرما (owner) باشه می تونه پروژه ایجاد
              کنه و هر کاربری که به عنوان فریلسنر وارد بشه به اون پروژه پیشنهاد
              یا درخواست بده و اون کارفرما از بین پیشنهاد ها پروژه رو به یکی
              واگذار بکنه . ایجاد پروژه فقط توسط ادمین و کارفرما انجام می شود .
            </p>
            <p>
              ادمین بر تمام این فعالیت ها نظارت می کنه و لیستی از تمام کاربران و
              تمام پروژه ها و تمام درخواست ها در پنل خود دارد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
