import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;
  const desiredRole = pathname.split("/")[1];

  let isVerified = false;
  if (Number(user?.status) === 2) isVerified = true;

  if (pathname.includes("owner")) {
    if (user && user.role === "OWNER") isAuthorized = true;
  }

  if (pathname.includes("freelancer")) {
    if (user && user.role === "FREELANCER") isAuthorized = true;
  }

  if (pathname.includes("admin")) {
    if (user && user.role === "ADMIN") isAuthorized = true;
  }

  return { isLoading, isAuthorized, isAuthenticated, isVerified };
}

// const roles = {
//   admin: "ADMIN",
//   owner: "OWNER",
//   freelancer: "FREELANCER",
// };
