import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation, useSearchParams } from "react-router-dom";
import queryString from "query-string";

function useProjects() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  const { search } = useLocation();
  const parsed = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["projects", parsed],
    queryFn: () => getProjectsApi(search),
  });

  //! ممکنه وجود نداشته باشه وخطا بده
  const { projects } = data || {};

  return { projects, isLoading };
}

export default useProjects;
