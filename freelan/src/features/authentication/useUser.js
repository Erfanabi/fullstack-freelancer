import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    // اگر موفق نبود دوباره انجام بده
    retry: false,
  });

  const { user } = data || [];

  return { user, isLoading };
}

export default useUser;
