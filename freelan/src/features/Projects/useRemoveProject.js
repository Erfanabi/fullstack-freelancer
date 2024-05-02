import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

function useRemoveProject() {
  const queryClient = useQueryClient();

  const { mutate: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,

    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-project"] });
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { deleteProject, isDeleting };
}

export default useRemoveProject;
