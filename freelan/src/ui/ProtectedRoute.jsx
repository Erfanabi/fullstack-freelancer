import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize";
import Loader from "./Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // ! 1. Load the authenticated user
  const { isLoading, isAuthorized, isAuthenticated, isVerified } =
    useAuthorize();
  //   console.log(isAuthenticated);
  //   console.log(isAuthorized);
  // console.log(isVerified);

  // ! 2. If there is NO authenticated user, redirect to the /auth
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) return navigate("/auth");
      if (!isVerified && !isLoading) {
        toast.error("پروفایل شما هنوز تایید نشده است.");
        return navigate("/");
      }
      if (!isAuthorized && !isLoading) return navigate("/not-access");
    },
    [isAuthenticated, isAuthorized, isLoading, navigate]
  );

  // ! 3. While loading, show a loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );

  // ! 4. If there IS a user, render the app
  if (isAuthorized) return children;
}

export default ProtectedRoute;
