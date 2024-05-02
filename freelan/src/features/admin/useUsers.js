import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/authService";

function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
  });

  const { users } = data || [];

  return { users, isLoading };
}

export default useUsers;
