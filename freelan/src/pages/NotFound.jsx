import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-secondary-900 flex items-start h-screen">
      <div className="container max-w-screen-sm">
        <div className=" bg-gray-100 mt-16 text-gray-500 rounded-md shadow-xl w-full overflow-hidden px-5 py-6">
          <p className="font-bold text-xl mb-5">
            صفحه ای که دنبالش بودید پیدا نشد
          </p>

          <button
            className="flex items-center gap-x-1"
            onClick={() => navigate(-1)}
          >
            <HiArrowRight className="text-2xl text-primary-900" />
            <span className="">برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
