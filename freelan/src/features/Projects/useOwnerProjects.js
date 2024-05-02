import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";

function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-project"],
    queryFn: getOwnerProjectsApi,
  });

  //! ممکنه وجود نداشته باشه وخطا بده
  const { projects } = data || {};

  return { projects, isLoading };
}

export default useOwnerProjects;
