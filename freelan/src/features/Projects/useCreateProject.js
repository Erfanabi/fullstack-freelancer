import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import { toast } from "react-hot-toast";

// export const useCreateProject = () => {
//   return useMutation({ mutationFn: createProject });
// };

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: () => {
      toast.success("پروژه جدید با موفقیت ساخته شد");

      queryClient.invalidateQueries({
        queryKey: ["owner-project"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { createProject, isCreating };
};
