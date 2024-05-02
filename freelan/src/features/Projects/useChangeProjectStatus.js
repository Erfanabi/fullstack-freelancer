import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";

function useChangeProjectStatus() {
  const queryClient = useQueryClient();

  const { mutate: changeProjectStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeProjectStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-project"] });
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { changeProjectStatus, isUpdating };
}

export default useChangeProjectStatus;
